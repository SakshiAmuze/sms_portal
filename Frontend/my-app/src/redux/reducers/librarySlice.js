import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  libname: '',
  messagename:''
}

export const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    sendLibData(state,actions) {
        console.log("sendLibData called");
        console.log(actions);
        state.libname = actions.payload;
    },
    sendLibDataToPanel(state,actions) {
        console.log("sendLibDataToPanel called");
        console.log(actions);
        state.messagename = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {sendLibData,sendLibDataToPanel } = librarySlice.actions

export default librarySlice.reducer;