<template>
    <div class="mijn-gereserveerde-kamers-wrapper">
        <gereserveerdeKamers :gereserveerdeKamers="gereserveerdeKamers"/>
    </div>
</template>

<script>
import gereserveerdeKamers from './components/gereserveerdeKamers.component.vue';
import { mapState } from 'vuex';
export default {
    components:{
        gereserveerdeKamers
    },
    metaInfo: {
      title: "Gereserveerde kamers",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // al deze elementen dragen bij de vindbaarheid van de website, omdat ze met reservering, hotels, vakantie en kamers te maken hebben.
        { keywords: 'hotel, booking, vakantie, gereserveerd, kamers, rooms, info, gegevens, over'}
      ]
    },
    created(){
        this.$store.commit("changePage","Mijn gereserveerde kamers");
    },
    computed:{
        ...mapState([
            'gereserveerdeKamers'
        ])
    }
}
</script>

<style>
.mijn-gereserveerde-kamers-wrapper{
    margin: auto;
    width: 50%;
    margin-bottom: 4%;
}
@media screen and (max-width:600px){
    .mijn-gereserveerde-kamers-wrapper{    
        width: 100%;
        margin-bottom: 25%;
    }
}
</style>
