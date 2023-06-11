import http from '../core/services/http-common';

export class KindCoinsService{
    getAllUsers(){
        return http.get('/users');
    }
    getUserById(id){
        return http.get(`/users/${id}`)
    }
    createUser(data){
        return http.post('/users', data);
    }
    getAllCards(){
        return http.get('/cards-info');
    }
    getImages(){
        return http.get('/galleria');
    }
}