import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://www.omdbapi.com/'}),
    endpoints: (builder) => ({
        getMovieName: builder.query({
          query: ({search, page}) => `?s=${search}&page=${page}&apikey=c93b9d17`,
        }),
        getMovieById: builder.query({
          query: ({id}) => `?i=${id}&apikey=c93b9d17`
        })
      }),
})

export const { useGetMovieNameQuery, useGetMovieByIdQuery } = movieApi