import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Typography, Box } from '@mui/material';
import searchIcon from '@/assets/icon/search-icon.svg';
import notiIcon from '@/assets/icon/noti-icon.svg';
import avatarIcon from '@/assets/icon/Avatar.svg';
import useStyles from './HeaderAdmin.styles';

const HeaderAdmin: React.FC = () => {
	const classes = useStyles();

	return (
		<AppBar
			position="static"
			elevation={0}
			sx={{ backgroundColor: '#F5F9FF', height: '80px', justifyContent: 'center' }}
		>
			<Toolbar>
				<Typography variant="h4" noWrap className={classes.typography}>
					Dashboard
				</Typography>
				<div className={classes.search}>
					<div className={classes.searchIconWrapper}>
						<img src={searchIcon} alt="search" />
					</div>
					<InputBase
						placeholder="Tìm kiếm"
						inputProps={{ 'aria-label': 'search' }}
						className={classes.inputBase}
					/>
				</div>
				<IconButton size="large" aria-label="show notifications" className={classes.iconButton}>
					<img src={notiIcon} alt="notifications" />
				</IconButton>
				<Box className={classes.userBox}>
					<img src={avatarIcon} alt="avatar" />
					<Box sx={{ ml: 1 }}>
						<Typography
							variant="body1"
							className={classes.userText}
							sx={{ fontSize: '14px', fontWeight: '500' }}
						>
							Nguyễn Bá An
						</Typography>
						<Typography variant="body2" className={classes.userText} sx={{ fontSize: '14px' }}>
							Admin
						</Typography>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default HeaderAdmin;
