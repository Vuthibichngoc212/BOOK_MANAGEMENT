/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Typography, Paper, Link, InputAdornment, IconButton } from '@mui/material';
import { useStyles } from './Login.style';
import CustomTextField from '@/components/common/CustomTextField/CustomTextField';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { loginSchema } from '@/helpers/helpers/validationSchema.helpers';

const Login = ({ onToggleForm, onForgotPassword }: any) => {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

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
							<Typography sx={{ fontSize: '12px', margin: '5px 0px' }}>
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
	);
};

export default Login;
