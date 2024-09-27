// /* eslint-disable @typescript-eslint/no-explicit-any */

// import React from 'react';
// import { Bar, Doughnut } from 'react-chartjs-2';
// import {
// 	Chart as ChartJS,
// 	CategoryScale,
// 	LinearScale,
// 	BarElement,
// 	Title,
// 	Tooltip,
// 	Legend,
// 	ArcElement
// } from 'chart.js';
// import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// // Register the required components for both Bar and Doughnut charts
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// // Define sample data for the charts
// const barChartData = {
// 	labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
// 	datasets: [
// 		{
// 			label: 'Số lượng sách',
// 			data: [12, 19, 3, 5, 2, 3, 9, 6, 4, 12, 11, 9],
// 			backgroundColor: '#42A5F5'
// 		}
// 	]
// };

// const doughnutChartData = {
// 	labels: ['Tiểu thuyết', 'Truyện ngắn', 'Khoa học', 'Lịch sử'],
// 	datasets: [
// 		{
// 			label: 'Loại sách',
// 			data: [30, 20, 25, 25],
// 			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
// 		}
// 	]
// };

// // Bar chart options
// const barChartOptions = {
// 	scales: {
// 		y: {
// 			beginAtZero: true,
// 			max: 20
// 		}
// 	}
// };

// // Doughnut chart options
// const doughnutChartOptions = {
// 	plugins: {
// 		legend: {
// 			position: 'right'
// 		}
// 	}
// };

// const useStyles = makeStyles(() => ({
// 	dashboard: {
// 		display: 'flex',
// 		justifyContent: 'space-around'
// 	},
// 	card: {
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		width: '250px',
// 		height: '100px',
// 		borderRadius: '10px',
// 		backgroundColor: '#fff',
// 		boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
// 		padding: '10px',
// 		transition: 'box-shadow 0.3s ease',
// 		'&:hover': {
// 			boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
// 		}
// 	},
// 	iconContainer: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 		width: '40px',
// 		height: '40px',
// 		borderRadius: '50%',
// 		marginBottom: '8px'
// 	},
// 	count: {
// 		fontSize: '24px',
// 		fontWeight: 'bold',
// 		color: 'green'
// 	},
// 	label: {
// 		fontSize: '16px',

// 		'&.MuiTypography-root': {
// 			color: 'black',
// 			fontWeight: 'bold'
// 		}
// 	},
// 	// Color classes
// 	orange: {
// 		backgroundColor: '#ffe6cc',
// 		color: '#ff6600'
// 	},
// 	blue: {
// 		backgroundColor: '#cce5ff',
// 		color: '#007bff'
// 	},
// 	green: {
// 		backgroundColor: '#d9f2d9',
// 		color: '#28a745'
// 	},
// 	red: {
// 		backgroundColor: '#fddde6',
// 		color: '#dc3545'
// 	}
// }));

// const Dashboard = () => {
// 	const classes = useStyles();
// 	const [year, setYear] = React.useState(2024);

// 	const handleYearChange = (event: any) => {
// 		setYear(event.target.value);
// 	};

// 	const stats = [
// 		{ label: 'Books', count: 25, icon: '🏢', colorClass: classes.orange },
// 		{ label: 'Sales', count: 16, icon: '📱', colorClass: classes.blue },
// 		{ label: 'Categories', count: 3, icon: '🌐', colorClass: classes.green },
// 		{ label: 'Tài khoản', count: 3, icon: '👥', colorClass: classes.red }
// 	];

// 	return (
// 		<Box>
// 			<Box className={classes.dashboard}>
// 				{stats.map((stat, index) => (
// 					<Box key={index} className={classes.card}>
// 						<Box className={`${classes.iconContainer} ${stat.colorClass}`}>
// 							<Typography variant="h5">{stat.icon}</Typography>
// 						</Box>
// 						<Typography className={classes.count}>{stat.count}</Typography>
// 						<Typography className={classes.label}>{stat.label}</Typography>
// 					</Box>
// 				))}
// 			</Box>

// 			<Box display="flex" justifyContent="space-between" sx={{ marginTop: '40px' }}>
// 				{/* Bar Chart (Book Stats) */}
// 				<Box flex={1} marginRight="20px" sx={{ maxWidth: '650px' }}>
// 					<Box display="flex" justifyContent="space-between">
// 						<Typography variant="h6">Biểu đồ thống kê sách</Typography>
// 						<FormControl size="small">
// 							<Select value={year} onChange={handleYearChange}>
// 								<MenuItem value={2024}>2024</MenuItem>
// 								<MenuItem value={2023}>2023</MenuItem>
// 								<MenuItem value={2022}>2022</MenuItem>
// 							</Select>
// 						</FormControl>
// 					</Box>
// 					<Bar data={barChartData} options={barChartOptions} />
// 				</Box>

// 				{/* Doughnut Chart (Book Category Stats) */}
// 				<Box flex={1} sx={{ maxWidth: '400px' }}>
// 					<Box display="flex" justifyContent="space-between">
// 						<Typography variant="h6">Biểu đồ thống kê loại sách</Typography>
// 						<FormControl size="small">
// 							<Select value={year} onChange={handleYearChange}>
// 								<MenuItem value={2024}>2024</MenuItem>
// 								<MenuItem value={2023}>2023</MenuItem>
// 								<MenuItem value={2022}>2022</MenuItem>
// 							</Select>
// 						</FormControl>
// 					</Box>
// 					<Doughnut data={doughnutChartData} options={doughnutChartOptions} />
// 				</Box>
// 			</Box>
// 		</Box>
// 	);
// };

// export default Dashboard;

/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
	ArcElement
} from 'chart.js';
import { Box, Typography, FormControl, Select, MenuItem, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Register the required components for both Bar and Doughnut charts
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

// Define sample data for the charts
const barChartData = {
	labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
	datasets: [
		{
			label: 'Số lượng sách',
			data: [12, 19, 3, 5, 2, 3, 9, 6, 4, 12, 11, 9],
			backgroundColor: '#42A5F5'
		}
	]
};

const doughnutChartData = {
	labels: ['Tiểu thuyết', 'Truyện ngắn', 'Khoa học', 'Lịch sử'],
	datasets: [
		{
			label: 'Loại sách',
			data: [30, 20, 25, 25],
			backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
		}
	]
};

// Bar chart options
const barChartOptions = {
	scales: {
		y: {
			beginAtZero: true,
			max: 20
		}
	}
};

// Doughnut chart options
const doughnutChartOptions = {
	plugins: {
		legend: {
			position: 'right'
		}
	}
};

const useStyles = makeStyles(() => ({
	dashboard: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		width: '250px',
		height: '100px',
		borderRadius: '10px',
		backgroundColor: '#fff',
		boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
		padding: '10px',
		transition: 'box-shadow 0.3s ease',
		'&:hover': {
			boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)'
		}
	},
	iconContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '40px',
		height: '40px',
		borderRadius: '50%',
		marginBottom: '8px'
	},
	count: {
		fontSize: '24px',
		fontWeight: 'bold',
		color: 'green'
	},
	label: {
		fontSize: '16px',

		'&.MuiTypography-root': {
			color: 'black',
			fontWeight: 'bold'
		}
	},
	// Color classes
	orange: {
		backgroundColor: '#ffe6cc',
		color: '#ff6600'
	},
	blue: {
		backgroundColor: '#cce5ff',
		color: '#007bff'
	},
	green: {
		backgroundColor: '#d9f2d9',
		color: '#28a745'
	},
	red: {
		backgroundColor: '#fddde6',
		color: '#dc3545'
	},
	paper: {
		padding: '20px',
		borderRadius: '10px',
		boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
		marginBottom: '20px'
	}
}));

const Dashboard = () => {
	const classes = useStyles();
	const [year, setYear] = React.useState(2024);

	const handleYearChange = (event: any) => {
		setYear(event.target.value);
	};

	const stats = [
		{ label: 'Books', count: 25, icon: '🏢', colorClass: classes.orange },
		{ label: 'Sales', count: 16, icon: '📱', colorClass: classes.blue },
		{ label: 'Categories', count: 3, icon: '🌐', colorClass: classes.green },
		{ label: 'Tài khoản', count: 3, icon: '👥', colorClass: classes.red }
	];

	return (
		<Box>
			<Box className={classes.dashboard}>
				{stats.map((stat, index) => (
					<Box key={index} className={classes.card}>
						<Box className={`${classes.iconContainer} ${stat.colorClass}`}>
							<Typography variant="h5">{stat.icon}</Typography>
						</Box>
						<Typography className={classes.count}>{stat.count}</Typography>
						<Typography className={classes.label}>{stat.label}</Typography>
					</Box>
				))}
			</Box>

			<Box display="flex" justifyContent="space-between" sx={{ marginTop: '40px' }}>
				{/* Bar Chart (Book Stats) */}
				<Box flex={1} marginRight="20px" sx={{ maxWidth: '650px' }}>
					<Paper className={classes.paper}>
						<Box display="flex" justifyContent="space-between">
							<Typography variant="h6">Biểu đồ thống kê sách</Typography>
							<FormControl size="small">
								<Select value={year} onChange={handleYearChange}>
									<MenuItem value={2024}>2024</MenuItem>
									<MenuItem value={2023}>2023</MenuItem>
									<MenuItem value={2022}>2022</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Bar data={barChartData} options={barChartOptions} />
					</Paper>
				</Box>

				{/* Doughnut Chart (Book Category Stats) */}
				<Box flex={1} sx={{ maxWidth: '400px' }}>
					<Paper className={classes.paper}>
						<Box display="flex" justifyContent="space-between">
							<Typography variant="h6">Biểu đồ thống kê loại sách</Typography>
							<FormControl size="small">
								<Select value={year} onChange={handleYearChange}>
									<MenuItem value={2024}>2024</MenuItem>
									<MenuItem value={2023}>2023</MenuItem>
									<MenuItem value={2022}>2022</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Doughnut data={doughnutChartData} options={doughnutChartOptions} />
					</Paper>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
