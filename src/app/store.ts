import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import pirateReducer from '../features/pirateSlice';

export const store = configureStore({
  reducer: pirateReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
