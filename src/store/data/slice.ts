import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataState, IData } from '../../types/data';
import { mockData } from '../../mock/mock';
import { dateToLocal } from '../../helpers/helpers';

const initialState: DataState = {
	data: mockData,
};

const dataSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addData(state, action: PayloadAction<IData>) {
			const newState = action.payload;
			newState.birthday = dateToLocal(newState.birthday);
			state.data.push(newState);
		},
		removeData(state, action: PayloadAction<number>) {
			state.data.splice(action.payload, 1);
		},
	},
});

export const { addData, removeData } = dataSlice.actions;

export default dataSlice.reducer;
