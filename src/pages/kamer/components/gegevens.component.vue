<template>
    <div id="reservering-gegevens">
        <h2>Uw reserveringsgegevens</h2>
        <div id="image-container">
            <img :src="kamer.img" alt="kamer foto">
        </div>
        <div id="info-container">
            <p>{{specificHotel.naam}} - {{hotel.stad}},{{hotel.land}}</p>
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
#image-container img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
</style>
