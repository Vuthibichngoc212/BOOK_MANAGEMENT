/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useStyles } from './Header.style.';
import { AccountCircleOutlined } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import { useAppSelector } from '@/redux/hook';
import Search from './components/Search';
import Logo from '@/assets/image/Group1.png';

const Header = () => {
	const classes = useStyles();
	// const dispatch = useAppDispatch();
	// const themeMode = useAppSelector((state) => state.ui.themeMode);
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('md'));

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleProfileMenuOpen = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const [searchOpen, setSearchOpen] = React.useState(false);

	const handleSearchOpen = () => setSearchOpen(true);
	const handleSearchClose = () => setSearchOpen(false);

	const drawer = (
		<List>
			{['Home', 'My Book', 'About us', 'Community', 'Contact us'].map((text) => (
				<ListItem button key={text}>
					<ListItemText primary={text} />
				</ListItem>
			))}
		</List>
	);

	const isMenuOpen = Boolean(anchorEl);

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
			sx={{
				top: '8%',
				left: '5%',
				'&.MuiPopover-root': {
					'& .MuiPaper-root.MuiPopover-paper.MuiMenu-paper': {
						padding: '0px'
					}
				}
			}}
		>
			<MenuItem onClick={handleMenuClose}>Thông tin tài khoản</MenuItem>
			<MenuItem onClick={handleMenuClose}>Trung tâm hỗ trợ</MenuItem>
			<MenuItem onClick={handleMenuClose}>Đăng xuất</MenuItem>
		</Menu>
	);

	return (
		<AppBar sx={{ backgroundColor: theme.palette.background.default, padding: '8px 16px' }}>
			<Toolbar>
				{isMobile && (
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, color: 'black' }}
					>
						<MenuIcon />
					</IconButton>
				)}
				<Box>
					{' '}
					<img src={Logo} alt="logo" width="134px" height="50px" style={{ objectFit: 'contain' }} />
					<Typography sx={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
						Book Haven
					</Typography>
				</Box>
				{!isMobile && (
					<>
						<Button
							className={classes.listItemRoot}
							// sx={{
							// 	color:
							// 		themeMode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary
							// }}
						>
							Home
						</Button>
						<Button
							className={classes.listItemRoot}
							// sx={{
							// 	color:
							// 		themeMode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary
							// }}
						>
							My Book
						</Button>
						<Button
							className={classes.listItemRoot}
							// sx={{
							// 	color:
							// 		themeMode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary
							// }}
						>
							About us
						</Button>
						<Button
							className={classes.listItemRoot}
							// sx={{
							// 	color:
							// 		themeMode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary
							// }}
						>
							Community
						</Button>
						<Button
							className={classes.listItemRoot}
							// sx={{
							// 	color:
							// 		themeMode === 'dark' ? theme.palette.text.primary : theme.palette.text.secondary
							// }}
						>
							Contact
						</Button>
					</>
				)}
				<Box
					sx={{ color: theme.palette.text.secondary, display: 'flex', alignItems: 'center' }}
					onClick={handleSearchOpen}
				>
					<SearchIcon />
				</Box>
				<Search open={searchOpen} onClose={handleSearchClose} />

				<Box sx={{ flexGrow: 1 }} />
				<Box
					onClick={handleProfileMenuOpen}
					sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
				>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls={menuId}
						aria-haspopup="true"
					>
						<AccountCircleOutlined />
					</IconButton>
					<Typography sx={{ color: theme.palette.text.primary }}>Tài khoản</Typography>
				</Box>
			</Toolbar>
			<Drawer
				variant="temporary"
				open={mobileOpen}
				onClose={handleDrawerToggle}
				ModalProps={{
					keepMounted: true
				}}
				sx={{
					display: { xs: 'block', md: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 }
				}}
			>
				{drawer}
			</Drawer>
			{renderMenu}
		</AppBar>
	);
};

export default Header;
