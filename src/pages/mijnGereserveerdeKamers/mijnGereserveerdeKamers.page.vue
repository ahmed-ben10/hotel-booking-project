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
    /* display: grid;
    grid-template-columns: 1fr 1fr;*/
    margin: auto;
    width: 50%;
    margin-bottom: 4%;
}
</style>
