'use client';
import { configureStore } from '@reduxjs/toolkit';
import tossReducer from './tossSlice';
export const store = configureStore({ reducer: { toss: tossReducer } });
export default store;