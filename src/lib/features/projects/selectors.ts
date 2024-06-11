import { initialState } from './slice';
import { createSelector } from '@reduxjs/toolkit';
const projectsInitialStates = (state: any) => state.projects || initialState;

const monstarzSelector = createSelector(
  [projectsInitialStates],
  (state) => state.monstarz
);
const wordplaySelector = createSelector(
  [projectsInitialStates],
  (state) => state.wordplay
);
const traveloSelector = createSelector(
  [projectsInitialStates],
  (state) => state.travelo
);
const nextersSelector = createSelector(
  [projectsInitialStates],
  (state) => state.nexters
);

export { monstarzSelector, wordplaySelector, traveloSelector, nextersSelector };
