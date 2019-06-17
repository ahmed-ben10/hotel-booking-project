<template>
    <div class="kamer-wrapper">
        <div> </div>
        <gegevens :kamer="kamer" :hotel="hotels" :specificHotel="specificHotel"/>
        <persoonsGegevens :kamer="kamer" />
        <div> </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import gegevens from './components/gegevens.component.vue';
import persoonsGegevens from './components/persoonsGegevens.component.vue';

export default {
    created (){
        this.$store.commit("changePage","Reserveer kamer")
    },
    components:{
        gegevens,
        persoonsGegevens
    },
    computed:{
        ...mapState([
            'kamer',
            'specificHotel',
            'hotels'
        ])
    }
}
</script>

<style>
.kamer-wrapper{
    display: grid;
    grid-template-columns: 1fr 3fr 6fr 1fr;
    grid-gap: 3%;
    margin-bottom: 5%;
}
</style>
