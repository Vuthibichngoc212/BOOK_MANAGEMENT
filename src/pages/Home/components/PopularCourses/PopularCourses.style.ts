import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	customImgSwiper: {
		textAlign: 'unset',
		// objectFit: 'fill',
		// height: 'unset',
		'& img': {
			textAlign: 'unset',
			marginTop: '0px'
		}
	}
}));
