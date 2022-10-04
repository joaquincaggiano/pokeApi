import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPokemonFav: 0,
  pokemonFavList: [],
}

export const favPokeSlice = createSlice({
  name: 'pokeFav',
  initialState: initialState,
  reducers: {
    initialStateFunction: (state, action) => {
      state.pokemonFavList = action.payload;
      // console.log("EN EL SLICE DE INITIAL", action.payload)
      // state.totalPokemonFav = [...state.pokemonFavList].length 
    },
    addPokeToFav: (state, action) => {
        // console.log("action redux",action.payload)
        // const pokeToSave = {id: action.payload}
        state.pokemonFavList = [...state.pokemonFavList, action.payload];
        state.totalPokemonFav += 1;
        // axios.post(`http://localhost:3030/api/user/${userId.id}/favs`, pokeToSave)
        // .then(response => console.log(response))
        // .catch(error => console.log(error))
        // localStorage.setItem("pokeCatch", JSON.stringify(state))
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