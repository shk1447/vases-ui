import { Box, CircularProgress, circularProgressClasses } from '@mui/material';
import { grey } from '@vases-ui/theme/colors';
import React from 'react';

export type CircularProps = {
  value: number;
  size: number;
  indeterminate?: boolean;
};

const CircularLoading = ({ value, size, indeterminate }: CircularProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      gap={'12px'}
      alignItems="center"
    >
      <Box sx={{ position: 'relative', width: '16px', height: '16px' }}>
        {indeterminate ? (
          <CircularProgress
            variant="indeterminate"
            sx={{
              color: grey[10],
              position: 'relative',
            }}
            size={size}
          />
        ) : (
          <>
            <CircularProgress
              variant="determinate"
              sx={{
                color: grey[10],
                position: 'absolute',
              }}
              size={size}
              value={100}
            />
            <CircularProgress
              size={size}
              variant="determinate"
              sx={{
                color: grey[80],
                animationDuration: '550ms',
                position: 'absolute',
                left: 0,
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: 'round',
                },
              }}
              value={value}
            />
          </>
        )}
      </Box>
    </Box>
  );
};

export default CircularLoading;
