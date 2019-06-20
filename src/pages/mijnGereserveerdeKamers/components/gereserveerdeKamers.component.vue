<template>
    <div id="gereserveerde-kamers">
        <div v-if="gereserveerdeKamers.length">  
            <div id="reservering" v-for="(reservering,i) in gereserveerdeKamers" :key="i" @click="goToHotelInformation(reservering)">
                <div id="gereserveerde-image">
                    <img :src="reservering.specificHotel.img" alt="">
                </div>
                <div id="gereserveerde-info">
                    <p>{{reservering.specificHotel.naam}} - {{reservering.hotels.stad}}</p>
                    <span>{{reservering.hotels.stad}}, {{reservering.hotels.land}}</span>
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
    },
    methods:{
        goToHotelInformation(reservering){
            this.$store.commit("setHotels",reservering.hotels);
            this.$store.commit("setSpecificHotel",reservering.specificHotel);
            this.$router.push("/hotel-informatie");
        }
    }
}
</script>

<style>
#reservering{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 1%;
    margin-bottom: 1%;
    background-color: white;
    align-items: center;
    justify-items: center;
    text-align: center; 
    cursor: pointer;
    border: 1px solid lightgray;
}
#gereserveerde-image img{
    width: 100%;
    height: 300px;
    object-fit: cover;
}
#gereserveerde-info p{
    font-weight: 600;
    font-size: calc(1em + 0.5vw);
    margin-bottom: 3%;
}
#gereserveerde-info span{
    font-size: 100%;
}
</style>
