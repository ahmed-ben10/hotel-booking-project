<template>
  <div id="app">
    <div id="nav">
      <header>
        <router-link to="/"><img src="@/assets/icon/menu.png" alt="" srcset=""></router-link>
        <img src="favicon.ico" alt="" srcset="">
        <p>Hotel-Booking.nl</p>
      </header> 
      <div id="nav-container">
        <router-link to="/">Home  <span> | </span></router-link> 
        <router-link to="/mijn-Gereserveerde-Kamers">Mijn gereserveerde kamers <span class="sluisteken"> |</span></router-link> |
        <router-link to="/contact">Contact </router-link>
      </div>
    </div>
    <div id="page-name">
      <p>{{$store.state.currentPage}}</p>
    </div>
    <router-view id="router-view"/>
    <footer>
      <p>&copy; Copyright 2019 ROC MONDRIAAN - APPLICATIEONTWIKKELAAR</p>      
      <p>&copy; Copyright 2019 ROC MONDRIAAN</p>
    </footer>
  </div>
</template>

<style>
*{
  margin: 0;
}
body{
  background-color: #EDF5E1;
  color: #05386B;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  background-color: #05386B; 
  padding: 20px;
  text-align: right;
  display: grid;
  grid-template-columns: 50% 50%;
}

#nav a {
  font-weight: 100;
  text-decoration: none;
  color: #EDF5E1 ;
  font-size: 15pt;
}
#nav header{
  text-align: left;
  font-size: 30pt;
  color: #EDF5E1;
}
#nav header img{
  display: none;
}
.sluisteken{
  color: #EDF5E1 ;
}
#nav-container{
  padding-top: 2%;
}
#nav a.router-link-exact-active {
  color: #379683  ;
}
#page-name{
  width: 98%;
  background-color: #379683 ;
  color: #EDF5E1;
  font-size: 15pt; 
  padding: 1%;
}
#router-view{
    padding:1%;
}
footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px;
  background-color: #379683;
  color: #EDF5E1 ;
  text-align: center;
}

footer p:nth-child(even){
  display: none;
}

/*Mobiel design */
@media screen and (max-width: 600px) {
  #router-view{
    padding: 0;
}
  #nav{
    display: block;
  }
  #nav-container{
    display: none;
  }
  #nav header{
    font-size: 4vw;
  }
  #nav header img:first-child{
    display: block;
    float: right;
    width: 4.5vw;
  }
  #nav header img{
    display: block;
    padding-right: 3%;
    float: left;
    width: 4.5vw;
  }
  #nav header p{
    font-size: 4.5vw;
  }
  #page-name{
    padding-left: 5%;
    width: 94%;
    font-size: 4vw;
    font-weight: bold;
    text-decoration: underline;
    text-transform: uppercase;
 }
 footer p:first-child{
   display: none;
 }
 footer{
    background-color: #05386B;
 }
 footer p:nth-child(even){
   display: block;
   font-size: 4vw;
 }
}


</style>
