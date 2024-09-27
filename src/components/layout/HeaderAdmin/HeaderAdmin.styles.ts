import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles<Theme>((theme) => ({
	typography: {
		flexGrow: 1,
		color: '#1C2A4F',
		'&.MuiTypography-root': {
			fontWeight: 'bold',
			fontSize: '24px'
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: alpha(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: alpha(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		[theme.breakpoints.up('sm')]: {
			width: 'auto'
		}
	},
	searchIconWrapper: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputBase: {
		height: '44px',
		borderRadius: '20px',
		border: '1px solid #DADADD',
		color: '#92939E',
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '356px'
		},
		'& .MuiInputBase-input': {
			fontSize: '12px'
		}
	},
	iconButton: {
		color: 'inherit'
	},
	userBox: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: theme.spacing(2)
	},
	userText: {
		color: '#1C2A4F'
	}
}));

export default useStyles;
