import { createSlice } from '@reduxjs/toolkit'

const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        data: [],
        status: 'idle', // 'loading', 'succeeded', 'failed'
        error: null
    },
    reducers: {
        setBlogs(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        },
        setError(state, action) {
            state.error = action.payload
        }
    }
})

export const { setBlogs, setStatus, setError } = blogSlice.actions
export default blogSlice.reducers

