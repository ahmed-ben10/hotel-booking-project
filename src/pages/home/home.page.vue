<template>
  <div class="home">
    <hotelResult :allHotels="hotels" :searchedItems="searchedItems" class="hotel-result" />
    <search :hotels="hotels" @searchedItems="setSearchedItems" class="search" />
  </div>
</template>

<script>
  import Api from '../../api/api';
  import search from './components/search.component.vue';
  import hotelResult from './components/hotelResult.component.vue';

  export default {
    name: 'home',
    metaInfo: {
      title: "Hotel-Booking",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // al deze keywords dragen bij de vindbaarheid van de website, omdat ze met vakantie, hotels, boekingen en reizen te maken hebben.
        { keywords: 'hotel, booking, nederland, europa , vakantie, reizen, zomer, zomervakantie, van der valk, babylon,'},
         {name: 'description', content: 'Op hotel-bokking kunt u een hotel boeken. In het binnen of buienland.'}
      ]
    },
    components: {
      search,
      hotelResult
    },
    data: () => {
      return {
        hotels: null,
        searchedItems: {}
      }
    },
    async created() {
      this.hotels = await Api.Hotel.fetchAll();
      this.$store.commit("changePage", "Uitgelichte hotels");
    },
    methods: {
      setSearchedItems(items) {
        this.searchedItems = items;
      }
    }

  }

</script>
<style>
  .home {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-gap: 1%;
    margin-bottom: calc(1rem * 2);
  }

  .search {
    width: 100%;
    cursor: pointer;
  }

  .hotel-result {
    width: 100%;
  }

  /*Mobiel design*/
  @media screen and (max-width: 600px){
    .home{
      display: block;
    }
  }
</style>
