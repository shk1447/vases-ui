
import { jsx, css } from '@emotion/react'
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { styled } from '@mui/material';
import moment from 'moment';
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useResizeDetector } from 'react-resize-detector';
import {
  ICON_FullScreen,
  ICON_Pause,
  ICON_Play,
  ICON_Rate,
  ICON_VolumeHigh,
  ICON_VolumeOff,
} from '../../styles/icons';
import { Button } from '../../atoms/Button';
import { IconButton } from '../../atoms/IconButton';
import { FlexLayout } from '../../atoms/Layout/FlexLayout';
import { Menu, MenuItem } from '../../atoms/Menu';
import { Slider } from '../../atoms/Slider';
import { Typography } from '../../atoms/Typography';

export type FileParams = {
  url: string;
};

export type RtspParams = {
  url: string | undefined;
  id: string | undefined;
  pwd: string | undefined;
  server: string;
};

export type MediaPlayerParamsMap = {
  file: FileParams;
  rtsp: RtspParams;
  local: undefined;
};

const PlaySlider = styled(Slider)(() => ({
  '& .MuiSlider-root': {
    color: '#ffffff',
  },
  '& .MuiSlider-thumb': {
    width: 4,
    height: 4,
    transitionDuration: '1ms',
    '&:hover': {
      width: 10,
      height: 10,
      boxShadow: 'none',
    },
    '&:active': {
      width: 10,
      height: 10,
      boxShadow: 'none',
    },
  },
  '& .MuiSlider-track': {
    height: 2,
    transitionDuration: '1ms',
  },
  '& .MuiSlider-rail': {
    height: 4,
  },
}));

export interface MediaPlayerProps<K extends keyof MediaPlayerParamsMap> {
  className?: string;
  type: K;
  autoPlay?: boolean;
  muted?: boolean;
  controls?: boolean;
  params?: MediaPlayerParamsMap[K];
  onLoaded?: () => void;
  onResize?: () => void;
  onClick?: () => void;
  onFrame?: (duration: number, metadata: VideoFrameMetadata) => void;
}

export type MediaPlayerHandle = {
  getSize: () => any;
};

const _Video = forwardRef(
  <T extends keyof MediaPlayerParamsMap>(
    {
      className,
      type,
      autoPlay = true,
      muted = true,
      controls = false,
      params,
      onLoaded,
      onResize,
      onClick,
      onFrame,
    }: MediaPlayerProps<T>,
    _ref: React.Ref<MediaPlayerHandle>,
  ): ReactJSXElement => {
    const { width, height, ref } = useResizeDetector();
    const [visible, setVisible] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    // INFO : controller 상태
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [mediaTime, setMediaTime] = useState<number>(0);
    const [videoPaused, setVideoPaused] = useState<boolean>(!autoPlay);
    const [playRate, setPlayRate] = useState<number>(0.25);
    const [controlsHover, setControlsHover] = useState<boolean>(false);

    const volumeAnchor = useRef(null);
    const [volumeOpen, setVolumeOpen] = useState<boolean>(false);
    const [volume, setVolume] = useState<number>(0);

    const videoRateItems = [
      {
        key: '0.1',
        value: 0.1,
      },
      {
        key: '0.25',
        value: 0.25,
      },
      {
        key: '0.5',
        value: 0.5,
      },
      {
        key: '0.75',
        value: 0.75,
      },
      {
        key: '1',
        value: 1,
      },
      {
        key: '1.25',
        value: 1.25,
      },
      {
        key: '1.5',
        value: 1.5,
      },
      {
        key: '1.75',
        value: 1.75,
      },
      {
        key: '2',
        value: 2,
      },
    ];

    const handleRateClick = (e: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleRate = (e: any, idx: number) => {
      if (videoRef.current) {
        const rate = videoRateItems[idx].value;
        videoRef.current.playbackRate = rate;
        setPlayRate(rate);
        setAnchorEl(null);
      }
    };

    const handlePaused = (e: any) => {
      e.preventDefault();
      if (videoRef.current?.paused) {
        videoRef.current?.play();
      } else {
        videoRef.current?.pause();
      }
    };

    const handleFullScreen = (e: any) => {
      videoRef.current?.requestFullscreen({ navigationUI: 'show' });
    };

    const handlePlayTime = (e: any) => {
      if (videoRef.current) {
        const _time = e.target.value;
        setMediaTime(_time);
        videoRef.current.currentTime = _time;
      }
    };

    const handleVolume = (e: any) => {
      if (videoRef.current) {
        const _volume = e.target.value;
        videoRef.current.volume = _volume;
        setVolume(_volume);
      }
    };

    // INFO : Controller
    const VideoController = useMemo(() => {
      return (
        <FlexLayout
          gap={8}
          direction="row"
          css={css`
            position: absolute;
            width: 100%;
            align-items: center;
            justify-content: center;
            bottom: 0px;
            display: ${controlsHover ? 'block' : 'none'};
          `}
        >
          <FlexLayout
            direction="column"
            gap={2}
            css={css`
              width: 100%;
              height: 100%;
              padding: 0px 10px;
              background-color: rgba(0, 0, 0, 0.3);
            `}
          >
            <FlexLayout
              direction="row"
              gap={2}
              css={css`
                width: 100%;
                align-items: center;
                justify-content: space-between;
                padding: 0.1rem;
              `}
            >
              <FlexLayout
                direction="row"
                gap={4}
                css={css`
                  flex: 1;
                  align-items: center;
                `}
              >
                {/* {videoStateIcon} */}
                <IconButton
                  css={css`
                    color: white;
                  `}
                  onClick={handlePaused}
                >
                  {videoPaused ? <ICON_Play /> : <ICON_Pause />}
                </IconButton>
                <Typography variant="subtitle1">
                  {moment.utc(Math.round(mediaTime * 10) * 100).format('mm:ss')}{' '}
                  /{' '}
                  {moment
                    .utc((videoRef.current?.duration || 0) * 1000)
                    .format('mm:ss')}
                </Typography>
              </FlexLayout>

              <FlexLayout
                direction="row"
                gap={8}
                css={css`
                  flex: 1;
                  justify-content: flex-end;
                  align-items: center;
                `}
              >
                <IconButton
                  ref={volumeAnchor}
                  disabled={muted}
                  onClick={e => {
                    setVolumeOpen(true);
                  }}
                >
                  {!muted && volume > 0 ? (
                    <ICON_VolumeHigh />
                  ) : (
                    <ICON_VolumeOff />
                  )}
                </IconButton>

                <Menu
                  anchorEl={volumeAnchor.current}
                  open={volumeOpen && controlsHover}
                  onClick={e => {
                    e.stopPropagation();
                    setVolumeOpen(false);
                  }}
                  transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                  anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
                  sx={{
                    '& .MuiMenu-list': {
                      padding: 0,
                      overflow: 'hidden',
                    },
                  }}
                >
                  <div
                    css={css`
                      height: 80px;
                      padding: 10px 0px;
                    `}
                  >
                    <Slider
                      size="small"
                      onChange={handleVolume}
                      orientation="vertical"
                      value={volume}
                      step={0.01}
                      min={0}
                      max={1}
                      sx={{
                        '& .MuiSlider-thumb': {
                          width: 8,
                          height: 8,
                          '&:hover': {
                            boxShadow: 'none',
                          },
                          '&:active': {
                            boxShadow: 'none',
                          },
                        },
                      }}
                    ></Slider>
                  </div>
                </Menu>

                <IconButton
                  css={css`
                    color: white;
                  `}
                  onClick={handleFullScreen}
                >
                  <ICON_FullScreen />
                </IconButton>

                <Button
                  onClick={handleRateClick}
                  size="small"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  css={css`
                    color: white;
                    border: 1px solid rgba(151, 151, 151, 0.3);
                    border-radius: 8px;
                    justify-content: space-around;
                    align-items: center;
                  `}
                >
                  <ICON_Rate />
                  <Typography
                    css={css`
                      font-size: 0.9rem;
                      margin-left: 8px;
                    `}
                  >
                    x {playRate}
                  </Typography>
                </Button>
              </FlexLayout>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open && controlsHover}
                onClick={handleClose}
                transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                css={css`
                  font-size: 0.9rem;
                `}
              >
                {videoRateItems.map(({ key, value }, idx) => (
                  <MenuItem
                    key={key}
                    selected={value === playRate}
                    onClick={e => handleRate(e, idx)}
                  >
                    {value}
                  </MenuItem>
                ))}
              </Menu>
            </FlexLayout>
            <PlaySlider
              step={0.000001}
              value={mediaTime}
              onChange={e => handlePlayTime(e)}
              min={0}
              max={videoRef.current?.duration}
            />
          </FlexLayout>
        </FlexLayout>
      );
    }, [
      open,
      mediaTime,
      videoPaused,
      playRate,
      controlsHover,
      volumeOpen,
      volume,
    ]);

    useImperativeHandle(_ref, () => ({
      /** NOTE : 컨테이너 -> 비디오 -> SVG 순서로 resize 되어야 하는데, 컨테이너 -> SVG -> 비디오 순서로 resize 되는 타이밍 이슈 해결 필요 */
      getSize() {
        const ret = {
          width: 0,
          height: 0,
          top: 0,
          left: 0,
        };

        if (videoRef.current) {
          const bounding = videoRef.current.getBoundingClientRect();
          ret.width = bounding.width;
          ret.height = bounding.height;
          ret.top = bounding.top;
          ret.left = bounding.left;
        }

        return ret;
      },
    }));

    // Info : Video Data Source
    useEffect(() => {
      const stream = new MediaStream();

      const pc = new RTCPeerConnection({
        iceServers: [
          {
            urls: ['stun:stun.l.google.com:19302'],
          },
        ],
      });

      if (videoRef.current) {
        if (onFrame) {
          const callback = (now: number, metadata: VideoFrameMetadata) => {
            if (videoRef.current) {
              setMediaTime(metadata.mediaTime);
              onFrame(videoRef.current.duration, metadata);
              videoRef.current.requestVideoFrameCallback(callback);
            }
          };
          videoRef.current.requestVideoFrameCallback(callback);
          videoRef.current.defaultPlaybackRate = playRate;
          videoRef.current.volume = volume;
        }
        let options: any = {};

        switch (type) {
          case 'file':
            options = params as FileParams;
            videoRef.current.src = options.url;
            break;
          case 'rtsp':
            options = params as RtspParams;

            pc.onnegotiationneeded = async () => {
              const offer = await pc.createOffer();
              await pc.setLocalDescription(offer);

              if (pc.localDescription) {
                const formData = new FormData();

                formData.set(
                  'url',
                  options.url.replace(
                    'rtsp://',
                    `rtsp://${options.id}:${options.pwd}@`,
                  ),
                );
                formData.set('sdp64', btoa(pc.localDescription.sdp));

                const data = await fetch((params as RtspParams).server, {
                  method: 'POST',
                  body: formData,
                });

                if (!data.ok) pc.close();
                else {
                  const ret = await data.json();

                  try {
                    if (pc.localDescription) {
                      pc.setRemoteDescription(
                        new RTCSessionDescription({
                          type: 'answer',
                          sdp: atob((ret as any).sdp64),
                        }),
                      );
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }
              }
            };

            pc.ontrack = event => {
              stream.addTrack(event.track);
              if (videoRef.current) videoRef.current.srcObject = stream;
            };

            if (options.id && options.pwd && options.url) {
              // 받을 준비!
              pc.addTransceiver('video', {
                direction: 'sendrecv',
              });
              pc.addTransceiver('audio', {
                direction: 'sendrecv',
              });
            }

            break;
          case 'local':
            navigator.mediaDevices
              .getUserMedia({
                audio: true,
                video: true,
              })
              .then((value: MediaStream) => {
                if (videoRef.current) {
                  const tracks = value.getTracks();

                  tracks.forEach(track => {
                    if (track.kind == 'audio' && muted) return;
                    stream.addTrack(track);
                  });
                  videoRef.current.srcObject = stream;
                }
              });
            break;
        }

        videoRef.current.onloadeddata = () => {
          onLoaded && onLoaded();
          setVisible(true);
        };
      }

      return () => {
        console.log('destroy!!');
        pc.close();
      };
    }, [params]);

    // INFO : Resize
    useEffect(() => {
      if (width && height) {
        console.log(width, height);
        onResize && onResize();
      }

      if (videoRef.current) {
        console.log(videoRef.current.width);
        console.log(videoRef.current.height);
      }
    }, [width, height]);

    return (
      <div
        ref={ref}
        className={className}
        css={css`
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        `}
        onMouseOver={(e: any) => {
          e.stopPropagation();
          setControlsHover(true);
        }}
        onMouseOut={(e: any) => {
          e.stopPropagation();
          setControlsHover(false);
        }}
      >
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          muted={muted}
          controls={false}
          onClick={!controls && onClick ? onClick : handlePaused}
          onDoubleClick={handleFullScreen}
          onPause={(e: any) => setVideoPaused(e.target.paused)}
          onPlay={(e: any) => setVideoPaused(e.target.paused)}
          onEnded={(e: any) => setVideoPaused(e.target.paused)}
          css={css`
            position: absolute;
            height: inherit;
            opacity: 1;
            overflow: hidden;
            object-fit: inherit;
          `}
        >
          <track kind={'captions'} />
        </video>
        {controls ? VideoController : <></>}
      </div>
    );
  },
);

export const MediaPlayer = React.memo(_Video, (prev, next) => {
  return prev.params?.url == next.params?.url && prev.type == next.type;
});
