<template>
    <div id="contact-gegevens">
        <h2 id="titel">Contact-gegevens</h2>
       <div id="contact-info-wrapper">
            <div id="contact-info-container">
                 <div id="adres-container">
                    <h2>Adres</h2>
                    <ul>
                        <li>Hotel Booking BV.</li>
                        <li>Amsterdamse veerkade 20</li>
                        <li>2516 OG Den Haag</li>
                        <li>(070)- 9111120</li>
                    </ul>
                    <p>U kunt gerust bellen!</p>
                </div>
                <div id="google-maps-container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.2418351650736!2d4.314373515692643!3d52.0753273768402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b723d5ad4b2b%3A0x70cc49713c96cc74!2sAmsterdamse+Veerkade%2C+2512+AJ+Den+Haag!5e0!3m2!1snl!2snl!4v1561143966460!5m2!1snl!2snl" width="100%" height="200px" frameborder="0" style="border:0" allowfullscreen></iframe>            </div>
            </div>
       </div>
    </div>
</template>

<script>
export default {
    name:'contactGegevens'
}
</script>

<style>
#contact-gegevens h2{
    margin-bottom: 2%
}
#contact-gegevens div{
    margin-bottom: 2%;
}
#adres-container ul{
    padding-left: 0;
    list-style-type: none;
}
#adres-container ul{
    margin-bottom: 5%;
}
#adres-container p{
    margin-bottom: 5%;
}

/*Mobiel design*/
@media screen and (max-width: 600px) {
   #titel{
       background-color: #379683;
       font-size: 4.5vw;
       padding: 2%;
       font-weight: lighter;
       color: white;
       text-decoration: underline;
   } 
   #adres-container{
       padding: 5%;
   }
    #adres-container h2{
        font-weight: bolder;
        margin-bottom: 0;
       font-size: 4vw;
   }
   #contact-info-container{
       display: grid;
       grid-gap: 2%;
       grid-template-columns: 2fr 1fr;
   }

   #adres-container ul, #adres-container p{
       font-size: 3.5vw;
   }
   #google-maps-container{
       padding-right: 4%;
   }
}
</style>