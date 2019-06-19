<template>
    <div id="search-wrapper">
        <div id="input-container">
            <input type="search" v-model="searchText" placeholder="Zoek een stad..." @keyup="search">
            <img src="https://image.flaticon.com/icons/png/512/55/55369.png" @click="search"/>
        </div>
        <div id="search-items">
            <ul v-if="!searchText.length">
                <li v-for="(hotel,index) in hotels" :key="index" @click="showItem(hotel)">
                    <p>{{hotel.stad}}</p>
                    <span>{{hotel.land}}, {{hotel.werelddeel}}</span>
                </li>
            </ul>
            <ul v-else>
                <li v-for="(hotel,index) in searchList" :key="index" @click="showItem(hotel)">
                    <p>{{hotel.stad}}</p>
                    <span>{{hotel.land}} {{hotel.werelddeel}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"search",
    props:{
        hotels:{
            type:null,
            required: true
        }
    },
    data: () =>{
        return{
            searchText:"",
            searchList:[]
        }
    },
    methods:{
        search(){
            this.searchList = this.hotels.filter(hotel =>{
                const stad =hotel.stad.toLowerCase();
                const land =hotel.land.toLowerCase();
                const werelddeel =hotel.werelddeel.toLowerCase();   
                const text =this.searchText.toLowerCase().trim();
                if(stad.includes(text) || land.includes(text) ||werelddeel.includes(text)){
                    return true;
                } 
            })
            this.$store.commit("changePage","Zoekresultaten: "+this.searchText);
        },
        showItem(hotel){
            this.searchText = "";
            this.$emit("searchedItems",hotel);
        }
    }
}
</script>

<style scoped>
#search-wrapper{
    height: 100%;
    padding: 1%;
}
#input-container{
    display:grid;
    grid-template-columns: 89% 10%;
    margin-bottom: 1%;

}
#input-container input{
    border-radius: 5px;
    padding: 0.5rem 10%;
    outline: none; 
}
::-webkit-input-placeholder {
   text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;  
}

:-ms-input-placeholder {  
   text-align: center; 
}
#input-container img{
    height: 60%;
    margin-left: 1%;
}
#search-items{
    border: 1px solid gray;
    height: 93%;
    object-fit: contain
}
#search-items ul {
    padding-left: 0;
}
#search-items ul li{
    padding: 5%;
    text-align: center;
    list-style-type: none;
    border-bottom: 1px solid lightgray;
}
#search-items ul li span{
    font-size: 60%;
}


</style>
