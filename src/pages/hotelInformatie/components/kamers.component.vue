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
            </div>
            <div id="prijs-container">
                <p>&euro; {{kamer.prijs.toFixed(2)}}</p>
                <p>per persoon per nacht</p>
                <div id="button-container">
                    <button @click="reserveerKamer(kamer)">Reserveer</button>
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
    },
    methods: {
        reserveerKamer(kamer){
            this.$store.commit("goToRoom",kamer);
            this.$router.push("/reservering")
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
#img-container{
    grid-column: 1/2;
    grid-row: 1/3;
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
#button-container button{
    padding: 5% 3%;
    width: 85%;
    margin-top: 5%;
    background-color: #05386B;
    border:none;
    cursor:pointer;
    color:white;
}

/*Mobiel design*/
@media screen and (max-width: 600px){
    #kamers-wrapper h2{
        padding-left: 2%;
        border-bottom: 1px solid #379683;
        margin-bottom: 3%;
    }
    #kamers-container{
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 6%;
        padding: 2%;
    }
    #img-container{
        grid-row: 1/2;
    }
    #img-container img{
        height: 25vw;
    }
    #info p{
        font-size: 3.5vw;
    }
    #prijs-container p:first-child, #prijs-container p{
        font-size: 3.5vw;
    }    
}
</style>
