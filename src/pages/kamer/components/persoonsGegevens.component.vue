<template>
    <div id="persoons-gegevens">
        <h2>Persoonlijke gegevens</h2>
        <div id="aantal-personen">
            <label for="">Aantal pers.</label>
            <select  v-model="aantal"  aria-placeholder="" @change="setAantal(aantal)">
                <option v-for="(kamer,index) in kamer.maxPersonen" :key="index">{{kamer.toFixed(0)}}</option>
            </select>
        </div>
        <form @submit.prevent="">
            <div id="persoon" v-for="(aPersoon, i) in personen" :key="i">
                <p>Persoon {{(i+1)}}</p>
                <div id="voornaam-container">
                    <label for="voornaam">Voornaam: </label>
                    <input type="text" v-model="aPersoon[0].data" placeholder="John" @blur="checkTextField(i,aPersoon[0].val)">
                    <span>{{aPersoon[0].error}}</span>
                </div>
                <div id="achternaam-container">
                    <label for="achternaam">Achternaam: </label>
                    <input type="text" v-model="aPersoon[1].data" placeholder="Doe" @blur="checkTextField(i,aPersoon[1].val)">
                    <span>{{aPersoon[1].error}}</span>
                </div>
                <div id="mobiel-container">
                    <label for="mobiel">Mobiel: </label>
                    <input type="text" v-model="aPersoon[2].data" placeholder="06-12345678" @blur="checkTextField(i,aPersoon[2].val)">
                    <span>{{aPersoon[2].error}}</span>
                </div>
                <div id="email-container">
                    <label for="email">Email: </label>
                    <input type="email" v-model="aPersoon[3].data" placeholder="john.doe@hotmail.com" @blur="checkTextField(i,aPersoon[3].val)">
                    <span>{{aPersoon[3].error}}</span>
                </div>
            </div>
            <div id="submit-container">
                <input type="submit" value="Reserveer" @click="goToBevesteging">
            </div>
        </form>
    </div>
</template>

<script>
import {textValidation, mobielValidation, emailValidation } from "@/utils/validation.util.js";
export default {
    name: 'persoonsGegevens',
    props:{
        kamer:{
            type:Object,
            required:true
        }
    },
    data: () => {
        return{
            aantal:1,
            personen: [[ 
                { val: "voornaam", error: "", data:""},
                { val: "achternaam", error: "", data:"" },
                { val: "mobiel", error: "", data:""},
                { val: "email", error: "", data:"" }
            ]]
        }
    },
    created(){
        if(this.$store.state.voorlopigeReservering.length){
            this.personen = this.$store.state.voorlopigeReservering;
            this.aantal = this.$store.state.voorlopigeReservering.length;
        }
        
    },
    methods:{
        setAantal(aantal){
            this.aantal = parseInt(aantal);
            this.personen = [];
            for (let i = 0; i < this.aantal; i++) {
                this.personen.push([ 
                    { val: "voornaam", error: "", data:""},
                    { val: "achternaam", error: "", data:"" },
                    { val: "mobiel", error: "", data:""},
                    { val: "email", error: "", data:"" }
                ]);
               
            }
        },
        checkTextField(i,val){
            switch(val){
                case"voornaam":
                this.personen[i][0].error = textValidation({min:2, max:60},this.personen[i][0].data);
                break;

                case"achternaam":
                this.personen[i][1].error = textValidation({min:2, max:60},this.personen[i][1].data);
                break;

                case"mobiel":
                this.personen[i][2].error = mobielValidation({max:10}, this.personen[i][2].data);

                break;

                case"email":
                this.personen[i][3].error = emailValidation(this.personen[i][3].data);
                break;
            }
         
        },
        goToBevesteging(){
            for(let persoon of this.personen){
                console.log(persoon);
            }
            for (let i = 0; i < this.personen.length; i++) {
                for (let j = 0; j < this.personen[i].length; j++) {
                    if(this.personen[i][j].data != ""){
                        if(this.personen[i][j].error == ""){
                            if((i+1) == this.personen.length && (j+1) == this.personen[i].length){
                                this.$store.commit("setVoorlopigeReservering",this.personen);
                                this.$emit("setCurrentComponent");
                            }
                        } else{
                            return;
                        }
                        
                    } else {
                        this.checkIfBoxexAreEmpty();
                        return;
                    }
                    
                }
                
            }
        },
        checkIfBoxexAreEmpty(){
            for (let i = 0; i < this.personen.length; i++) {
                for (let j = 0; j < this.personen[i].length; j++) {
                    if(this.personen[i][j].data == ""){
                        this.personen[i][j].error ="Dit tekst vak mag niet leeg blijven.";      
                    }
                }
            }
        }
    }
}
</script>

<style>
#persoons-gegevens{
    margin-bottom: 1%;
}
#persoons-gegevens h2{
    margin-bottom: 2%;
}
#persoons-gegevens p{
    font-size: 15pt;
    font-weight: 600;
    border-bottom: 1px solid lightgray;
    margin-bottom: 2%;
}
#persoon div, #aantal-personen {
    display: grid;
    grid-template-columns: 1fr 10fr;
    margin-bottom: 2%;
    grid-gap: 1%;
    align-items: flex-end;
}
#persoon h2{
    border-bottom: 1px solid lightgray;
    margin: 2% 0;
}
#persoon div label , #aantal-personen label{
    font-weight: 600;
    text-align: left !important;
}
#persoon div input{
    margin-bottom: 1%;
    padding: 5px 7px;
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
#submit-container input{
    padding: 12px 3px;
    width: 40%;
    background-color: #05386B;
    border:none;
    cursor:pointer;
    color:white;
    float: right;
}
@media screen and (max-width:900px){
    #persoon div, #aantal-personen{
        grid-template-columns: 2fr 4fr;
    }
}

@media screen and (max-width:600px){

}
</style>
