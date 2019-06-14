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

                    <div id="voorzieningen">
                        <ul v-if="hotel.wifi"><img src="https://image.flaticon.com/icons/svg/53/53524.svg" alt="">Wifi</ul>
                        <ul v-if="hotel.restaurant"><img src="https://image.flaticon.com/icons/svg/685/685352.svg" alt="">Restaurant</ul>
                        <ul v-if="hotel.fitness"><img src="https://image.flaticon.com/icons/svg/53/53524.svg" alt="">Fitness</ul>
                        <ul v-if="hotel.zwembad"><img src="https://image.flaticon.com/icons/svg/1659/1659263.svg" alt="">Zwembad</ul>
                        <ul v-if="hotel.naastHetStation"><img src="https://image.flaticon.com/icons/svg/100/100228.svg" alt="">Naast het Station</ul>

                    </div>
                </div>
                <div id="prijs-en-button-container">

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
                this.hotels ={ land:'Nederland', werelddeel:'Europa', stad:'Den Haag', 
                    hotels:[
                        { naam:'Babylon Hotel', img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hampshire_Hotel_-_Babylon_Den_Haag.jpg/1024px-Hampshire_Hotel_-_Babylon_Den_Haag.jpg", wifi:true, restaurant:true, fitness:true,zwembad: true, naastHetStation:true, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Babylon Hotel', img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hampshire_Hotel_-_Babylon_Den_Haag.jpg/1024px-Hampshire_Hotel_-_Babylon_Den_Haag.jpg", wifi:true, restaurant:true, fitness:true,zwembad: true, naastHetStation:true, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                };

    }
}
</script>

<style>
#hotel-result{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    background-color: white;
    grid-gap: 1%;
    margin: 1%;
    border: 1px solid lightgray;
}
#image-container img{
    width: 100%;
    height: 100%;
}
#info-container h2{
    color: #05386B;
}
#info-container p{
    color: gray;
}
#voorzieningen{
    margin-top: 10%;
}
#voorzieningen ul{
    padding-left: 0;
}
#voorzieningen img{
    width: 20px;
}
</style>
