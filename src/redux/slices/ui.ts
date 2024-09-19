import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UIState } from '@/redux/types/ui.types.ts';

const initialState: UIState = {
	isLoading: false,
	themeMode: 'light'
};

const slice = createSlice({
	name: 'ui',
	initialState: initialState,
	reducers: {
		setLoading: (state, { payload }: PayloadAction<{ value: boolean }>) => {
			state.isLoading = payload.value;
		},
		setThemeMode: (state, { payload }: PayloadAction<{ mode: 'dark' | 'light' }>) => {
			state.themeMode = payload.mode;
		}
	}
});

export const { setLoading, setThemeMode } = slice.actions;
export default slice.reducer;
