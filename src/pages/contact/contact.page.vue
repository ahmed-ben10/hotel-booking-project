<template>
    <div class="contact-wrapper">
        <vragen />
        <contactGegevens />
        <sociaalMedia />
    </div>
</template>

<script>
import sociaalMedia from './components/sociaalMedia.component';
import contactGegevens from './components/contactGegevens.component.vue';
import vragen from './components/vragen.component.vue';

export default {
  components:{
    vragen,
    sociaalMedia,
    contactGegevens
  },
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
.contact-wrapper{
  width: 80%;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  grid-gap: 2%;
  margin-bottom: 5%;
  margin: auto;
}
#vragen-container{
  width: 100%;
}
#contact-gegevens{
  width: 100%;
}
#icon-container{
  width: 100%;
}

/*Mobiel design */
@media screen and (max-width: 600px) {
 .contact-wrapper{
    display:block !important;
    width: 100%;
 }
}
</style>
