<template>
    <div id="informatie-wrapper">
        <div id="top-informatie">
            <div id="image-container">
                <img :src="hotel.img" alt="hotel image">
            </div>
            <div id="info-voorzieningen">
                <h2>Populaire voorzieningen</h2>
                <ul>
                    <li v-for="(voorziening,index) in hotel.voorzieningen" :key="index"><img :src="voorziening.img" alt="">{{voorziening.naam}}</li>
                </ul>
            </div>
        </div>
        <div id="beschrijving">
            <h2>Beschrijving</h2>
            <p v-for="(beschrijving,index) in hotel.beschrijving" :key="index">{{beschrijving}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"hotel-informatie",
    props:{
        hotel:{
            type: Object,
            required: true
        }
    }

}
</script>

<style>
#top-informatie{
    display: grid;
    grid-template-columns:  60% 40%;
    grid-gap: 4%;
}
#image-container img{
    width:100%;
}
#info-voorzieningen h2{
    border-bottom: 1px solid lightgray;
}
#info-voorzieningen ul{
    padding-top: 1%;
    list-style-type: none;
    padding-left: 0;
    font-weight: 600;
}
#info-voorzieningen ul li img{
    width: 20px;
    padding-right: 5px;
}
#beschrijving h2{
    border-bottom: 1px solid lightgray;
    margin-bottom: 1%;
}
#beschrijving p{
    margin-bottom: 1%;
}
</style>
