<template>
  <div id="app">
    <div id="nav">
      <header>
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
.sluisteken{
  color: #EDF5E1 ;
}
#nav-container{
  padding-top: 2%;
}
#nav a.router-link-exact-active {
  color: #379683 ;
}
#page-name{
  width: 98%;
  background-color: #42b983;
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
</style>
