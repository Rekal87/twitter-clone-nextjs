import { Box, Divider, List, ListItem, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
  return (
    <div>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <List
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <ListItem>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <NotificationsActiveIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}

export default Footer;
