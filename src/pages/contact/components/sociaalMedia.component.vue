<template>
    <div id="icon-container">
        <h2>Andere contact mogelijkheden</h2>
        <ul>
            <li v-for="(icon, i) in icons" :key="i"><a :href="icon.link" target="_blank"><img :src="icon.img" alt="icon"></a><span>{{icon.naam}}</span></li>
        </ul>
    </div>
</template>

<script>

export default {
    name:'img-container',
    data:()=>{
        return{
            icons:[
                {naam:"Messenger", img:require("@/assets/icon/messenger.png"), link:"https://www.messenger.com/"},
                {naam:"Bellen", img:require("@/assets/icon/bellen.png"),link:"tel:0612345678"},
                {naam:"Twitter", img:require("@/assets/icon/twitter.png"),link:"https://twitter.com/?lang=nl"},
                {naam:"Mail", img:require("@/assets/icon/mail.png"),link:"http://outlook.office.com/"},
                {naam:"Chat", img:require("@/assets/icon/chat.png"),link:"https://nl.pinterest.com"},
                {naam:"App", img:require("@/assets/icon/whatsapp.png"),link:"https://www.whatsapp.com/"}



            ]
        }
    }
}
</script>

<style>
#icon-container ul{
    list-style-type: none;
    padding-left: 0;
}
#icon-container ul li{
    padding: 1%;
    float: left;
    text-align: center;
}
#icon-container ul li a img{
    width: 30px;
    margin: auto;
    display: block;
}
#icon-container ul li span{
    font-size: 75%;
}
</style>
