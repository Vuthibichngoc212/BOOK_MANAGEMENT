/* eslint-disable @typescript-eslint/no-explicit-any */
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import rootSaga from '@/saga';
import rootReducer from '.';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { GetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage
};

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
	collapsed: true,
	colors: {
		title: () => '#139BFE',
		prevState: () => '#1C5FAF',
		action: () => '#149945',
		nextState: () => '#A47104',
		error: () => '#ff0005'
	},
	titleFormatter: (action: { type: string }) => `REDUX: ${action?.type}`
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware: GetDefaultMiddleware<any>) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ['your/action/type'],
				// Ignore these field paths in all actions
				ignoredActionPaths: ['meta.arg', 'payload.timestamp', 'payload.data', 'payload.meta'],
				// Ignore these paths in the state
				ignoredPaths: ['items.dates']
			}
		})
			.concat(sagaMiddleware)
			.concat(logger)
});

sagaMiddleware.run(rootSaga);
export default store;
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
