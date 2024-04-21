import {createSlice} from '@reduxjs/toolkit'


const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        page: 1,
        searchStr: 'end',
    },

    reducers:{
        setPage: (state, action) => {
            state.page = action.payload.page
        },

        setSearchStr: (state, action) => {
            state.searchStr = action.payload.searchStr
        }
    }
})

export const {setPage, setSearchStr} = moviesSlice.actions
export default moviesSlice