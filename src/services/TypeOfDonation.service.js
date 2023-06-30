import http from 'axios';

export class TypeOfDonationService{

    getAllTypeOfDonations(){
        return http.get('https://localhost:44396/api/v1/typeofdonations');
    }
}