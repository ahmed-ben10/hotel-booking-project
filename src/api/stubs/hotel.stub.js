const hotelStub = {
    get: (url, data) => {
        const stub ={
            data:[
                { land:'Nederland', werelddeel:'Europa', stad:'Den Haag', 
                    hotels:[
                        { naam:'Babylon Hotel', img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hampshire_Hotel_-_Babylon_Den_Haag.jpg/1024px-Hampshire_Hotel_-_Babylon_Den_Haag.jpg", wifi:true, restaurant:true, fitness:true, 'naast-het-station':true, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Babylon Hotel', img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hampshire_Hotel_-_Babylon_Den_Haag.jpg/1024px-Hampshire_Hotel_-_Babylon_Den_Haag.jpg", wifi:true, restaurant:true, fitness:true, 'naast-het-station':true, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                },
                { land:'Nederland', werelddeel:'Europa', stad:'Amsterdam', 
                    hotels:[
                        { naam:'Babylon Hotel', img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hampshire_Hotel_-_Babylon_Den_Haag.jpg/1024px-Hampshire_Hotel_-_Babylon_Den_Haag.jpg", wifi:true, restaurant:true, fitness:true, 'naast-het-station':true, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Babylon Hotel', img:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Hampshire_Hotel_-_Babylon_Den_Haag.jpg/1024px-Hampshire_Hotel_-_Babylon_Den_Haag.jpg", wifi:true, restaurant:true, fitness:true, 'naast-het-station':true, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                }
            ]
        };
        return Promise.resolve(stub);
    }
};

export default hotelStub;