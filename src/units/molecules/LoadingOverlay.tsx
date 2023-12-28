
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled';
import { Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress/CircularProgress';
import React, { useEffect, useState } from 'react';
import { Box } from '../atoms/Box';
import { Button } from '../atoms/Button';
import { CenterLayout } from '../atoms/layouts/CenterLayout';
import { FlexLayout } from '../atoms/layouts/FlexLayout';
import { CustomLinearProgress } from '../atoms/LinearProgress';
import { Tooltip } from '../atoms/Tooltip';
import { Typography } from '../atoms/Typography';

export interface LoadingOverlayProps {
  active: boolean;
  message?: string;
  children?: React.ReactNode;
  type?: 'CircularProgress' | 'ProgressBar';
  progressInfo?: { name: string; progress: number }[];
  className?: string;
  onCancel?: () => void;
}

const StyledContainer = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  z-index: 999;
`;

export const LoadingOverlay = ({
  active,
  message,
  children,
  type,
  className,
  progressInfo,
  onCancel,
}: LoadingOverlayProps) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(active);
  }, [active]);

  useEffect(() => {
    const beforeUnloadEvent = async () => {
      if (onCancel) {
        await onCancel();
      }
    };
    window.addEventListener('beforeunload', beforeUnloadEvent);
    return () => {
      window.removeEventListener('beforeunload', beforeUnloadEvent);
    };
  }, []);

  return (
    <StyledContainer
      className={className}
      css={css`
        & > :first-of-type {
          opacity: ${open ? '.5' : '1'};
        }
      `}
    >
      {children}
      {open && (
        <Backdrop
          open={open}
          sx={{
            opacity: 1,
            zIndex: theme => theme.zIndex.drawer + 1,
          }}
        >
          <CenterLayout direction="column">
            {!type || type == 'CircularProgress' ? (
              <>
                <CircularProgress
                  css={css`
                    margin: 12px;
                  `}
                />
                {message && (
                  <Typography
                    variant="subtitle1"
                    css={css`
                      font-weight: bold;
                    `}
                  >
                    {message}
                  </Typography>
                )}{' '}
              </>
            ) : (
              <Box
                css={css`
                  width: 500px;
                  height: 500px;
                  overflow-x: hidden;
                  border-radius: 5px;
                  padding: 24px;
                  background: #222;
                `}
              >
                <FlexLayout
                  gap={20}
                  direction={'column'}
                  css={css`
                    height: 100%;
                  `}
                >
                  <div
                    css={css`
                      height: 100%;
                      overflow: auto;
                    `}
                  >
                    {progressInfo &&
                      progressInfo.map((info, idx) => {
                        return (
                          <div
                            key={idx}
                            css={css`
                              padding: 4px;
                            `}
                          >
                            <Tooltip title={info.name} followCursor>
                              <div>
                                <Typography
                                  noWrap
                                  variant="body1"
                                  color="text.secondary"
                                >
                                  {info.name}
                                </Typography>
                              </div>
                            </Tooltip>
                            <CustomLinearProgress
                              css={css`
                                height: 16px;
                                background-color: #333 !important;
                              `}
                              variant="determinate"
                              value={info.progress}
                            />
                          </div>
                        );
                      })}
                  </div>
                  <Button
                    css={css`
                      width: 30%;
                      align-self: end;
                    `}
                    onClick={e => {
                      onCancel && onCancel();
                    }}
                  >
                    Cancel
                  </Button>
                </FlexLayout>
              </Box>
            )}
          </CenterLayout>
        </Backdrop>
      )}
    </StyledContainer>
  );
};
