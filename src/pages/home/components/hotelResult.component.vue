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
        }
    },
    created(){
        this.hotels =
            { land:'Nederland', werelddeel:'Europa', stad:'Den Haag', 
                    hotels:[
                        { naam:'Babylon Hotel', img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hampshire_Hotel_-_Babylon_Den_Haag.jpg/1024px-Hampshire_Hotel_-_Babylon_Den_Haag.jpg", voorzieningen:[{naam:"Wifi", img:"https://image.flaticon.com/icons/svg/53/53524.svg"}, {naam:"Restaurant", img:"https://image.flaticon.com/icons/svg/685/685352.svg"}, {naam:"Fitness", img:"https://image.flaticon.com/icons/svg/53/53524.svg"}, {naam:"Zwembad", img:"https://image.flaticon.com/icons/svg/1659/1659263.svg"}, {naam:"Naast het Station", img:"https://image.flaticon.com/icons/svg/100/100228.svg"}],prijs:101, beschrijving:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde exercitationem, laboriosam ab sint animi harum ratione fugit aperiam autem, qui fuga voluptatum? Numquam enim, ex at odit quos tempora?", 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Van der Valk', img:"https://images.trvl-media.com/hotels/2000000/1810000/1805200/1805172/65fc44bb_z.jpg", voorzieningen:[{naam:"Wifi", img:"https://image.flaticon.com/icons/svg/53/53524.svg"}, {naam:"Restaurant", img:"https://image.flaticon.com/icons/svg/685/685352.svg"}, {naam:"Fitness", img:"https://image.flaticon.com/icons/svg/53/53524.svg"}, {naam:"Zwembad", img:"https://image.flaticon.com/icons/svg/1659/1659263.svg"}, {naam:"Naast het Station", img:"https://image.flaticon.com/icons/svg/100/100228.svg"}],prijs:101, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                };
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
