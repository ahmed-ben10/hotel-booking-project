<template>
    <div id="vragen-container">
        <h2>Meeste gestelde vragen</h2>
        <div id="betalen-container">
            <h4>Hoe moet ik betalen?</h4>
            <p>Wij zijn op dit moment druk bezig, met een online betalingssysteem, maar geeen zorgen! Bij ons staat jou kamer reservering vast als je jouw reservering bevestigd en teurg te zien is in 'mijn gereserveerde kamers'. Betalen doe je pas na je verblijf in de desbetreffende hotel.</p>
        </div>
        <div id="extra-kosten">
            <h4>Komen er extra kosten bij?</h4>
            <p>Naast de kamer prijs hanteren de meeste hotels toeristenbelasting. De hoogte van de toeristenbelasting verschilt per hotel. Hotels mogen zelf bepalen of zij toeristenbelasting heffen en hoe zij het tarief berekenen. Bijvoorbeeld een vast bedrag per verblijf of een percentage per overnachtingprijs. Elke gemeente kan de hoogte regelen in een eigen verordening. De verordening kunt u opvragen of inzien bij de desbetreffende hotel.</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'vragen',
}
</script>

<style>
#vragen-container h2{
    margin-bottom: 5%
}
#vragen-container div{
    margin-bottom: 2%;
    text-align: left;
}

@media screen and (max-width: 600px) {
    #vragen-container{
        padding: 5%;
        width: 90% !important;
    }
    #vragen-container h2{
        font-size: 4.5vw;
        margin: 2% 0;
    }
    #vragen-container div h3{
        font-size: 4vw;
    }
    #vragen-container div p{
        font-size: 3.5vw;
    }
}
</style>
