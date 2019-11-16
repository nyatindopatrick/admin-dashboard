import avatar from '../Icons/avator.jpg';
import history from '../../util/history';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import mainListItems from '../sidebar/Sidebar';
import avator from '../Icons/avator.svg';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Media,
  DropdownItem
} from 'reactstrap';

export const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    background: '#ffff',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    backgroundColor: '#43425d',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(0)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  
  },
  fixedHeight: {
    height: 400,
    width: 508,
    padding: '10px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
}));

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    localStorage.removeItem('roles');
    history.push('/');
  };
  return (
    <>
      <AppBar
        position='absolute'
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            color='default'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.title}></div>
          <Notification />
          <ProfileDropdown logout={handleLogout} />
        </Toolbar>
      </AppBar>
      <Drawer
        variant='permanent'
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        className='sideLinks'
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{color: "#ffff"}}/>
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
    </>
  );
};

export default Header;

const ProfileDropdown = ({ logout }) => (
  <UncontrolledDropdown nav>
    <DropdownToggle className='pr-0' nav>
      <Media className='align-items-center'>
        <span className='user_name'>
          John Doe
          <img src={avator} alt='Avatar' className='avatar_face' />
        </span>
      </Media>
    </DropdownToggle>
    <DropdownMenu className='dropdown-menu-arrow dropdown_container' right>
      <DropdownItem className='noti-title' header tag='div'>
        <h6 className='text-overflow m-0'>
          <strong>Satus:</strong> online
        </h6>
      </DropdownItem>
      <hr />
      {/* <Link to="admin/admin-profile"> */}
      <DropdownItem to='/admin/admin-profile' tag={Link}>
        <i className='fas fa-user' />
        <span> profile</span>
      </DropdownItem>
      <hr />
      {/* </Link> */}
      <DropdownItem to='/admin/logs' tag={Link}>
        <i className='fas fa-folder' />
        <span> Logs</span>
      </DropdownItem>
      <hr />
      <DropdownItem onClick={logout}>
        <i className='fas fa-running' />
        <span> Logout</span>
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);
const Notification = () => (
  <>
    <UncontrolledDropdown nav>
      <DropdownToggle className='pr-0' nav>
        <IconButton color='default'>
          <Badge badgeContent={4} color='secondary'>
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </DropdownToggle>
      <DropdownMenu
        className='dropdown-menu-arrow notification_container'
        right
      >
        <DropdownItem className='noti-title' header tag='div'>
          <h6 className='text-overflow m-0'>Notifications</h6>
        </DropdownItem>
        <hr />
        {/* <Link to="admin/admin-profile"> */}
        <DropdownItem to='/admin/admin-profile' tag={Link}>
          <img className='avatar_face' src={avatar} alt='avatar' />

          <span className='search-query'>New search query.</span>
          <div className='mins-ago'>4 mins ago</div>
        </DropdownItem>
        <hr />
        <DropdownItem to='/admin/admin-profile' tag={Link}>
          <img className='avatar_face' src={avatar} alt='avatar' />

          <span className='search-query'>New search query.</span>
          <div className='mins-ago'>4 mins ago</div>
        </DropdownItem>
        <hr />
        <DropdownItem to='/admin/admin-profile' tag={Link}>
          <img className='avatar_face' src={avatar} alt='avatar' />

          <span className='search-query'>New search query.</span>
          <div className='mins-ago'>4 mins ago</div>
        </DropdownItem>
        <hr />
        <DropdownItem to='/admin/admin-profile' tag={Link}>
          <img className='avatar_face' src={avatar} alt='avatar' />

          <span className='search-query'>New search query.</span>
          <div className='mins-ago'>4 mins ago</div>
        </DropdownItem>
        <hr />
        <div className='view_all'>
          <Link to='/messages'>View all notifications</Link>
        </div>
      </DropdownMenu>
    </UncontrolledDropdown>
  </>
);
