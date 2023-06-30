import http from 'axios';

export class CampaignService{

    getAllCampaigns(){
        return http.get('https://localhost:44396/api/v1/campaigns');
    }

    getCampaignById(id){
        return http.get(`https://localhost:44396/api/v1/campaigns/${id}`)
    }

    createCampaign(data){
        return http.post('https://localhost:44396/api/v1/campaigns', data);
    }

    updateCampaign(id, data){
        return http.put(`https://localhost:44396/api/v1/campaigns/${id}`, data);
    }

    deleteCampaign(id){
        return http.delete(`https://localhost:44396/api/v1/campaigns/${id}`);
    }
}
