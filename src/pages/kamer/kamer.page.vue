<template>
    <div class="kamer-wrapper">
        <gegevens :kamer="kamer" :hotel="hotels" :specificHotel="specificHotel"/>
        <persoonsGegevens :kamer="kamer" />
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
    grid-template-columns: repeat(2,40%);
    grid-gap: 1%;
    justify-items: center;
}
</style>
