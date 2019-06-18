import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      currentPage: "",
      hotels:{},
      specificHotel:{},
      kamer: {},
      voorlopigeReservering:[],
      besteldeKamers:[]
    },
    mutations: {
      changePage:(state,page) =>{
          state.currentPage = page;
      },
      setSpecificHotel:(state,specificHotel) =>{
        state.specificHotel = specificHotel;
      },
      setHotels:(state,hotels) =>{
        state.hotels = hotels;
      },
      goToRoom: (state,kamer) =>{
        state.kamer = kamer;
      },
      setVoorlopigeReservering:(state, personen) =>{
        state.voorlopigeReservering = personen ;
      }
    }
  });