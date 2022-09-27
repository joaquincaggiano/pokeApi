import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
  totalPokemonFav: 0,
  pokemonFavList: [],
}

export const favPokeSlice = createSlice({
  name: 'pokeFav',
  initialState: initialState,
  reducers: {
    addPokeToFav: (state, action) => {
        console.log("action redux",action.payload)
        const userId = JSON.parse(localStorage.getItem('user'))
        const pokeToSave = {id: action.payload}
        state.pokemonFavList = [...state.pokemonFavList, action.payload];
        state.totalPokemonFav += 1;
        axios.post(`http://localhost:3030/api/user/${userId.id}/favs`, pokeToSave)
        .then(response => console.log(response))
        .catch(error => console.log(error))
        // localStorage.setItem("pokeCatch", JSON.stringify(state))
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