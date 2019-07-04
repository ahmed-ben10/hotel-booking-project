<template>
    <ul id="voorzieningen" >
        <li v-for="(voorziening,index) in hotel.voorzieningen" :key="index"><img :src="voorziening.img" alt="">{{voorziening.naam}}</li>
    </ul>
</template>

<script>
export default {
    name: 'voorzieningen',
    props:{
        hotel:{
            type: Object
        }
    }
}
</script>

<style>
#voorzieningen{
    list-style-type: none;
    grid-column: 2/3;
    grid-row: 2/3;
    padding-left: 0;
}
#voorzieningen img{
    width: 20px;
}
</style>
