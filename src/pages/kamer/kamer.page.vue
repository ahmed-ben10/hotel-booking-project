<template>
    <div class="kamer-wrapper">
        <gegevensImg :kamer="kamer" :hotel="hotels" :specificHotel="specificHotel"/>
        <gegevens :class="{'displayGegevens':displayNoGegevens}" :kamer="kamer" :hotel="hotels" :specificHotel="specificHotel"  @setNewBevesting="setBevesting"/>
        <transition name="component-fade" mode="out-in"> 
            <component :is="currentComponent" :kamer="kamer" :bevestig="bevestig" @setCurrentComponent="setCurrentComponent"></component>
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
            currentComponent:persoonsGegevens,
            displayNoGegevens: false,
            bevestig: false
        }
    },
    methods:{
        setCurrentComponent(){
            if(this.currentComponent == persoonsGegevens){
                this.currentComponent = bevesteging;
                this.displayNoGegevens = true;
            } else {
                this.currentComponent = persoonsGegevens;
                this.displayNoGegevens = false;
            }
            if(window.innerWidth  >= 600){
                this.displayNoGegevens = false;
            }
        },
        setBevesting(){
            this.bevestig =  !this.bevestig;
            console.log(this.bevestig)
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
.displayGegevens{
    display: none;
}
@media screen and (max-width:600px){
    .kamer-wrapper{    
        grid-template-columns: 1fr;
        margin-bottom: 30%;
    }
    #reservering-gegevens{
        grid-column: unset;
    }
    #bevesteging, #persoons-gegevens{
        grid-column: unset;
    }
    #persoons-gegevens{
       grid-row: 2/2;
       grid-column:unset;
    }
}
</style>
