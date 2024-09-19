import { ActionPayloadMeta } from '@/types/index.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '@/redux/types/auth.types.ts';

const initialState: AuthState = {
	accessToken: undefined,
	refreshToken: undefined,
	isLoggingIn: false,
	errorCode: undefined
};

const slice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		checkSSOSuccess: (
			state,
			payload: PayloadAction<{ accessToken: string; meta?: ActionPayloadMeta }>
		) => {
			console.log(payload);
			console.log(state);
		}
	}
});

export const { checkSSOSuccess } = slice.actions;
export default slice.reducer;
