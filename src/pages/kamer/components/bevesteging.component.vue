<template>
    <div id="bevesteging">
         <h2>Persoonlijke gegevens</h2>
        <div id="aantal-personen">
            <label for="">Aantal pers.</label>
            <p>{{voorlopigeReservering.length}}</p>
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
                specificHotel: this.specificHotel
            }
            this.$store.commit("setReservering", reservering)
        }
    },
    computed:{
        ...mapState([
            'voorlopigeReservering',
            'specificHotel'
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
    text-align: right;
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
    background-color: #05386B;
    border:none;
    cursor:pointer;
    color:white;
}
</style>
