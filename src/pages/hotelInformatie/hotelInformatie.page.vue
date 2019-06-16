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
}
#informatie-wrapper{
    width: 100%;
}
#kamers-wrapper{
    width: 100%;
}
</style>
