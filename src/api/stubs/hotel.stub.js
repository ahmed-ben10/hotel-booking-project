const hotelStub = {
    get: (url, data) => {
        const stub ={
            data:[
                { land:'Nederland', werelddeel:'Europa', stad:'Den Haag', 
                    hotels:[
                        { naam:'Babylon Hotel', img:require('@/assets/hotel_img/Babylon.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, beschrijving:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde exercitationem, laboriosam ab sint animi harum ratione fugit aperiam autem, qui fuga voluptatum? Numquam enim, ex at odit quos tempora?", 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Van der Valk', img:require('@/assets/hotel_img/van_der_valk.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                },
                { land:'Nederland', werelddeel:'Europa', stad:'Amsterdam', 
                    hotels:[
                        { naam:'Babylon Hotel', img:require('@/assets/hotel_img/Babylon.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, beschrijving:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde exercitationem, laboriosam ab sint animi harum ratione fugit aperiam autem, qui fuga voluptatum? Numquam enim, ex at odit quos tempora?", 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Van der Valk', img:require('@/assets/hotel_img/van_der_valk.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                },
                { land:'Nederland', werelddeel:'Europa', stad:'Rotterdam', 
                    hotels:[
                        { naam:'Babylon Hotel', img:require('@/assets/hotel_img/Babylon.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, beschrijving:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde exercitationem, laboriosam ab sint animi harum ratione fugit aperiam autem, qui fuga voluptatum? Numquam enim, ex at odit quos tempora?", 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Van der Valk', img:require('@/assets/hotel_img/van_der_valk.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                },
                { land:'Verenigde Arabische Emiraten', werelddeel:'Azië', stad:'Dubai', 
                    hotels:[
                        { naam:'Babylon Hotel', img:require('@/assets/hotel_img/Babylon.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, beschrijving:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde exercitationem, laboriosam ab sint animi harum ratione fugit aperiam autem, qui fuga voluptatum? Numquam enim, ex at odit quos tempora?", 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Van der Valk', img:require('@/assets/hotel_img/van_der_valk.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                },
                { land:'Italië', werelddeel:'Europa', stad:'Turijn', 
                    hotels:[
                        { naam:'Babylon Hotel', img:require('@/assets/hotel_img/Babylon.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, beschrijving:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde exercitationem, laboriosam ab sint animi harum ratione fugit aperiam autem, qui fuga voluptatum? Numquam enim, ex at odit quos tempora?", 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Van der Valk', img:require('@/assets/hotel_img/van_der_valk.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                },
                { land:'Indonesië', werelddeel:'Azië', stad:'Denpasar', 
                    hotels:[
                        { naam:'Babylon Hotel', img:require('@/assets/hotel_img/Babylon.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, beschrijving:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde exercitationem, laboriosam ab sint animi harum ratione fugit aperiam autem, qui fuga voluptatum? Numquam enim, ex at odit quos tempora?", 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Van der Valk', img:require('@/assets/hotel_img/van_der_valk.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                },
                { land:'Verenigd Koninkrijk', werelddeel:'Europa', stad:'London', 
                    hotels:[
                        { naam:'Babylon Hotel', img:require('@/assets/hotel_img/Babylon.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, beschrijving:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde exercitationem, laboriosam ab sint animi harum ratione fugit aperiam autem, qui fuga voluptatum? Numquam enim, ex at odit quos tempora?", 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Van der Valk', img:require('@/assets/hotel_img/van_der_valk.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                },
                { land:'Italië', werelddeel:'Europa', stad:'Rome', 
                    hotels:[
                        { naam:'Babylon Hotel', img:require('@/assets/hotel_img/Babylon.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, beschrijving:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde exercitationem, laboriosam ab sint animi harum ratione fugit aperiam autem, qui fuga voluptatum? Numquam enim, ex at odit quos tempora?", 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Van der Valk', img:require('@/assets/hotel_img/van_der_valk.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        }                    
                    ]
                },
                { land:'Verenigde Staten', werelddeel:'Amerika', stad:'New York', 
                    hotels:[
                        { naam:'Babylon Hotel', img:require('@/assets/hotel_img/Babylon.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, beschrijving:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet unde exercitationem, laboriosam ab sint animi harum ratione fugit aperiam autem, qui fuga voluptatum? Numquam enim, ex at odit quos tempora?", 
                            kamers:[{soortKamer:"Standaard kamer", img:"https://media-cdn.tripadvisor.com/media/photo-s/0f/4c/00/80/2-eenpersoonsbedden-naast.jpg", soortBed:"2 eenpersoonsbedden", maxPersonen:2, prijs:173.40},{soortKamer:"Superior tweepersoonskamer", img:"https://www.florishotelkarosbrugge.be/upload/images/double-room/superior-double-twin-room-2.jpg", soortBed:"1 tweepersoonsbed", maxPersonen:2, prijs:201.60}] 
                        },
                        { naam:'Van der Valk', img:require('@/assets/hotel_img/van_der_valk.png'), voorzieningen:[{naam:"Wifi", img:require('@/assets/voorzieningen/wifi.png')}, {naam:"Restaurant", img:require('@/assets/voorzieningen/restaurant.png')}, {naam:"Fitness", img:require('@/assets/voorzieningen/fitness.png')}, {naam:"Zwembad", img:require('@/assets/voorzieningen/zwembad.png')}, {naam:"Naast het Station", img:require('@/assets/voorzieningen/station.png')}],prijs:101, 
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