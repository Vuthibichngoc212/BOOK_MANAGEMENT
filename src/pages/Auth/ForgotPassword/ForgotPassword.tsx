/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Typography, Paper, Link } from '@mui/material';
import CustomTextField from '@/components/common/CustomTextField/CustomTextField';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStyles } from '../Login/screens/Login.style';
import { loginSchema } from '@/helpers/helpers/validationSchema.helpers';

const ForgotPassword = ({ onToggleForm }: any) => {
	const classes = useStyles();

	const methods = useForm({
		resolver: yupResolver(loginSchema)
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<Box className={classes.formContainer}>
				<Paper elevation={6} className={classes.form}>
					<Typography component="h1" variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
						Quên mật khẩu
					</Typography>
					<Typography component="h1" variant="h6" align="center">
						Bạn đã có tài khoản?{' '}
						<Link
							href="#"
							onClick={onToggleForm}
							sx={{
								color: '#ff4081',
								textDecoration: 'none',
								'&:hover': {
									color: '#ff4081'
								}
							}}
						>
							Log In
						</Link>
					</Typography>
					<form onSubmit={methods.handleSubmit(onSubmit)}>
						<Box>
							<CustomTextField
								label="Email"
								placeholder="Nhập email"
								name="email"
								control={methods.control}
								required
								multiline
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								sx={{
									textTransform: 'none',
									backgroundColor: '#ff4081',
									'&:hover': {
										backgroundColor: '#ff4081'
									},
									'&:focus': {
										outline: 'none'
									}
								}}
							>
								Tiếp tục
							</Button>
						</Box>
					</form>
				</Paper>
			</Box>
		</FormProvider>
	);
};

export default ForgotPassword;
