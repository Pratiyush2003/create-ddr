import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//create action
export const createfarmer = createAsyncThunk ("createfarmer" , async (data , {rejectWithValue}) => {

    const response = await fetch('https://65c42f30dae2304e92e25bb7.mockapi.io/crud', {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
})

//read action
export const showfarmer = createAsyncThunk("farmer", async (args , {rejectWithValue}) => {

    const response = await fetch('https://66cc633ca4dd3c8a71b77272.mockapi.io/todos');
    try {
        const result = await response.json();
        return result; 
    } catch (error) {
        return rejectWithValue(error)
    }      
})


export const farmerdetails = createSlice({
    name : "farmerdetails",
    initialState : {
        farmer : [],
        loading : false,
        error : null,
        searchData : [],
    },

    extraReducers : builder => {
        builder
        .addCase(showfarmer.pending, (state) => {
            state.loading = true
        })
        .addCase(showfarmer.fulfilled, (state, action) => {
            state.loading = false;
            state.farmer = action.payload;
        })
        .addCase(showfarmer.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(createfarmer.pending ,  (state) => {
            state.loading = true;
        })
        .addCase(createfarmer.fulfilled, (state, action) => {
            state.loading = false;
            state.farmer.push(action.payload)
        })
        .addCase(createfarmer.rejected , (state, action) => {
            state.loading = false;
            state.farmer = action.payload.message;
        })
    },

})

export default farmerdetails.reducer
export const {searchUser} = farmerdetails.actions;