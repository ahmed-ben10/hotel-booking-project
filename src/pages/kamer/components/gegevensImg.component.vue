<template>
    <div id="reservering-gegevensImg">
        <div id="titel">
            <p>Uw reserveringsgegevens</p>
            <p>{{specificHotel.naam}} - ({{hotel.stad}}), {{hotel.land}}</p>
        </div>
        <div id="image-container">
            <img :src="kamer.img" alt="kamer foto">
        </div>
        <div id="info-container">
            <div id="titel-onder-img">
                <p>{{specificHotel.naam}} - {{hotel.stad}}, {{hotel.land}}</p>
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
#titel p{
    padding: 2% 0;
    font-size: 15pt;
    font-weight: 600;
}
#titel p:nth-child(2){
    display: none;
}
#image-container img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
#titel-onder-img  p{
    font-weight: 600;
    padding: 2% 0;
}
@media screen and (max-width: 600px){
    #reservering-gegevensImg{
    display: block;
}
}
</style>
