import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPokemonFav: 0,
  pokemonFavList: [],
}

export const favPokeSlice = createSlice({
  name: 'pokeFav',
  initialState: initialState,
  reducers: {
    addPokeToFav: (state, action) => {
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

export const { addPokeToFav, removePokeFromFav } = favPokeSlice.actions;

export default favPokeSlice.reducer;