import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  Backdrop,
  Box,
  CircularProgress,
  circularProgressClasses,
} from '@mui/material';

import React, { Children, cloneElement, isValidElement } from 'react';
import { Typography } from '../../atoms/Typography';

export interface LoadingOverlayProps {
  active: boolean;
  message?: string;
  children?: React.ReactNode;
  className?: string;
}

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const LoadingOverlay = ({
  active,
  message,
  children,
  className,
}: LoadingOverlayProps) => {
  return (
    <StyledContainer
      className={className}
      css={css`
        overflow: hidden;
        user-select: ${active ? 'none' : ''};
        pointer-events: ${active ? 'none' : ''};
        & > :first-of-type {
          width: 100%;
          height: 100%;
        }
        flex: 1;
      `}
    >
      {Children.map(children, child => {
        if (isValidElement(child)) {
          return cloneElement(child, Object.assign({}, child.props) as any);
        }

        return child;
      })}
      {active && (
        <Backdrop
          open={active}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 1,
            background: 'rgba(0,0,0,0.4)',
            zIndex: theme => theme.zIndex.drawer + 999,
          }}
        >
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection="column"
          >
            <Box>
              <CircularProgress
                variant="determinate"
                sx={{
                  color: 'black',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  translate: '-50% -50%',
                }}
                size={40}
                thickness={4}
                value={100}
              />
              <CircularProgress
                sx={{
                  color: 'white',
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  translate: '-50% -50%',
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: 'round',
                  },
                }}
                size={40}
                thickness={4}
              />
            </Box>

            {message && (
              <Typography
                variant="subtitle2"
                color={'#DEE3E9'}
                css={css`
                  margin-top: 100px;
                `}
              >
                {message}
              </Typography>
            )}
          </Box>
        </Backdrop>
      )}
    </StyledContainer>
  );
};
