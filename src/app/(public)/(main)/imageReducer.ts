import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    urlApi: String | null
} = {
    urlApi: null
}

const ImageReducer = createSlice({
    name: 'image-reducer',
    initialState,
    reducers: {
        setUrlApi: (state, action) => {
            state.urlApi = action.payload
        }
    }
})

export const { setUrlApi } = ImageReducer.actions
export default ImageReducer.reducer