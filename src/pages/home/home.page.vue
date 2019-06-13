<template>
  <div class="home">
      <search :hotels="hotels" />
  </div>
</template>

<script>
import Api from '../../api/api';
import search from './components/search.component.vue';

export default {
  name: 'home',
  components:{
    search
  },
  data: () => {
    return {
      hotels: null
    }
  },
  async created(){
    this.hotels = await Api.Hotel.fetchAll();
    this.$store.commit("changePage","Uitgelichte hotels");
  }

}
</script>
