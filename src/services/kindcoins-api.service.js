import http from '../core/services/http-common';

export class KindCoinsService{
    gettAllUsers(){
        return http.get('/users');
    }
    getUserById(id){
        return http.get(`/users/${id}`)
    }
    createUser(data){
        return http.post('/users', data);
    }
}