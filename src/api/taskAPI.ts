import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { TaskType } from "../types/task";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getTasks = createAsyncThunk('task/get', async (_, thunkAPI) => {
    
    try {
        const response = await axios.get<TaskType[]>(BASE_URL, {
             headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`
      }
        })
           return response.data 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addTask = createAsyncThunk('task/add', async (title:string, thunkAPI) => {
    try {
        const response = await axios.post<TaskType>(BASE_URL, {title}, {
             headers: {
         Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
           return response.data 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const removeTask = createAsyncThunk('task/delete', async (id:string, thunkAPI) => {
    try {
        const response = await axios.delete<TaskType>(`${BASE_URL}/${id}`, {
                headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
      }
        })
           return response.data 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const checkTask = createAsyncThunk('task/check', async (id:string, thunkAPI) => {
    try {
        const response = await axios.patch<TaskType>(`${BASE_URL}/${id}/isCompleted`,{}, {
                headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"    
      }
        })
           return response.data 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

type EditTaskPayload = {
    id: string;
    newTitle: string;
}

export const editTask = createAsyncThunk('task/edit', async ({ id, newTitle }:EditTaskPayload, thunkAPI) => {
    try {
        const response = await axios.patch<TaskType>(`${BASE_URL}/${id}`, { title: newTitle }, {
                  headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"    
            }
        })
        return response.data 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const clearTask = createAsyncThunk('task/clear', async (id: string, thunkAPI) => {
    try {
        const response = await axios.delete<TaskType>(`${BASE_URL}/${id}`, {
                  headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        })
        return response.data 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})