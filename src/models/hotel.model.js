export default class Hotel{
    static fromJSON(params){
        const newHotel = new Hotel();
        // things you want to save in newHotel 
        newHotel.land = params.land;
        newHotel.werelddeel = params.werelddeel;
        newHotel.stad = params.stad;
        newHotel.hotels = params.hotels;
        return newHotel;
    }
}