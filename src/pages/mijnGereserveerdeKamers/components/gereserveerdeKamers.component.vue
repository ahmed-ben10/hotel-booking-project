<template>
    <div id="gereserveerde-kamers">
        <div v-if="gereserveerdeKamers.length">  
            <div id="reservering" v-for="(reservering,i) in gereserveerdeKamers" :key="i">
                <div id="gereserveerde-image">
                    <img :src="reservering.specificHotel.img" alt="">
                </div>
                <div id="gereserveerde-info">

                </div>
            </div>
        </div>
        <div id="no-reservering" v-else>
            <h2>Er zijn momenteel geen reserveringen.</h2>
        </div>
    </div>
</template>

<script>
export default {
    name:'gereserveerdeKamers',
    props:{
        gereserveerdeKamers:{
            type:Array,
            required: false
        }
    }
}
</script>

<style>
#reservering{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 1%;
}
#gereserveerde-image img{
    width: 100%;
    height: 250px;
    object-fit: cover;
}
</style>
