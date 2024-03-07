import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import React from 'react'

const initialState = {
    user: [],
}

export const addUser = createAsyncThunk("addUser", async (userData) => {
    const newUserObj = userData;
    const newUser = {
        userName:newUserObj.userName,
        userEmail:newUserObj.userEmail,
        userPassword:newUserObj.userPassword,
        userAddress:null,
        userPhone:newUserObj.userPhone,
        userPic:null
    }
    console.log(newUser)
    const response = await axios.post("http://localhost:8090/User/createUser",newUser)
    return response.data;
})

export const updateUser = createAsyncThunk("updateUser", async (userData) => {
    const updateUserObj = userData;
    const updateUser = {
        userId:updateUserObj.userId,
        userName:updateUserObj.userName,
        userEmail:updateUserObj.userEmail,
        userPassword:updateUserObj.userPassword,
        userAddress:updateUserObj.userAddress,
        userPhone:updateUserObj.userPhone,
        userPic:updateUserObj.userPic,
    }
    const response = await axios.put("http://localhost:8090/User/updateUser",updateUser)
    return response.data;
})

export const getUsers = createAsyncThunk("getUsers", async () => {
    const response = await axios.get("http://localhost:8090/User/getUsers")
    return response.data;
})

export const removeUser = createAsyncThunk("removeUser", async ({getState}) => {
    const state = getState()
    const response = await axios.delete("http://localhost:8090/User/deleteUser",state.user)
    return response.data;
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
    },
    extraReducers: (builder) =>{
        builder.addCase(addUser.fulfilled, (state,action) => {
            console.log(action.payload);
            state.user = action.payload.NewUser;
        })
        builder.addCase(addUser.pending, (state,action) => {
            console.log(action.payload);
        })
        builder.addCase(addUser.rejected, (state,action) => {
            console.log(action.payload);
        })

        builder.addCase(updateUser.fulfilled, (state,action) => {
            console.log(action.payload);
            state.user = action.payload.UpdatedUser;
        })
        builder.addCase(updateUser.pending, (state,action) => {
            console.log(action.payload);
        })
        builder.addCase(updateUser.rejected, (state,action) => {
            console.log(action.payload);
        })

        builder.addCase(getUsers.fulfilled, (state,action) => {
            console.log(action.payload);
        })
        builder.addCase(getUsers.pending, (state,action) => {
            console.log(action.payload);
        })
        builder.addCase(getUsers.rejected, (state,action) => {
            console.log(action.payload);
        })

        builder.addCase(removeUser.fulfilled, (state,action) => {
            console.log(action.payload);
        })
        builder.addCase(removeUser.pending, (state,action) => {
            console.log(action.payload);
        })
        builder.addCase(removeUser.rejected, (state,action) => {
            console.log(action.payload);
        })
    }
});

// export const { getUsers} = userSlice.actions;

export default userSlice.reducer