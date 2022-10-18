import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPokemonFav: 0,
  pokemonFavList: [],
}
// console.log('pokefav', initialState.pokemonFavList)
export const favPokeSlice = createSlice({
  name: 'pokeFav',
  initialState: initialState,
  reducers: {
    initialStateFunction: (state, action) => {
      state.pokemonFavList = action.payload;
      state.totalPokemonFav = state.pokemonFavList.length;
    },
    addPokeToFav: (state, action) => {
      // console.log('action payload', action.payload)
      // console.log('states', state.pokemonFavList)
        state.pokemonFavList = [...state.pokemonFavList, action.payload];
        state.totalPokemonFav += 1;
    },
    removePokeFromFav: (state, action) => {
      const pokeId = action.payload;
      state.totalPokemonFav -= 1;
      state.pokemonFavList = state.pokemonFavList.filter(poke => poke.id !== pokeId);
  }
  },
})

export const { addPokeToFav, removePokeFromFav, initialStateFunction } = favPokeSlice.actions;

export default favPokeSlice.reducer;