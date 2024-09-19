/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Typography, Paper, Link, InputAdornment, IconButton } from '@mui/material';
import CustomTextField from '@/components/common/CustomTextField/CustomTextField';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useStyles } from './Register.style';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { registerSchema } from '@/helpers/helpers/validationSchema.helpers';

const Register = ({ onToggleForm }: any) => {
	const classes = useStyles();
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	const methods = useForm({
		resolver: yupResolver(registerSchema)
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<Box className={classes.formContainer}>
				<Paper elevation={6} className={classes.form}>
					<Typography component="h1" variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
						Đăng ký
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
								label="Họ tên"
								placeholder="Nhập họ tên"
								name="fullName"
								control={methods.control}
								required
							/>
							<CustomTextField
								label="Email"
								placeholder="Nhập email"
								name="email"
								control={methods.control}
								required
							/>
							<CustomTextField
								required
								label="Mật khẩu"
								placeholder="Nhập mật khẩu"
								name="password"
								control={methods.control}
								type={showPassword ? 'text' : 'password'}
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
							<CustomTextField
								required
								label="Nhập lại mật khẩu"
								placeholder="Nhập lại mật khẩu"
								name="retypePassword"
								control={methods.control}
								type={showConfirmPassword ? 'text' : 'password'}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowConfirmPassword}
												onMouseDown={handleMouseDownPassword}
												edge="end"
											>
												{showConfirmPassword ? (
													<Visibility sx={{ width: '16px', height: '16px' }} />
												) : (
													<VisibilityOff sx={{ width: '16px', height: '16px' }} />
												)}
											</IconButton>
										</InputAdornment>
									)
								}}
							/>
							<Button type="submit" fullWidth variant="contained" className={classes.btn}>
								Đăng ký
							</Button>
						</Box>
					</form>
				</Paper>
			</Box>
		</FormProvider>
	);
};

export default Register;
