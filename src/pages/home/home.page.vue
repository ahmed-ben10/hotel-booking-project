<template>
  <div class="home">
    <search :hotels="hotels" @searchedItems="setSearchedItems" class="search" />
    <hotelResult :allHotels="hotels" :searchedItems="searchedItems" class="hotel-result"/>
  </div>
</template>

<script>
  import Api from '../../api/api';
  import search from './components/search.component.vue';
  import hotelResult from './components/hotelResult.component.vue';

  export default {
    name: 'home',
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
.home{
  display: grid;
  grid-template-columns: 20% 80%;
  grid-gap: 1%;
  margin-bottom: 5%;
}
.search{
   width: 100%;
   cursor:pointer;
}
.hotel-result{
  width: 100%;
  height: 290px;
}
</style>
