import { Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Facebook, Twitter, LinkedIn, YouTube } from '@mui/icons-material';

const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: '#F4A261',
				padding: '50px',
				textAlign: 'center',
				marginTop: '50px'
			}}
		>
			{/* Subscribe Section */}
			<Typography
				variant="h5"
				sx={{
					fontWeight: 'bold',
					color: '#000',
					marginBottom: '16px'
				}}
			>
				Subscribe our new offers!
			</Typography>
			<Box
				sx={{
					display: 'inline-flex',
					alignItems: 'center',
					backgroundColor: '#fff',
					borderRadius: '24px',
					padding: '5px 10px',
					marginBottom: '30px',
					boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
				}}
			>
				<TextField
					variant="standard"
					placeholder="Input your email"
					sx={{
						padding: '0 8px',
						flexGrow: 1
					}}
					InputProps={{
						disableUnderline: true,
						startAdornment: (
							<InputAdornment position="start">
								<MailOutlineIcon />
							</InputAdornment>
						)
					}}
				/>
				<Button
					variant="contained"
					sx={{
						backgroundColor: '#E76F51',
						borderRadius: '20px',
						padding: '10px 24px',
						color: '#fff',
						fontWeight: 'bold',
						'&:hover': {
							backgroundColor: '#D1495B'
						}
					}}
				>
					Subscribe
				</Button>
			</Box>

			{/* Footer Links */}
			<Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
				<Typography variant="body2" sx={{ color: '#000' }}>
					Pricing
				</Typography>
				<Typography variant="body2" sx={{ color: '#000' }}>
					About us
				</Typography>
				<Typography variant="body2" sx={{ color: '#000' }}>
					Features
				</Typography>
				<Typography variant="body2" sx={{ color: '#000' }}>
					Help Center
				</Typography>
				<Typography variant="body2" sx={{ color: '#000' }}>
					Contact us
				</Typography>
				<Typography variant="body2" sx={{ color: '#000' }}>
					FAQs
				</Typography>
				<Typography variant="body2" sx={{ color: '#000' }}>
					Careers
				</Typography>
			</Box>

			{/* Footer Social Links */}
			<Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
				<Facebook sx={{ color: '#4267B2' }} />
				<Twitter sx={{ color: '#1DA1F2' }} />
				<LinkedIn sx={{ color: '#0077b5' }} />
				<YouTube sx={{ color: '#FF0000' }} />
			</Box>

			{/* Footer Bottom */}
			<Typography variant="body2" sx={{ color: '#000', marginBottom: '8px' }}>
				© 2022 Brand, Inc. · Privacy · Terms · Sitemap
			</Typography>

			{/* Language Dropdown */}
			<Box sx={{ display: 'inline-block', marginTop: '20px' }}>
				<select
					style={{
						padding: '10px 15px',
						borderRadius: '5px',
						border: '1px solid #000',
						backgroundColor: 'transparent',
						fontSize: '14px'
					}}
				>
					<option value="en">English</option>
					<option value="vi">Tiếng Việt</option>
				</select>
			</Box>
		</Box>
	);
};

export default Footer;
