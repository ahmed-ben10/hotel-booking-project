<template>
  <div class="home">
      <h2>Home</h2>
  </div>
</template>

<script>
import Api from '../../api/api';
export default {
  name: 'home',
  data: () => {
    return {
      hotel: null
    }
  },
  async created(){
    this.hotel = await Api.Hotel.fetchAll();
  }

}
</script>
