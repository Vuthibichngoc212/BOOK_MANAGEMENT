import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
// import store, { persistor } from '@/redux/store.ts';
// import { PersistGate } from 'redux-persist/integration/react';
import customTheme from './themes/theme.d';
import AppRoute from '@/routes/AppRoute.tsx';
import store from './redux/store';
import { ThemeProvider } from '@mui/material/styles';

function App() {
	return (
		<SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
			<ThemeProvider theme={customTheme}>
				<Provider store={store}>
					{/* <PersistGate persistor={persistor}> */}
					<AppRoute />
					{/* </PersistGate> */}
				</Provider>
			</ThemeProvider>
		</SnackbarProvider>
	);
}

export default App;
