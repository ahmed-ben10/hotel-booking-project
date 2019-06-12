import HotelSection from './sections/hotel.section';
import hotelStub from './stubs/hotel.stub';
export default class Api {
    static Hotel = new HotelSection(hotelStub);
}