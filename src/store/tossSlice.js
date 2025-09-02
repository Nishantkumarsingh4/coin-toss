'use client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const tossCoin = createAsyncThunk('toss/flip', async () => {
  const res = await fetch('/api/toss', { method: 'POST' });
  if (!res.ok) throw new Error('Failed to toss');
  return res.json();
});

const slice = createSlice({
  name: 'toss',
  initialState: { status: 'idle', lastResult: null, history: [], error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(tossCoin.pending, s => { s.status='loading'; s.error=null; });
    b.addCase(tossCoin.fulfilled, (s,a) => {
      s.status='succeeded';
      s.lastResult=a.payload.result;
      s.history.unshift({ outcome:a.payload.result, createdAt:new Date().toISOString() });
      s.history=s.history.slice(0,5);
    });
    b.addCase(tossCoin.rejected, (s,a) => { s.status='failed'; s.error=a.error.message; });
  }
});
export default slice.reducer;