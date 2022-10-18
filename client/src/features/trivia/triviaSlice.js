import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 question: '',
 answers: [],
 correctAnswer: ''
}

export const triviaSlice = createSlice({
  name: 'trivia',
  initialState: initialState,
  reducers: {
    getQuestion: {

    }
  },
})

export const { getQuestion } = triviaSlice.actions;

export default triviaSlice.reducer;