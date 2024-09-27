import { createApi } from '@reduxjs/toolkit/query/react';
import { REQUEST_HEADERS } from '@/constants/api.constant';
import customBaseQuery from './fetchBase';
export const apiCaller = createApi({
	reducerPath: 'apiCaller',
	refetchOnMountOrArgChange: 30,
	baseQuery: customBaseQuery(),
	tagTypes: ['Products'],
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (users) => ({
				url: '/auth/login',
				method: 'POST',
				body: users,
				headers: REQUEST_HEADERS.jsonHeader()
			})
		})
	})
});

export const { useLoginMutation } = apiCaller;
