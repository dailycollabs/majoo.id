import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todoList',
  initialState: { loading: true, data: [] },
  reducers: {
    create: (state, action) => {
      state.loading = action.payload.loading;
      state.data = action.payload.data;
    },
    add: (state, action) => {
      state.data.push(action.payload)
    },
    update: (state, action) => {
      const id = action.payload.data.id;
      const temp = state.data.filter(data => data.id === id)[0]
      temp.status = action.payload.data.status;
      temp.description = action.payload.data.description;

      const index = state.data.findIndex((data) => { return data.id === id })
      state.data[index] = temp;
    },
    remove: (state, action) => {
      const id = action.payload.data.id;
      const index = state.data.findIndex((data) => { return data.id === id })

      state.data = state.data.filter(data => data.id !== id)
    }
  }
})

const todoStore = configureStore({
  reducer: {
    todoList: todoSlice.reducer
  }
})

const { create, add, update, remove } = todoSlice.actions;
export { todoStore, create, add, update, remove }