import { Avatar, Box, Divider, Typography } from '@mui/material';

function Header() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          px: '4px',
          py: '3px',
          m: '4px',
        }}
      >
        <Avatar>N</Avatar>
        <Typography variant='caption'>Latest Tweets</Typography>
      </Box>
      <Divider />
    </div>
  );
}

export default Header;
