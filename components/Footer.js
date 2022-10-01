import { Box, Divider, List, ListItem, ListItemIcon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailIcon from '@mui/icons-material/Mail';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Footer() {
  const router = useRouter();

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
              <Link href='/'>
                {router.pathname == '/' ? (
                  <HomeIcon fontSize='large' color='primary' />
                ) : (
                  <HomeOutlinedIcon fontSize='large' />
                )}
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Link href='/explore'>
                {router.pathname == '/explore' ? (
                  <SearchIcon fontSize='large' color='primary' />
                ) : (
                  <SearchOutlinedIcon fontSize='large' />
                )}
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Link href='/notification'>
                {router.pathname == '/notification' ? (
                  <NotificationsActiveIcon fontSize='large' color='primary' />
                ) : (
                  <NotificationsNoneOutlinedIcon fontSize='large' />
                )}
              </Link>
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Link href='message'>
                {router.pathname == '/message' ? (
                  <MailIcon fontSize='large' color='primary' />
                ) : (
                  <MailOutlineOutlinedIcon fontSize='large' />
                )}
              </Link>
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}

export default Footer;
