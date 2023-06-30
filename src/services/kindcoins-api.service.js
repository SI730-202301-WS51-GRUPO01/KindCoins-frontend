import http from '../core/services/http-common';

export class KindCoinsService{
    //USERS
    getAllUsers(){
        return http.get('/users');
    }
    getUserById(id){
        return http.get(`/users/${id}`);
    }
    createUser(data){
        return http.post('/users', data);
    }
    deleteUser(id){
        return http.get(`/users/${id}`);
    }
    updateUser(id){
        return http.get(`/users/${id}`);
    }
    //
    getAllCards(){
        return http.get('/cards-info');
    }
    getImages(){
        return http.get('/galleria');
    }
}