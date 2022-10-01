import { Avatar, Box, Divider, Typography } from '@mui/material';
import { Component } from 'react';

function Header() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: '1rem',
          py: '0.75rem',
        }}
      >
        <Avatar>N</Avatar>
        <Typography variant='h6' sx={{ display: 'inline', fontWeight: '800' }}>
          {'Latest Tweets'}
        </Typography>
      </Box>
      <Divider />
    </div>
  );
}

export default Header;
