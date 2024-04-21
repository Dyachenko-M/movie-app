import {createSlice} from '@reduxjs/toolkit'

const themeSlice = createSlice({
    name: 'them',
    initialState: {
        theme: 'white'
    },

    reducers: {
        changeTheme: (state, action) => {
            if(state.theme === 'white'){
                state.theme = 'black'
            }
            else{
                state.theme = 'white'
            }
        }
    }
})

export const {changeTheme} = themeSlice.actions
export default themeSlice