<template>
    <div id="bevesteging">
         <div id="bevesteging-titel">
            <h2>Persoonlijke gegevens</h2>
            <h2>Gegevens</h2>
        </div> 
        <div id="aantal-personen">
            <label for="">Aantal pers.</label>
            <p>{{voorlopigeReservering.length}} Volwassen</p>
        </div>
        <div id="persoon" v-for="(aPersoon, i) in voorlopigeReservering" :key="i">
            <p>Persoon {{(i+1)}}</p>
            <div id="voornaam-container">
                <label for="voornaam">Voornaam: </label>
                <p>{{aPersoon[0].data}} </p>
            </div>
            <div id="achternaam-container">
                <label for="achternaam">Achternaam: </label>
               <p>{{aPersoon[1].data}} </p>
            </div>
            <div id="mobiel-container">
                <label for="mobiel">Mobiel: </label>
                <p>{{aPersoon[2].data}} </p>
            </div>
            <div id="email-container">
                <label for="email">Email: </label>
                <p>{{aPersoon[3].data}} </p>
            </div>
        </div>
        <div class="button-container">
            <div id="wijzig-container">
                <button @click="goToWijzig"> Wijzigen </button>
            </div>
            <div id="bevestig-container">
                <button @click="setReservering">Bevestigen</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'bevesteging',
    props:{
        kamer:{
            type: Object,
            required: true
        }
    },
    methods:{
        goToWijzig(){
            this.$emit("setCurrentComponent");
        },
        setReservering(){
            var reservering ={
                kamer:this.kamer,
                personen: this.voorlopigeReservering,
                specificHotel: this.specificHotel,
                hotels: this.hotels
            }
            this.$store.commit("setReservering", reservering);
            this.$router.push("/mijn-Gereserveerde-Kamers");
        }
    },
    computed:{
        ...mapState([
            'voorlopigeReservering',
            'specificHotel',
            'hotels'
        ])
    }
}
</script>

<style >
#bevesteging{
    margin-bottom: 1%;
}
#bevesteging h2{
    margin-bottom: 2%;
}
#bevesteging h2:nth-child(2){
    display: none;
}
#bevesteging p:first-child{
    font-size: 15pt;
    font-weight: 600;
    border-bottom: 1px solid lightgray;
    margin-bottom: 2%;
}
#persoon div, #aantal-personen {
    display: grid;
    grid-template-columns: 1fr 4fr;
    margin-bottom: 2%;
    grid-gap: 1%;
    align-items: flex-end;
}
#persoon h2{
    border-bottom: 1px solid lightgray;
    margin: 2% 0;
}
#persoon div{
    margin-bottom: 3%;
}
#persoon div label , #aantal-personen label{
    font-weight: 600;
    text-align: left;
}
#persoon div span{
    color: red;
    font-size: 80%;
    grid-column: 2/2;
}
#aantal-personen select{
    width: 50%;
    padding: 5px 7px;
}
.button-container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
    grid-gap: 1%;
}
#wijzig-container{
    grid-column: 2/3;
}
#bevestig-container{
    grid-column: 3/3;
}
#bevestig-container button, #wijzig-container button{
    padding: 12px 3px;
    width: 100%;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
    background-color: #05386B;
    border:none;
    cursor:pointer;
    color:white;
}

/*Mobiel design*/
@media screen and (max-width: 600px){
    #persoon, #aantal-personen{
        padding-left: 3%;
    }
    #bevesteging h2:nth-child(1){
        display: none;
    }
    #bevesteging h2:nth-child(2){
        display: block;
       background-color: #379683;
       font-size: 4vw;
       padding: 2%;
       margin-bottom: 4% !important;
       font-weight: bold;
       color: white;
       text-transform: uppercase;
       text-decoration: underline;
    }
    #wijzig-container{
        grid-column: 2/3;
    }
    #bevestig-container{
        margin-right: 4%;
    }
    #bevestig-container, #wijzig-container{
        width: 92%;
    }
    #bevestig-container button, #wijzig-container button{
        padding: 0;
    }
    .button-container{
        grid-template-columns: 2fr 1fr 1fr; 
    }
}
</style>
