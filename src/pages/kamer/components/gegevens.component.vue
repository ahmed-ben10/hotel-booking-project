<template>
    <div id="reservering-gegevens">
        <div id="titel">
            <p>Uw reserveringsgegevens</p>
            <p>{{specificHotel.naam}} - ({{hotel.stad}}), {{hotel.land}}</p>
        </div>
        <div id="image-container">
            <img :src="kamer.img" alt="kamer foto">
        </div>
        <div id="info-container">
            <div id="titel-onder-img">
                <p>{{specificHotel.naam}} - {{hotel.stad}}, {{hotel.land}}</p>
            </div>
            <div id="grid-container">
                <div id="kamer-info-container">
                    <p>{{kamer.soortKamer}}</p>
                    <p>&euro; {{kamer.prijs.toFixed(2)}}</p>
                    <p>{{kamer.soortBed}}</p>
                    <p></p>
                    <p>max {{kamer.maxPersonen}} personen</p>
                </div>
                <div id="kamer-prijs-container">
                    <p>Bijkomende kosten:</p>
                    <p>&euro; {{bijkomendeKosten.toFixed(2)}}</p>
                    <p>Toeristen belasting &euro; {{4.45}} per persoon per nacht:</p>
                    <p>&euro; {{toeristenBelasting.toFixed(2)}}</p>
                </div>
                <div id="kamer-service-container">
                    <p>Servicekosten:</p> 
                    <p>&euro; {{servicekosten.toFixed(2)}}</p>
                </div>
                <div id="totaal">
                    <p>Totaal:</p>
                    <p>&euro; {{totaal}}<span>per persoon per nacht</span></p>
                </div>
                <div id="submit-mobiel-container">
                    <input type="submit" value="Reserveer" @click="setBevesting">
                </div>
            </div>
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
    },
    data: () =>{
        return{
            bijkomendeKosten:18.9,
            toeristenBelasting: 4.5,
            servicekosten: 10

        }
    },
    methods:{
        setBevesting(){
            var bevestig = true;
            this.$emit("setNewBevesting", bevestig);
            console.log("123")
        }
    },
    computed:{
        totaal:function(){
            var totaal = this.kamer.prijs + this.bijkomendeKosten + this.toeristenBelasting + this.servicekosten ;
            return totaal.toFixed(2);
        }
    }
}
</script>

<style>
#titel p{
    padding: 2% 0;
    font-size: 15pt;
    font-weight: 600;
}
#titel p:nth-child(2){
    display: none;
}
#image-container img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
#titel-onder-img p{
    font-weight: 600;
    padding: 2% 0;
}
#grid-container div{
    font-size: 85%;
    display: grid;
    grid-template-columns: 2fr 2fr;
    margin-bottom: 5%;
    align-items: flex-end;
}
#grid-container div p:nth-child(even){
    text-align: right;
}
#totaal p{
    font-size: 20pt;
}
#totaal p span{
    display:block;
    font-size: 40%;
}
#totaal p:first-child{
    padding: 3%;
}
#submit-mobiel-container{
    display: none !important;
}
@media screen and (max-width:600px){
    #info-container{
        padding: 2%;
    }
    #titel p:first-child, #titel-onder-img p{
        display: none;
    }
    #titel p:nth-child(2){
        display: block;
        font-weight: normal;
        font-size: 4vw;
        color: #05386B;
        padding: 3%;
    }
    #grid-container div  p:nth-child(even){
        grid-column: 3/3;
    }
    #reservering-gegevens #titel, #reservering-gegevens #image-container{
        display: none;
    }
    #totaal p,#totaal p span{
        font-size: 5vw;
    }
    #submit-mobiel-container{
        display: block !important;
    }
    #submit-mobiel-container input{
        width: 20%;
        background-color: #05386B;
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);
        border:none;
        cursor:pointer;
        color:white;
        float: right;
    }
}
</style>
