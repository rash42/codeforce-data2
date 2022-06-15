import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    type: 'light'
}
const mode = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        toggleMode: (state) => {
            if(state.type === 'light'){
                console.log('Entering dark mode')
                return {
                    type: 'dark'
                }
            }
            else{
                console.log('Entering light mode')
                return {
                    type: 'light'
                }
            }
        }
    }
})

export default mode.reducer
export const modeAction = mode.actions