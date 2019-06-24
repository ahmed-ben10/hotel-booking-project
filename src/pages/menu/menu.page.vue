<template>
    <div class="menu-container">
        <div id="search-container">
            <input type="text" placeholder="Zoeken">
        </div>
        <div id="menu-items">
            <router-link to="/">Home </router-link> 
            <router-link to="/mijn-Gereserveerde-Kamers">Mijn gereserveerde kamers </router-link> 
            <router-link to="/contact">Contact </router-link>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.commit("changePage","Menu");
    }
}
</script>

<style>
.menu-container{
    width: 80%;
    margin-left: 10%;
}
#search-container input{
    margin: auto;
    width: 80%;
    font-size: 100%;
    border-radius: 20px;
    padding: 0.5rem 10%;
    outline: none; 
    margin: 10% 0;
}
#menu-items a{
    text-decoration: none;
    display: block;
    padding: 2%;
    color: #05386B;
    font-weight: bold;
}
</style>
