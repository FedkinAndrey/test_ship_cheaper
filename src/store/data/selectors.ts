import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectSelf = (state: RootState) => state.data;

export const selectData = createSelector(selectSelf, (data) => ({
	data: data.data,
}));
