/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	IconButton,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';
import CustomTextField from '@/components/common/CustomTextField/CustomTextField';
import { Control, useForm } from 'react-hook-form';

const initialOrders = [
	{
		orderId: 101,
		customerName: 'John Doe',
		bookTitle: '1984',
		orderDate: '2024-09-10',
		quantity: 2,
		totalPrice: 19.98,
		status: 'Shipped'
	},
	{
		orderId: 102,
		customerName: 'Jane Smith',
		bookTitle: 'Brave New World',
		orderDate: '2024-09-12',
		quantity: 1,
		totalPrice: 12.99,
		status: 'Processing'
	},
	{
		orderId: 103,
		customerName: 'David Brown',
		bookTitle: 'Moby Dick',
		orderDate: '2024-09-15',
		quantity: 3,
		totalPrice: 44.97,
		status: 'Delivered'
	}
];

const Orders = () => {
	const [orders, setOrders] = useState(initialOrders);
	const [open, setOpen] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [currentOrder, setCurrentOrder] = useState<any>({
		orderId: '',
		customerName: '',
		bookTitle: '',
		orderDate: '',
		quantity: '',
		totalPrice: '',
		status: ''
	});
	const { control, handleSubmit, reset } = useForm({
		defaultValues: currentOrder
	});

	const handleClickOpen = (order: any = null) => {
		if (order) {
			setCurrentOrder(order);
			setEditMode(true);
		} else {
			setCurrentOrder({
				orderId: '',
				customerName: '',
				bookTitle: '',
				orderDate: '',
				quantity: '',
				totalPrice: '',
				status: ''
			});
			setEditMode(false);
			reset();
		}
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSave = () => {
		if (editMode) {
			// Edit Mode: Update existing order
			setOrders((prevOrders) =>
				prevOrders.map((order) => (order.orderId === currentOrder.orderId ? currentOrder : order))
			);
		} else {
			// Add Mode: Add a new order
			setOrders([...orders, { ...currentOrder, orderId: Date.now() }]);
		}
		handleClose();
	};

	const handleDelete = (orderId: number) => {
		setOrders(orders.filter((order) => order.orderId !== orderId));
	};

	return (
		<Box>
			<Typography variant="h4" gutterBottom>
				Quản lý đơn hàng
			</Typography>

			{/* Add Order Button */}
			<Button
				variant="contained"
				startIcon={<Add />}
				onClick={() => handleClickOpen()}
				sx={{ marginBottom: 2, height: '40px' }}
			>
				Thêm đơn hàng
			</Button>

			<TableContainer component={Paper} elevation={3} sx={{ maxWidth: '100%', margin: 'auto' }}>
				<Table>
					<TableHead>
						<TableRow sx={{ backgroundColor: '#EBF3FF' }}>
							<TableCell sx={{ fontWeight: 'bold' }}>Order ID</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Customer Name</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Book Title</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Order Date</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Total Price</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{orders.map((order) => (
							<TableRow
								key={order.orderId}
								sx={{ backgroundColor: order.orderId % 2 === 0 ? '#F7F7F8' : 'white' }}
							>
								<TableCell>{order.orderId}</TableCell>
								<TableCell>{order.customerName}</TableCell>
								<TableCell>{order.bookTitle}</TableCell>
								<TableCell>{order.orderDate}</TableCell>
								<TableCell>{order.quantity}</TableCell>
								<TableCell>${order.totalPrice.toFixed(2)}</TableCell>
								<TableCell>{order.status}</TableCell>
								<TableCell>
									{/* Edit Button */}
									<IconButton color="primary" onClick={() => handleClickOpen(order)}>
										<Edit />
									</IconButton>
									{/* Delete Button */}
									<IconButton color="error" onClick={() => handleDelete(order.orderId)}>
										<Delete />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			{/* Dialog for Add/Edit */}
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{editMode ? 'Edit Order' : 'Add Order'}</DialogTitle>
				<form onSubmit={handleSubmit(handleSave)}>
					<DialogContent>
						<CustomTextField
							control={control as Control<any>}
							name="customerName"
							label="Customer Name"
							variant="outlined"
							fullWidth
							value={currentOrder.customerName}
							onChange={(e) => setCurrentOrder({ ...currentOrder, customerName: e.target.value })}
							required
						/>

						<CustomTextField
							control={control as Control<any>}
							name="bookTitle"
							label="Book Title"
							variant="outlined"
							fullWidth
							value={currentOrder.bookTitle}
							onChange={(e) => setCurrentOrder({ ...currentOrder, bookTitle: e.target.value })}
							required
						/>

						<CustomTextField
							control={control as Control<any>}
							name="orderDate"
							label="Order Date"
							type="date"
							variant="outlined"
							fullWidth
							value={currentOrder.orderDate}
							onChange={(e) => setCurrentOrder({ ...currentOrder, orderDate: e.target.value })}
							InputLabelProps={{ shrink: true }}
							required
						/>

						<CustomTextField
							control={control as Control<any>}
							name="quantity"
							label="Quantity"
							type="number"
							variant="outlined"
							fullWidth
							value={currentOrder.quantity}
							onChange={(e) => setCurrentOrder({ ...currentOrder, quantity: e.target.value })}
							required
						/>

						<CustomTextField
							control={control as Control<any>}
							name="totalPrice"
							label="Total Price"
							type="number"
							variant="outlined"
							fullWidth
							value={currentOrder.totalPrice}
							onChange={(e) => setCurrentOrder({ ...currentOrder, totalPrice: e.target.value })}
							required
						/>

						<CustomTextField
							control={control as Control<any>}
							name="status"
							label="Status"
							variant="outlined"
							fullWidth
							value={currentOrder.status}
							onChange={(e) => setCurrentOrder({ ...currentOrder, status: e.target.value })}
							required
						/>
					</DialogContent>
				</form>
				<DialogActions>
					<Button onClick={handleClose} sx={{ height: '40px' }}>
						Hủy
					</Button>
					<Button type="submit" variant="contained" sx={{ height: '40px' }}>
						{editMode ? 'Lưu thay đổi' : 'Thêm sách'}
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
};

export default Orders;
