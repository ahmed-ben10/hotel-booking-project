<template>
    <div id="reservering-gegevensImg">
        <div id="hotel-naam">
            <p>{{specificHotel.naam}} - ({{hotel.stad}}), {{hotel.land}}</p>
        </div>
        <div id="image-container">
            <img :src="kamer.img" alt="kamer foto">
        </div>
        <div id="info-container">
            <div id="prijs-onder-img">
                 <p>&euro; {{kamer.prijs.toFixed(2)}} per persoon per nacht</p>
             </div>
        </div>
    </div>        
</template>

<script>
export default {
    name: 'gegevens',
    props: {
        kamer:{
            type:Object,
            required: true
        },
        specificHotel:{
            type: Object,
            required: true
        },
        hotel:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>
#reservering-gegevensImg{
    display: none;
}
#hotel-naam p{
    padding: 2% 3%;
    font-size: 4vw ;
    font-weight: normal;
}
#image-container img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
#prijs-onder-img  p{
    font-size: 3vw;
    font-weight: light;
    padding: 2%;
}
@media screen and (max-width: 600px){
    #reservering-gegevensImg{
    display: block;
}
}
</style>
