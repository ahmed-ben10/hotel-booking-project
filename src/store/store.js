import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      currentPage: "",
      hotels:{},
      specificHotel:{}
    },
    mutations: {
      changePage:(state,page) =>{
          state.currentPage = page;
      },
      setSpecificHotel:(state,specificHotel)=>{
        state.specificHotel = specificHotel;
      },
      setHotels:(state,hotels)=>{
        state.hotels = hotels;
      }
    }
  });