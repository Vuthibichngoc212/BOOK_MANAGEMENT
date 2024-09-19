import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<Container>
			<Typography>About Page</Typography>
			<Link to={'/about/123'}>Go to Detail</Link>
		</Container>
	);
};

export default About;
