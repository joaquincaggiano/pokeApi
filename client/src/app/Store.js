import { configureStore } from '@reduxjs/toolkit'

// Reducers
import favPokeSlice from '../features/favPokeSlice/favPokeSlice'
import triviaSlice from '../features/trivia/triviaSlice'

export const store = configureStore({
  reducer: {
    pokeFav: favPokeSlice,
    trivia: triviaSlice
  },
})