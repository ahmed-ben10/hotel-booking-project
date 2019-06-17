<template>
    <div id="persoons-gegevens">
        <h2>Persoonlijke gegevens</h2>
        <div id="aantal-personen">
            <label for="">Aantal pers.</label>
            <select  v-model="aantal" @click="setAantal(aantal)" aria-placeholder="">
                <option v-for="(kamer,index) in kamer.maxPersonen" :key="index">{{kamer.toFixed(0)}}</option>
            </select>
        </div>
        <form>
            <div id="persoon" v-for="(aPersoon, i) in personen" :key="i">
                <p>Persoon {{(i+1)}}</p>
                <div id="voornaam-container">
                    <label for="voornaam">Voornaam: </label>
                <input type="text" v-model="aPersoon.naam" placeholder="John" >
                </div>
                <div id="achternaam-container">
                    <label for="achternaam">Achternaam: </label>
                    <input type="text" v-model="aPersoon.achternaam" placeholder="Doe">
                </div>
                <div id="mobiel-container">
                    <label for="mobiel">Mobiel: </label>
                    <input type="text" v-model="aPersoon.mobiel" placeholder="06-12345678">
                </div>
                <div id="email-container">
                    <label for="email">Email: </label>
                    <input type="email" v-model="aPersoon.email" placeholder="john.doe@hotmail.com">
                </div>
            </div>
            <div id="submit-container">
                <input type="submit" value="Reserveer" >
            </div>
        </form>
    </div>
</template>

<script>
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
            personen: [
                {
                    naam:"",
                    achternaam:"", 
                    mobiel:"",
                    email:""
                }
            ]
        }
    },
    methods:{
        setAantal(aantal){
            this.aantal = parseInt(aantal);
            this.personen = [];
            for (let i = 0; i < this.aantal; i++) {
                this.personen.push({
                    naam:"",
                    achternaam:"", 
                    mobiel:"",
                    email:""
            });
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
    grid-template-columns: 1fr 4fr;
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
    text-align: right;
}
#persoon div input{
    margin-bottom: 1%;
    padding: 5px 7px;
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
</style>
