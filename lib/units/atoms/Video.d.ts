import React from 'react';
export declare type FileParams = {
    url: string;
};
export declare type RtspParams = {
    url: string | undefined;
    id: string | undefined;
    pwd: string | undefined;
    server: string;
};
export declare type ParamsMap = {
    file: FileParams;
    rtsp: RtspParams;
    local: undefined;
};
export interface VideoProps<K extends keyof ParamsMap> {
    className?: string;
    type: K;
    autoPlay?: boolean;
    muted?: boolean;
    controls?: boolean;
    params?: ParamsMap[K];
    onLoaded?: () => void;
    onResize?: () => void;
    onClick?: () => void;
    onFrame?: (duration: number, metadata: VideoFrameMetadata) => void;
}
export declare type VideoHandle = {
    getSize: () => any;
};
export declare const Video: React.MemoExoticComponent<React.ForwardRefExoticComponent<VideoProps<keyof ParamsMap> & React.RefAttributes<VideoHandle>>>;
