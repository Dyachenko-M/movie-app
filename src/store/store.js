import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { movieApi } from './MoviesApiSlice'
import moviesSlice from './moviesSlice'
import themeSlice from './ThemeSlice'

export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
        movies: moviesSlice.reducer,
        theme: themeSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware)
})

setupListeners(store.dispatch)