<template>
    <div class="kamer-wrapper">
        <gegevens :kamer="kamer" :hotel="hotels" :specificHotel="specificHotel"/>
        <component :is="currentComponent" :kamer="kamer" @setCurrentComponent="setCurrentComponent"></component>
    </div>
</template>

<script>
import { mapState } from "vuex";
import gegevens from './components/gegevens.component.vue';
import persoonsGegevens from './components/persoonsGegevens.component.vue';
import bevesteging from './components/bevesteging.component.vue';
export default {
    created (){
        this.$store.commit("changePage","Reserveer kamer")
    },
    components:{
        gegevens,
        persoonsGegevens,
        bevesteging
    },
    metaInfo: {
      title: "Reservering",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // al deze keywords dragen bij de vindbaarheid van de website, omdat ze met kamer,boeken, hotels en gegevens te maken hebben.
        { keywords: 'reserveren, kamer, hotelkamer gegevens, informatie, info, hotels, hotel, boeken,booking'}
      ]
    },
    data: () =>{
        return {
            currentComponent:persoonsGegevens
        }
    },
    methods:{
        setCurrentComponent(){
            if(this.currentComponent == persoonsGegevens){
                this.currentComponent = bevesteging;
            } else {
                this.currentComponent = persoonsGegevens;
            }
        }
    },
    computed:{
        ...mapState([
            'kamer',
            'specificHotel',
            'hotels'
        ])
    },
    destroyed(){
        this.$store.state.voorlopigeReservering =[];
    }
}
</script>

<style>
.kamer-wrapper{
    display: grid;
    grid-template-columns: 1fr 3fr 8fr 1fr;
    grid-gap: 2%;
    margin-bottom: 5%;
}
#reservering-gegevens{
    grid-column: 2/2;
}
#bevesteging, #persoons-gegevens{
    grid-column: 3/4;
}
</style>
