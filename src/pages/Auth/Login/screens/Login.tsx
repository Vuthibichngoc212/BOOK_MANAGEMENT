/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Typography, Paper, Link, InputAdornment, IconButton } from '@mui/material';
import { useStyles } from './Login.style';
import CustomTextField from '@/components/common/CustomTextField/CustomTextField';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { loginSchema } from '@/helpers/helpers/validationSchema.helpers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IUser } from '@/types/users';
import { useLoginMutation } from '@/api/api.caller';
import { setUser } from '@/redux/slices/users.slice';
import { useDispatch } from 'react-redux';

const Login = ({ onToggleForm, onForgotPassword }: any) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const methods = useForm({
		resolver: yupResolver(loginSchema)
	});

	const [loginUser] = useLoginMutation();

	const onSubmit = async (data: IUser) => {
		try {
			console.log('Đang gửi dữ liệu:', data);
			const response = await loginUser(data).unwrap();
			if (response) {
				dispatch(setUser(response));
				console.log('Phản hồi API:', response);
				// navigate('/admin/dashboard');
			} else {
				toast.error('Đăng nhập thất bại sai email hoặc password', {
					theme: 'colored',
					autoClose: 2000,
					position: 'bottom-right'
				});
			}
		} catch {
			toast.error('Đăng nhập thất bại sai email hoặc password', {
				theme: 'colored',
				autoClose: 2000,
				position: 'bottom-right'
			});
		}
	};

	return (
		<>
			<ToastContainer />
			<FormProvider {...methods}>
				<Box className={classes.formContainer}>
					<Paper elevation={6} className={classes.form}>
						<Box sx={{ paddingTop: '15%' }}>
							<Typography component="h1" variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
								Đăng nhập
							</Typography>
							<Typography component="h1" variant="h6" align="center">
								Bạn chưa có tài khoản?{' '}
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
									Register
								</Link>
							</Typography>
						</Box>
						<form onSubmit={methods.handleSubmit(onSubmit)}>
							<Box sx={{ marginTop: '30px' }}>
								<CustomTextField
									label="Username"
									placeholder="Nhập username"
									name="username"
									control={methods.control}
									required
									multiline
								/>
								<CustomTextField
									required
									label="Mật khẩu"
									placeholder="Nhập mật khẩu"
									name="password"
									control={methods.control}
									type={showPassword ? 'text' : 'password'}
									customStyles={{ mb: '5px' }}
									InputProps={{
										endAdornment: (
											<InputAdornment position="end">
												<IconButton
													aria-label="toggle password visibility"
													onClick={handleClickShowPassword}
													onMouseDown={handleMouseDownPassword}
													edge="end"
												>
													{showPassword ? (
														<Visibility sx={{ width: '16px', height: '16px' }} />
													) : (
														<VisibilityOff sx={{ width: '16px', height: '16px' }} />
													)}
												</IconButton>
											</InputAdornment>
										)
									}}
								/>
								<Typography sx={{ fontSize: '12px', margin: '10px 0px' }}>
									<Link
										href="#"
										onClick={onForgotPassword}
										sx={{
											fontSize: '12px',
											color: '#ff4081',
											textDecoration: 'none',
											'&:hover': {
												color: '#ff4081'
											}
										}}
									>
										Quên mật khẩu ?
									</Link>
								</Typography>
								<Button type="submit" fullWidth variant="contained" className={classes.btnLogin}>
									Đăng nhập
								</Button>
							</Box>
						</form>
					</Paper>
				</Box>
			</FormProvider>
		</>
	);
};

export default Login;
