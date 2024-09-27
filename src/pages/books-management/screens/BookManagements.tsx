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
import { useForm, Control } from 'react-hook-form';
import CustomTextField from '@/components/common/CustomTextField/CustomTextField';

const initialBooks = [
	{
		id: 1,
		title: 'To Kill a Mockingbird',
		author: 'Harper Lee',
		category: 'Fiction',
		publishedYear: 1960,
		price: 10.99,
		stock: 12,
		description: 'A novel about the serious issues of rape and racial inequality.'
	},
	{
		id: 2,
		title: '1984',
		author: 'George Orwell',
		category: 'Dystopian',
		publishedYear: 1949,
		price: 9.99,
		stock: 8,
		description:
			'A story about a totalitarian regime that uses surveillance to control its citizens.'
	},
	{
		id: 3,
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
		category: 'Classics',
		publishedYear: 1925,
		price: 11.99,
		stock: 5,
		description: 'A novel about the American dream and the disillusionment that comes with it.'
	}
];

const BookManagements = () => {
	const [bookList, setBookList] = useState(initialBooks);
	const [open, setOpen] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [currentBook, setCurrentBook] = useState<any>({
		id: '',
		title: '',
		author: '',
		category: '',
		publishedYear: '',
		price: '',
		stock: '',
		description: ''
	});

	// Khởi tạo form với react-hook-form
	const { control, handleSubmit, reset } = useForm({
		defaultValues: currentBook
	});

	// Mở modal thêm/sửa
	const handleClickOpen = (book: any = null) => {
		if (book) {
			setCurrentBook(book);
			setEditMode(true);
			reset(book); // Đặt giá trị mặc định trong form khi sửa
		} else {
			setCurrentBook({
				id: '',
				title: '',
				author: '',
				category: '',
				publishedYear: '',
				price: '',
				stock: '',
				description: ''
			});
			setEditMode(false);
			reset(); // Xóa form khi thêm mới
		}
		setOpen(true);
	};

	// Đóng modal
	const handleClose = () => {
		setOpen(false);
	};

	// Lưu sách mới hoặc cập nhật sách
	const onSubmit = (data: any) => {
		if (editMode) {
			// Cập nhật sách
			setBookList((prevBooks) =>
				prevBooks.map((book) => (book.id === currentBook.id ? data : book))
			);
		} else {
			// Thêm sách mới
			setBookList([...bookList, { ...data, id: Date.now() }]);
		}
		handleClose();
	};

	// Xóa sách
	const handleDelete = (id: number) => {
		setBookList(bookList.filter((book) => book.id !== id));
	};

	return (
		<Box>
			<Typography variant="h4" gutterBottom>
				Quản lý sách
			</Typography>

			{/* Nút thêm sách */}
			<Button
				variant="contained"
				startIcon={<Add />}
				onClick={() => handleClickOpen()}
				sx={{ marginBottom: 2, height: '40px' }}
			>
				Thêm sách
			</Button>

			<TableContainer component={Paper} elevation={3} sx={{ maxWidth: '100%', margin: 'auto' }}>
				<Table>
					<TableHead>
						<TableRow sx={{ backgroundColor: '#EBF3FF' }}>
							<TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Tiêu đề</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Tác giả</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Thể loại</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Năm xuất bản</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Giá</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Tồn kho</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Hành động</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{bookList.map((book) => (
							<TableRow
								key={book.id}
								sx={{ backgroundColor: book.id % 2 === 0 ? '#F7F7F8' : 'white' }}
							>
								<TableCell>{book.id}</TableCell>
								<TableCell>{book.title}</TableCell>
								<TableCell>{book.author}</TableCell>
								<TableCell>{book.category}</TableCell>
								<TableCell>{book.publishedYear}</TableCell>
								<TableCell>${book.price.toFixed(2)}</TableCell>
								<TableCell>{book.stock}</TableCell>
								<TableCell>
									{/* Nút sửa */}
									<IconButton color="primary" onClick={() => handleClickOpen(book)}>
										<Edit />
									</IconButton>
									{/* Nút xóa */}
									<IconButton color="error" onClick={() => handleDelete(book.id)}>
										<Delete />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>

			{/* Dialog thêm/sửa sách */}
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{editMode ? 'Sửa sách' : 'Thêm sách'}</DialogTitle>
				<form onSubmit={handleSubmit(onSubmit)}>
					<DialogContent>
						<CustomTextField
							control={control as Control<any>}
							name="title"
							label="Tiêu đề"
							required
						/>
						<CustomTextField
							control={control as Control<any>}
							name="author"
							label="Tác giả"
							required
						/>
						<CustomTextField
							control={control as Control<any>}
							name="category"
							label="Thể loại"
							required
						/>
						<CustomTextField
							control={control as Control<any>}
							name="publishedYear"
							label="Năm xuất bản"
							type="number"
							required
						/>
						<CustomTextField
							control={control as Control<any>}
							name="price"
							label="Giá"
							type="number"
							required
						/>
						<CustomTextField
							control={control as Control<any>}
							name="stock"
							label="Tồn kho"
							type="number"
							required
						/>
						<CustomTextField
							control={control as Control<any>}
							name="description"
							label="Mô tả"
							required
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} sx={{ height: '40px' }}>
							Hủy
						</Button>
						<Button type="submit" variant="contained" sx={{ height: '40px' }}>
							{editMode ? 'Lưu thay đổi' : 'Thêm sách'}
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</Box>
	);
};

export default BookManagements;
