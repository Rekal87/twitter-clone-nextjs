import { Avatar, Box, Divider, Typography } from '@mui/material';

function Header() {
  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', px: '4', py: '3' }}>
        <Avatar>N</Avatar>
        <Typography>Latest Tweets</Typography>
      </Box>
      <Divider />
    </div>
  );
}

export default Header;
