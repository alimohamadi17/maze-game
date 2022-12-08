
import { configureStore } from '@reduxjs/toolkit'
import playerSlice from './playerSlice'

const store = configureStore({
    reducer: {
        play: playerSlice
    }
})

export default store;