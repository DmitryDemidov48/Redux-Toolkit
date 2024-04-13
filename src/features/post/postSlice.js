import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts:[]
}

export const getPosts = createAsyncThunk(
    'posts/getPosts', async (_, {rejectedWithValue, dispatch}) => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        dispatch(setPost(res.data))
    }
)

export const deletePostById = createAsyncThunk(
    'posts/deletePostById', async (id, {rejectedWithValue, dispatch}) => {
       await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        dispatch(deletePost(id))
    }
)
export const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.posts = action.payload
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        }
    },
    extraReducers: {
        [getPosts.fulfilled]: () => console.log('fulfilled'),
        [getPosts.pending]: () => console.log('pending'),
        [getPosts.rejected]: () => console.log('rejected'),
        [deletePostById.fulfilled]: () => console.log('delete: fulfilled'),
        [deletePostById.pending]: () => console.log('delete: pending'),
        [deletePostById.rejected]: () => console.log('delete: rejected'),
    }
})

export const { setPost, deletePost } = postSlice.actions

export default postSlice.reducer