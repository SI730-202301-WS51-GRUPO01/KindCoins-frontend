<template>
    <div class="class-full flex-column flex m-5">
      <div class="pt-5 pb-3 flex justify-content-center">
        <h3 class="font-bold">Paso 2 de 5</h3>
      </div>
      <div class="campaign-description pt-3 pb-3">
        <p class="pb-2">Descripción de la campaña</p>
        <pv-textarea class="w-full" type="text" placeholder="Ej. Dos tercios de la pobl..." v-model="campaign.description"></pv-textarea>
      </div>
      <div class="donation-types pb-3">
        <p class="pb-2">Seleccione los tipos de donaciones que desea recibir</p>
        <div class="card flex justify-content-center">
          <div class="flex flex-row">
            <div v-for="typeOfDonation in typeOfDonations" :key="typeOfDonation.id" class="flex align-items-center m-3">
              <pv-radio-button v-model="campaign.typeOfDonationId" :inputId="typeOfDonation.id" name="typeOfDonation" :value="typeOfDonation.id"></pv-radio-button>
              <label :for="typeOfDonation.id"> {{ typeOfDonation.typeDonation }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="donation-types pb-3">
        <p class="pb-2">Meta</p>
        <pv-input-number class="w-full" id="number-input" v-model="campaign.goal"></pv-input-number>
      </div>
      <div class="donation-duration flex flex-row pb-3">
        <div class="w-full">
          <p class="pb-2">Fecha de inicio de campaña</p>
          <pv-calendar v-model="startDate" dateFormat="dd/mm/yy"></pv-calendar>
        </div>
        <div class="w-full">
          <p class="pb-2">Fecha de fin de campaña</p>
          <pv-calendar v-model="endDate" dateFormat="dd/mm/yy"></pv-calendar>
        </div>
      </div>
      <div class="pb-3">
        <div class="flex justify-content-end">
          <router-link to="/main-content/donation-details">
            <pv-button  @click="saveCampaignData">Siguiente</pv-button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { TypeOfDonationService } from '@/services/TypeOfDonation.service.js';
  import { CampaignService } from '../../../services/Campaign.service';

  export default {
    name: 'CampaignDetails',
    props: {
    campaignDataProp: {  // Renombramos la propiedad
      type: Object,
      required: true,
    },
  },

    data() {
      return {
        campaign: {
          description: '',
          goal: '',
          typeOfDonationId: '',
          userId: '',
        },

        id: null,

        saveCampaign:{},
        typeOfDonations: [],

        typeOfDonationService : null,
        campaignService: null,

        prueba: {},

        startDate: null,
        endDate: null,
      };
    },
    created() {
        this.typeOfDonationService = new TypeOfDonationService();
        this.campaignService = new CampaignService();

        this.typeOfDonationService.getAllTypeOfDonations().then((response) => {
            this.typeOfDonations = response.data;
        }).catch((error) => {
            console.log(error);
        });

        //Recibe los datos de CampaignData
        const campaignData = this.$route.query.campaignData;
        if (campaignData) {
          this.campaignData = JSON.parse(campaignData);
        }
    },
    methods: {

      getStorableCampaignData(data){
        return{
          name: this.campaignData.name,
          slogan: this.campaignData.slogan,
          headerPhoto: this.campaignData.headerPhoto,
          aditionalPhoto: this.campaignData.aditionalPhoto,
          description: data.description,
          goal: data.goal,
          typeOfDonationId: data.typeOfDonationId,
          userId: 1,
        };
      },

      saveCampaignData() {
       this.saveCampaign = this.getStorableCampaignData(this.campaign); 

        this.prueba.name = this.saveCampaign.name;
        this.prueba.slogan = this.saveCampaign.slogan;
        this.prueba.headerPhoto = this.saveCampaign.headerPhoto;
        this.prueba.aditionalPhoto = this.saveCampaign.aditionalPhoto;
        this.prueba.description = this.saveCampaign.description;
        this.prueba.goal = this.saveCampaign.goal;
        this.prueba.typeOfDonationId = this.saveCampaign.typeOfDonationId;
        this.prueba.userId = this.saveCampaign.userId;
        console.log(this.prueba);

        this.campaignService.createCampaign(this.prueba).then((response) => {
          console.log(response);

          localStorage.setItem('campaignId', JSON.stringify(response.data.id));

        }).catch((error) => {
          console.log(error);
        });
      },

    },
  };
  </script>
  
  <style>
  </style>
  