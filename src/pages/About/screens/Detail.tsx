import { useParams } from 'react-router-dom';

const Detail = () => {
	const { id } = useParams();
	return (
		<div>
			<h1>Detail Page</h1>
			<p>Service ID: {id}</p>
		</div>
	);
};

export default Detail;
