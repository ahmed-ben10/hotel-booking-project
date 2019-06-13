<template>
    <div id="hotel-result-wrapper">
        <div id="hotel-result" v-for="(hotel,index) in hotels" :key="index">
            <div id="image-container">
                <img src="" alt="">
            </div>
            <div id="info-container">

            </div>
            <div id="prijs-en-button-container">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"hotelResult",
    props:{
        hotels:{
            type: null
        }
    }
}
</script>

<style>

</style>
