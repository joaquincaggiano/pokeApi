import { configureStore } from '@reduxjs/toolkit'

// Reducers
import favPokeSlice from '../features/favPokeSlice/favPokeSlice'

export const store = configureStore({
  reducer: {
    pokeFav: favPokeSlice,
  },
})