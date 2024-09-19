import {
	Typography,
	Box,
	Card,
	CardContent,
	CardMedia,
	Divider,
	IconButton,
	Grid
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import book from '@/assets/image/book.jpg';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useStyles } from './PopularCourses.style';

const PopularCourses = () => {
	const classes = useStyles();
	const handleFavoriteClick = () => {
		alert('Bạn cần đăng nhập để sử dụng chức năng này');
	};

	const books = [
		{
			id: 1,
			image: book,
			title: 'Sách Kỹ Năng Sống - Làm chủ cuộc đời',
			pages: 250,
			price: '150,000 VND',
			stock: 120,
			sold: 2137,
			publisher: 'NXB Kim Đồng'
		},
		{
			id: 2,
			image: book,
			title: 'Sách Văn Học - Truyện ngắn Nam Cao',
			pages: 300,
			price: '180,000 VND',
			stock: 95,
			sold: 2423,
			publisher: 'NXB Giáo dục'
		},
		{
			id: 3,
			image: book,
			title: 'Sách Thiếu Nhi - Truyện tranh Doraemon',
			pages: 200,
			price: '130,000 VND',
			stock: 110,
			sold: 1106,
			publisher: 'NXB Thanh Niên'
		},
		{
			id: 4,
			image: book,
			title: 'Sách Kinh Tế - Tư duy nhanh và chậm',
			pages: 270,
			price: '160,000 VND',
			stock: 150,
			sold: 980,
			publisher: 'NXB Trẻ'
		},
		{
			id: 5,
			image: book,
			title: 'Sách Giáo Khoa - Toán lớp 12',
			pages: 320,
			price: '200,000 VND',
			stock: 80,
			sold: 1560,
			publisher: 'NXB Lao Động'
		}
	];

	return (
		<Box sx={{ margin: '0px 34px' }}>
			<Box sx={{ position: 'relative', display: 'inline-block', margin: '48px 0px 8px 0px' }}>
				<Typography
					sx={{
						color: '#485bc7',
						fontSize: '34px',
						fontWeight: 'bold',
						position: 'relative',
						paddingBottom: '10px'
					}}
				>
					Các cuốn sách bán chạy
				</Typography>
				<Box
					sx={{
						position: 'absolute',
						left: 0,
						bottom: 0,
						width: '80px',
						height: '4px',
						backgroundColor: '#6AC539',
						borderRadius: '2px'
					}}
				/>
			</Box>
			<Swiper
				spaceBetween={30}
				slidesPerView={4}
				navigation
				pagination={{ clickable: true }}
				modules={[Pagination, Navigation, Autoplay]}
			>
				<Box>
					<Grid container spacing={3} sx={{ marginTop: '15px' }}>
						{books.map((book) => (
							<SwiperSlide key={book.id} className={classes.customImgSwiper}>
								<Card
									sx={{
										padding: '0px',
										position: 'relative',
										height: '100%'
									}}
								>
									<CardMedia
										component="img"
										alt={book.title}
										height="140"
										image={book.image}
										sx={{ objectFit: 'fill' }}
									/>
									<IconButton
										onClick={handleFavoriteClick}
										sx={{
											position: 'absolute',
											top: '100px',
											right: '8px',
											backgroundColor: 'white',
											'&:hover': {
												backgroundColor: 'white'
											},
											zIndex: 10
										}}
									>
										<img src="https://www.masterkorean.vn/images/icon/heart.png" alt="Yêu thích" />
									</IconButton>
									<CardContent>
										<Typography
											sx={{
												color: '#75787B',
												fontSize: '14px',
												display: 'flex',
												alignItems: 'center'
											}}
										>
											<BadgeOutlinedIcon
												sx={{
													width: '17px',
													height: '17px',
													marginRight: '5px',
													marginBottom: '8px'
												}}
											/>{' '}
											{book.publisher}
										</Typography>
										<Typography
											gutterBottom
											sx={{
												color: '#485CC7 !important',
												fontWeight: 'bold',
												fontSize: '16px',
												minHeight: '48px'
											}}
										>
											{book.title}
										</Typography>
										<Typography
											variant="body2"
											sx={{ display: 'flex', alignItems: 'center', color: '#75787B' }}
										>
											<img
												src="https://www.masterkorean.vn/images/icon/user-check.png"
												alt=""
												style={{ marginRight: '5px', width: 'unset' }}
											/>
											<span style={{ fontWeight: 'bold', marginRight: '5px', color: 'black' }}>
												{book.sold}
											</span>{' '}
											Đã bán
										</Typography>
										<Typography
											sx={{
												fontWeight: 'bold',
												color: '#485CC7',
												marginBottom: '16px',
												marginTop: '24px',
												fontSize: '20px'
											}}
										>
											{book.price}
										</Typography>
										<Divider />
										<Box
											sx={{
												marginTop: '16px',
												display: 'flex',
												justifyContent: 'space-between',
												color: '#75787B'
											}}
										>
											<Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
												<img
													src="https://www.masterkorean.vn/images/icon/book.png"
													alt=""
													style={{ marginRight: '5px', width: 'unset', height: 'unset' }}
												/>
												{book.pages} Trang
											</Typography>
											<Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
												<CalendarMonthOutlinedIcon
													sx={{ width: '17px', height: '17px', marginRight: '5px' }}
												/>
												{book.stock} Sách
											</Typography>
										</Box>
									</CardContent>
								</Card>
							</SwiperSlide>
						))}
					</Grid>
				</Box>
			</Swiper>
		</Box>
	);
};

export default PopularCourses;
