import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { projectStates } from "./types";

export const initialState: projectStates = {
  monstarz: {
    dimensions: null,
  },
  wordplay: {
    dimensions: null,
  },
  travelo: {
    dimensions: null,
  },
  nexters: {
    dimensions: null,
  },
};

interface Dimensions {
  width: number;
  height: number;
}

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setMonstarzDetails: (state:any, action: PayloadAction<Dimensions>) => {
      console.log(action.payload, '1')
      state.monstarz.dimensions = action.payload;
    },
    setWordplayDetails: (state:any, action: PayloadAction<Dimensions>) => {
      console.log(action.payload, '2')
      state.wordplay.dimensions = action.payload;
    },
    setTraveloDetails: (state:any, action: PayloadAction<Dimensions>) => {
      console.log(action.payload, '3')
      state.travelo.dimensions = action.payload;
    },
    setNextersDetails: (state:any, action: PayloadAction<Dimensions>) => {
      console.log(action.payload, '4')
      state.nexters.dimensions = action.payload;
    },
  },
});

export const { setMonstarzDetails,setWordplayDetails ,setTraveloDetails,setNextersDetails} =
  projectsSlice.actions;
export default projectsSlice.reducer;
