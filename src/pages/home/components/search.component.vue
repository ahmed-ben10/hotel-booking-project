<template>
    <div id="search-wrapper">
        <h2 id="titel">Steden</h2>
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
                const stad =hotel.stad.toLowerCase().replace("ë","e");
                const land =hotel.land.toLowerCase().replace("ë","e");
                const werelddeel =hotel.werelddeel.toLowerCase().replace("ë","e");   
                const text =this.searchText.toLowerCase().trim();

                return stad.includes(text) || land.includes(text) ||werelddeel.includes(text);
            })
            if(this.searchText.length){
                this.$store.commit("changePage","Zoekresultaten: "+this.searchText);
            } else{
                this.$store.commit("changePage","Uitgelichte hotels");
            }
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
    grid-row: 1/2;
    grid-column: 1/2;
    height: 100%;
    padding: 1%;
}
#titel{
    display: none;
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

/*Mobiel design*/
@media screen and (max-width: 600px){
    #search-wrapper{
       padding: 0;
       margin-bottom: 20%;
    }
    #titel{
       background-color: #379683;
       font-size: 4vw;
       display: block;
       font-weight: bold;
       text-transform: uppercase;
       padding: 2%;
       margin-bottom: 4% !important;
       color: white;
       text-decoration: underline;
   }
   #input-container{
       display:block;
       margin-bottom: 10%;
   }
   #input-container img{
        display: none;
    }
    #input-container input{
        width: 90%;
        margin-left: 5%;
        border-radius: 20px;
        border: 1px solid #909090;    
    }
    #search-items{
        border: none;
    }
    #search-items ul {
       display: grid;
       grid-template-columns: repeat(2, 1fr);
    }
    #search-items ul li{
       border: none;
       color: #05386B;
       text-align: left;
       padding-left:  10%;
    }
    #search-items ul li p{
        font-weight: bold;
    }
    #search-items ul li span{
        font-size: 100%;
    }
    
}
</style>
