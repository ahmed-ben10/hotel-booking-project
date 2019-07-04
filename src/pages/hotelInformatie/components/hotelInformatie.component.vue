<template>
    <div id="informatie-wrapper">
        <div id="top-informatie">
            <div id="image-container">
                <img :src="hotel.img" alt="hotel image">
            </div>
            <div id="beschrijving">
                <h2>Beschrijving</h2>
                <p v-for="(beschrijving,index) in hotel.beschrijving" :key="index">{{beschrijving}}</p>
            </div>
            <div id="info-voorzieningen">
                <h2>Populaire voorzieningen</h2>
                <voorzieningen :hotel="hotel" />
            </div>
        </div>
    </div>
</template>

<script>
import voorzieningen from '@/components/voorzieningen.component.vue';
export default {
    name:"hotel-informatie",
    props:{
        hotel:{
            type: Object,
            required: true
        }
    },
    components:{
        voorzieningen
    },

}
</script>

<style>
#top-informatie{
    display: grid;
    grid-template-columns:  60% 40%;
    grid-gap: 1%;
}
#image-container img{
    width:100%;
}
#info-voorzieningen h2{
    border-bottom: 1px solid lightgray;
}
#info-voorzieningen ul{
    padding-top: 1%;
    list-style-type: none;
    padding-left: 0;
    font-weight: 600;
}
#info-voorzieningen ul li img{
    width: 20px;
    padding-right: 5px;
}
#beschrijving{
    grid-column: 1/3;
    grid-row: 2/2;
}
#beschrijving h2{
    border-bottom: 1px solid lightgray;
    margin-bottom: 1%;
}
#beschrijving p{
    margin-bottom: 1%;
}

/*Mobiel design*/
@media screen and (max-width: 600px){
    #top-informatie{
        display: block;
    }
    #top-informatie div{
        margin-bottom: 5%;
    }
    #image-container{
        margin-top: 2%;
    }
    #info-voorzieningen h2, #beschrijving h2{
        padding-left: 2%;
        border-bottom: 1px solid #379683;
        margin-bottom: 3%;
    }
    #info-voorzieningen ul, #beschrijving p{
        padding: 0 3%;
    }
}
</style>
