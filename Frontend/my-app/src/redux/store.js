import { configureStore } from '@reduxjs/toolkit'
import libraryReducer from "./reducers/librarySlice"
import groupReducer from "./reducers/groupSlice"


export const store = configureStore({
  reducer: {
    library:libraryReducer,
    group:groupReducer,
  },
})