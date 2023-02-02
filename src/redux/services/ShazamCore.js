// calling API
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'b1e557a558msh23272599befbe83p1b8d58jsnc1b79df5803f');
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => ('/charts/world'),

    }),
    getSongDetails: builder.query({
      query: ({ songid }) => (`/tracks/details?track_id=${songid}`),
    }),
  }),
});

export const {
  useGetTopChartsQuery, useGetSongDetailsQuery,
} = shazamCoreApi;
