const hotelStub = {
    get: (url, data) => {
        const stub ={
            data:[
                {land:'Nederland', werelddeel:'Europa', stad:'Den Haag', hotels:[{naam:'Babylon Hotel', wifi:true, restaurant:true, fitness:true, 'naast-het-station':true}]}
            ]
        };
        return Promise.resolve(stub);
    }
};

export default hotelStub;