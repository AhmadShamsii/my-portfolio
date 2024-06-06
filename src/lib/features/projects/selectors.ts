import { initialState } from './slice';
import { createSelector } from '@reduxjs/toolkit';
const projectsInitialStates = (state: any) => state.projects || initialState;

const monstarzSelector = createSelector(
  [projectsInitialStates],
  (state) => state.monstarz
);

export { monstarzSelector };
