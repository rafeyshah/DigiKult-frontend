import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './slices/blogSlice'

const store = configureStore({
    reducer: {
        blogs: blogsReducer
    }
})

export default store;