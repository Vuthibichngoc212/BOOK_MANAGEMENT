import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	formContainer: {
		flex: 1
		// display: 'flex',
		// justifyContent: 'center',
		// alignItems: 'center',
		// flexDirection: 'column'
		// padding: '20px'
	},
	form: {
		// width: '100%',
		height: '100%',
		// maxWidth: '400px',
		padding: ' 0px 24px',
		'&.MuiPaper-root': {
			borderRadius: '40px 0 0 40px'
		}
	},
	btnLogin: {
		'&.MuiButtonBase-root': {
			textTransform: 'none',
			backgroundColor: '#ff4081',
			'&:hover': {
				backgroundColor: '#ff4081'
			},
			'&:focus': {
				outline: 'none'
			}
		}
	},
	btnOther: {
		'&.MuiButtonBase-root': {
			marginTop: '10px',
			color: 'black',
			textTransform: 'none',
			backgroundColor: '#fff',
			'&:hover': {
				backgroundColor: '#f2f2f2'
			},
			'&:focus': {
				outline: 'none'
			}
		}
	}
}));
