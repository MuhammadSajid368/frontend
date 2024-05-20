import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARRED, SHARED, messages
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // ToggleSidebar
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

export const toggleSidebar = () => {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
};

export const updateSidebarType = (type) => {
  return async () => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
};

export default slice.reducer;
