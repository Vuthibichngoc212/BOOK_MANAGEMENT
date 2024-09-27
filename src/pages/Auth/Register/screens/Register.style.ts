import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	formContainer: {
		flex: 1
	},
	form: {
		height: '100%',
		padding: ' 0px 24px',
		overflowY: 'auto',
		'&.MuiPaper-root': {
			borderRadius: '40px 0 0 40px'
		}
	},
	btn: {
		'&.MuiButtonBase-root': {
			textTransform: 'none',
			marginBottom: '24px',
			backgroundColor: '#ff4081',
			'&:hover': {
				backgroundColor: '#ff4081'
			},
			'&:focus': {
				outline: 'none'
			}
		}
	}
}));
