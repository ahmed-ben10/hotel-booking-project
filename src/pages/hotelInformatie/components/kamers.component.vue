<template>
    <div id="kamers-wrapper">
        <h2>Kamerkeuze</h2>
        <div id="kamers-container" v-for="(kamer,index) in hotel.kamers" :key="index">
            <div id="img-container">
                <img :src="kamer.img" alt="kamer image">
            </div>
            <div id="kamer-info">
                <div id="info">
                    <p>{{kamer.soortKamer}}</p>
                    <p>{{kamer.soortBed}}</p>
                    <p>max {{kamer.maxPersonen}} personen</p>
                </div>
                <div id="prijs-container">
                    <p>&euro; {{kamer.prijs.toFixed(2)}}</p>
                    <p>per persoon per nacht</p>
                </div>
                <div id="button-container">
                    <button>Reserveer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"kamers",
    props:{
        hotel:{
            type: Object,
            required: true
        }
    }
}
</script>

<style>
#kamers-wrapper h2{
    border-bottom:1px solid lightgray;
    margin-bottom: 1%;
}
#kamers-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: flex-end;
    grid-gap: 2%;
    margin-bottom: 1%;
}
#img-container img{
    width: 100%;
    object-fit: cover;
    height: 230px;
}
#prijs-container p:first-child{
    font-size: 25pt;
    padding: 2%;
    font-weight: 500;
}
#prijs-container p{

}
#button-container button{
    padding: 5% 3%;
    width: 85%;
    margin-top: 5%;
    background-color: #05386B;
    border:none;
    cursor:pointer;
    color:white;
}
</style>
