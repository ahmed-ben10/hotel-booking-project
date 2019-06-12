import Hotel from '../../models/hotel.model';

export default class HotelSection {
    http = null;

    constructor(http){
        this.http = http;
    }

    fetchAll(){
        return this.http.get('hotel').then( response => response.data.map( data => Hotel.fromJSON(data)));
    }
}