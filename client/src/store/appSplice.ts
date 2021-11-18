import { createSlice, PayloadAction } from '@reduxjs/toolkit';
type MessageVariantModel =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark';

export interface StoreInitialState {
  message: null | string;
  messageVariant: MessageVariantModel;
}

const initialState: StoreInitialState = {
  message: '',
  messageVariant: 'info',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMessage(state, action: PayloadAction<null | string>) {
      state.message = action.payload;
    },
    setMessageVariant(state, action: PayloadAction<any>) {
      state.messageVariant = action.payload;
    },
  },
});
