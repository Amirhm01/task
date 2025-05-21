// store/layoutSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface LayoutState {
    isOpenMenu: boolean;
}

const initialState: LayoutState = {
    isOpenMenu: false,
};

const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        toggleMenu(state) {
            state.isOpenMenu = !state.isOpenMenu;
        },
    },
});

export const { toggleMenu } = layoutSlice.actions;

export const layoutSelectors = {
    isOpenMenu: (state: { layout: LayoutState }) => state.layout.isOpenMenu,
};

export default layoutSlice.reducer;
