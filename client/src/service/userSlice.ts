import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
	username: string | null;
}

const initialState: UserState = {
	username: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<string>) => {
			state.username = action.payload;
		},
		logout: (state) => {
			state.username = null;
		},
	},
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
