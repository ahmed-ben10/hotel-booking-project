<template>
    <div id="hotel-result-wrapper">
        <div id="hotel-wrapper" >
            <div id="hotel-result" v-for="(hotel,index) in hotels.hotels" :key="index" >
                <div id="image-container">
                    <img :src="hotel.img" alt="">
                </div>
                <div id="info-container">
                    <h2>{{hotel.naam}} - {{hotels.stad}}</h2>
                    <p>{{hotels.stad}}, {{hotels.land}}</p>
                    <ul id="voorzieningen" >
                        <li v-for="(voorziening,index) in hotel.voorzieningen" :key="index"><img :src="voorziening.img" alt="">{{voorziening.naam}}</li>
                    </ul>
                </div>
                <div id="prijs-en-button-container">
                    <p>Vanaf</p>
                    <p>&euro;{{hotel.prijs}},- p.p.p.n.</p>
                    <Button @click="readMore(hotel)">Lees meer</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"hotelResult",
    props:{
        searchedItems:{
            type: Object,
            required:true,
        },
        allHotels:{
            type: null,
            required:true,
        }
    },
    data:() =>{
        return{
            hotels:[]
        }
    },
    watch:{
        searchedItems(newVal, oldVal){
            this.hotels = newVal;
        },
        allHotels: function(newVal, oldVal){
            this.hotels = newVal[0];
        },
    },
    methods:{
        readMore(specificHotel){
            this.$store.commit("setHotels",this.hotels);
            this.$store.commit("setSpecificHotel",specificHotel);
            this.$router.push("/hotel-informatie");
        }
    }
}
</script>

<style scoped>
#hotel-result{
    display: grid;
    grid-template-columns: 40% 40% 19%;
    background-color: white;
    grid-gap: 1%;
    margin: 3% 2% 3% 2%;
    border: 1px solid lightgray;
    height: 290px;

}
#image-container img{
    width: 100%;
    height: 290px;
    object-fit: cover;
}
/* #info-container {
    padding: 5%;
} */
#info-container h2{
    color: #05386B;
    margin-bottom: 2%;
}
#info-container p{
    color: gray;
}
#voorzieningen{
    list-style-type: none;
    margin-top: 10%;
    padding-left: 0;
}
#voorzieningen img{
    width: 20px;
}
#prijs-en-button-container p{
    color: #05386B;
    padding: 3%;
    font-size: 20pt;
}
#prijs-en-button-container p:first-child{
    margin-top: 25%;
    font-size: 15pt;
    
}
#prijs-en-button-container button{
    padding: 10% 8%;
    width: 85%;
    margin-top: 5%;
    background-color: #05386B;
    border:none;
    cursor:pointer;
    color:white;
}
</style>
