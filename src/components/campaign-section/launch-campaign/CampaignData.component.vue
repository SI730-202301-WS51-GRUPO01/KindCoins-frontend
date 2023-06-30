<template>
    <div class="class-full flex-column flex m-5">
        <div class="pt-5 pb-3 flex justify-content-center">
            <h3 class="font-bold">Paso 1 de 5</h3>
        </div>
        <div class="campaign-name pt-3 pb-3">
            <p class="pb-2">Nombre de campaña</p>
            <pv-input-text class="w-full" type="text" placeholder="Ej. Alimenta familias en Palestina" v-model="campaign.name"/>
        </div>
        <div class="campaign-name pb-3">
            <p class="pb-2">Eslogan</p>
            <pv-textarea  class="w-full" type="text" placeholder="Ej. Las comidas compartidas proporcionarán ..." v-model="campaign.slogan"/>
        </div>
        <div class="campaign-name pb-3">
            <p class="pb-2">Banner</p>
            <div class="card">
                <pv-input-text class="w-full" type="text" placeholder="Enlace" v-model="campaign.banner"/>
                <!-- <pv-file-upload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" /> -->
            </div>
        </div>
        <div class="campaign-name pb-3">
            <p class="pb-2">Fotos de campaña</p>
            <div class="card">
                <pv-input-text class="w-full" type="text" placeholder="Enlace" v-model="campaign.photos"/>
<!--                 <pv-file-upload name="demo[]" url="./upload.php" @upload="onAdvancedUpload" :multiple="true" accept="image/*" :maxFileSize="1000000">
                    <template #empty>
                        <p>Arrastra las imágenes aquí</p>
                    </template>
                </pv-file-upload> -->
            </div>
        </div>
        <div class="pb-3">
            <div class="flex justify-content-end">
                <router-link :to="{ path: '/main-content/campaign-details', query: { campaignData: JSON.stringify(campaignData) } }">
                    <pv-button  @click="saveCampaignData">Siguiente</pv-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { CampaignService } from '../../../services/Campaign.service';

export default {
  name: 'CampaignData',
  data() {
    return {
      campaign: {
        name: '',
        slogan: '',
        banner: '',
        photos: '',
      },
      campaignService: null,
    };
  },
  created() {
    this.campaignService = new CampaignService();
  },
  methods: {
    getStorableCampaignData(data) {
      return {
        name: data.name,
        slogan: data.slogan,
        headerPhoto: data.banner,
        aditionalPhoto: data.photos
      };
    },
    saveCampaignData() {
      this.campaign = this.getStorableCampaignData(this.campaign);
/*       console.log("getstorable");
      console.log(this.campaign); */

/*       console.log("campaignData");
      console.log(this.campaignData); */
    },
  },
  computed: {
    campaignData() {
      return {
        name: this.campaign.name,
        slogan: this.campaign.slogan,
        headerPhoto: this.campaign.headerPhoto,
        aditionalPhoto: this.campaign.aditionalPhoto,
      };
    },
  },
};
</script>

<style>

</style>