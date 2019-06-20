<template>
    <div id="contact-container">
        <h2>Contact</h2>
    </div>
</template>

<script>
export default {
    metaInfo: {
      title: "Contact",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // al deze elementen dragen bij de vindbaarheid van de website, omdat ze met informatie, sociaal media en contact te maken hebben.
        { keywords: 'hotel, booking, nederland, over, maps, sociaal media,  info, gegevens, over, contact'}
      ]
    },
    created(){
        this.$store.commit("changePage","Contact");
    }
}
</script>

<style>

</style>
