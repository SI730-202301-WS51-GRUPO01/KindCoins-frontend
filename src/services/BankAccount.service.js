import http from 'axios';

export class BankAccountService{

    createBankAccount(data){
        return http.post('https://localhost:44396/api/v1/bankaccounts', data);
    }


}