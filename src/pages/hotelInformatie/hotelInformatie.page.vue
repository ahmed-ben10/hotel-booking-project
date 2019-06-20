<template>
    <div class="hotel-informatie">
        <hotelInformatie :hotel="specificHotel" />
        <kamers :hotel="specificHotel"/>
    </div>
</template>

<script>
import { mapState } from "vuex";
import hotelInformatie from './components/hotelInformatie.component.vue';
import kamers from './components/kamers.component.vue';

export default {
    name:"hotel-informatie",
    components:{
        hotelInformatie,
        kamers
    },
    metaInfo: {
      title: "Hotel-informatie",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // al deze elementen dragen bij de vindbaarheid van de website, omdat ze met informatie, hotels en kamers te maken hebben.
        { keywords: 'hotel, booking, nederland, europa , vakantie, reizen, zomer, zomervakantie, van der valk, babylon,kamers, rooms, info, gegevens, over'}
      ]
    },
    computed:{
        ...mapState([
            'hotels',
            'specificHotel'
        ])
    }, 
    created(){
        this.$store.commit("changePage",this.specificHotel.naam+" - "+this.hotels.stad)
    }
}
</script>

<style>
.hotel-informatie{
    display: grid;
    grid-template-columns: 60% 40%;
    grid-gap: 1%;
    margin-bottom: 5%;
}
#informatie-wrapper{
    width: 100%;
}
#kamers-wrapper{
    width: 100%;
}
</style>
