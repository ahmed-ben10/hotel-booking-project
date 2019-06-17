<template>
    <div id="persoons-gegevens">
        <h2>Persoonlijke gegevens</h2>
        <div id="aantal-personen">
            <label for="">Aantal personen</label>
            <select  v-model="aantal" @click="setAantal(aantal)" aria-placeholder="">
                <option v-for="(kamer,index) in kamer.maxPersonen" :key="index">{{kamer.toFixed(0)}}</option>
            </select>
        </div>
        <form>
            <div id="personen" v-for="index in aantal" :key="index">
                <h2>Persoon {{index}}</h2>
                <div id="voornaam-container">
                    <label for="voornaam">Voornaam: </label>
                    <input type="text" placeholder="John">
                </div>
                <div id="achternaam-container">
                    <label for="achternaam">Achternaam: </label>
                    <input type="text" placeholder="Doe">
                </div>
                <div id="mobiel-container">
                    <label for="mobiel">Mobiel: </label>
                    <input type="text" placeholder="06-12345678">
                </div>
                <div id="email-container">
                    <label for="email">Email: </label>
                    <input type="email" placeholder="john.doe@hotmail.com">
                </div>
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
            personen:[]
        }
    },
    methods:{
        setAantal(aantal){
            this.aantal = parseInt(aantal);
        }
    }
}
</script>

<style>

</style>
