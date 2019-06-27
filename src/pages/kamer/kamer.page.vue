<template>
    <div class="kamer-wrapper">
        <gegevensImg :kamer="kamer" :hotel="hotels" :specificHotel="specificHotel"/>
        <gegevens :kamer="kamer" :hotel="hotels" :specificHotel="specificHotel"/>
        <transition name="component-fade" mode="out-in"> 
            <component :is="currentComponent" :kamer="kamer" @setCurrentComponent="setCurrentComponent"></component>
        </transition>
    </div>
</template>

<script>
import { mapState } from "vuex";
import gegevensImg from './components/gegevensImg.component.vue';
import gegevens from './components/gegevens.component.vue';
import persoonsGegevens from './components/persoonsGegevens.component.vue';
import bevesteging from './components/bevesteging.component.vue';
export default {
    created (){
        this.$store.commit("changePage","Reserveer kamer")
    },
    components:{
        gegevensImg,
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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to{
  opacity: 0;
}
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
@media screen and (max-width:600px){
    .kamer-wrapper{    
        display: block;
    }
}
</style>
