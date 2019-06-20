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
                </div>
                <ul id="voorzieningen" >
                    <li v-for="(voorziening,index) in hotel.voorzieningen" :key="index"><img :src="voorziening.img" alt="">{{voorziening.naam}}</li>
                </ul>
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
    grid-template-columns: 2fr 2fr 1fr;
    background-color: white;
    grid-gap: 1%;
    margin: 3% 2% 3% 2%;
    border: 1px solid lightgray;
    height: 290px;

}
#image-container{
    grid-column: 1/2;
    grid-row: 1/3;
}
#image-container img{
    width: 100%;
    height: 290px;
    object-fit: cover;
}
#info-container{
    grid-column: 2/4;
    grid-row: 1/2;
}
#info-container h2{
    color: #05386B;
    margin-bottom: 2%;
}
#info-container p{
    color: gray;
}
#voorzieningen{
    list-style-type: none;
    grid-column: 2/3;
    grid-row: 2/3;
    padding-left: 0;
}
#voorzieningen img{
    width: 20px;
}
#prijs-en-button-container{
    grid-column: 3/4;
    grid-row: 2/3;
}
#prijs-en-button-container p{
    color: #05386B;
    padding: 3%;
    font-size: 20pt;
}
#prijs-en-button-container p:first-child{
    font-size: 15pt;
    
}
#prijs-en-button-container button{
    padding: 8% 6%;
    width: 85%;
    margin-top: 5%;
    background-color: #05386B;
    border:none;
    cursor:pointer;
    color:white;
}
</style>
