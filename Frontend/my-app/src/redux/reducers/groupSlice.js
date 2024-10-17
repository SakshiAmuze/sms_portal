import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  grpname: '',
  contact:''
}

export const groupSlice = createSlice({
  name: 'group',
  initialState,
  reducers: {
    sendGrpData(state,actions) {
        console.log("sendGrpData called");
        console.log(actions);
        state.grpname = actions.payload;
    },
    sendGrpDataToPanel(state,actions) {
        console.log("sendGrpDataPanel called");
        console.log(actions);
        state.contact = actions.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const {sendGrpData,sendGrpDataToPanel } = groupSlice.actions

export default groupSlice.reducer;