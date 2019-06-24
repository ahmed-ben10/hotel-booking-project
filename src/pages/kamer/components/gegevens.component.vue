<template>
    <div id="reservering-gegevens">
        <div id="titel">
            <p>Uw reserveringsgegevens</p>
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
                    <p>&euro; {{bijkomendeKosten.toFixed()}}</p>
                    <p>Toeristen belasting &euro; {{4.45}} per persoon per nacht:</p>
                    <p>&euro; {{toeristenBelasting.toFixed()}}</p>
                </div>
                <div id="kamer-service-container">
                    <p>Servicekosten:</p>
                    <p>&euro; {{servicekosten.toFixed()}}</p>
                </div>
                <div id="totaal">
                    <p>Totaal:</p>
                    <p>&euro; {{totaal}}<span>per persoon per nacht</span></p>
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
    computed:{
        totaal:function(){
            var totaal = this.kamer.prijs + this.bijkomendeKosten + this.toeristenBelasting + this.servicekosten ;
            return totaal.toFixed();
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
#image-container img{
    width: 100%;
    height: 200px;
    object-fit: cover;
}
#titel-onder-img  p{
    font-weight: 600;
    padding: 2% 0;
}
#grid-container div{
    font-size: 85%;
    display: grid;
    grid-template-columns: 2fr 1fr;
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
</style>
