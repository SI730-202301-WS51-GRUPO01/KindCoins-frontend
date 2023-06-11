<template>
    <div class="card-container">
        <pv-card v-for="(card, index) in cards" :key="index" style="width: 350px;">
            <template #header>
                <img alt="card header" :src="card.photoURL" class="card-photo"/>
            </template>
            <template #title>{{ card.title }}</template>
            <template #content>{{ card.resume }}</template>
            <template #footer>
                <pv-button label="Donar ahora" class="donar-btn"/>
            </template>
        </pv-card>
    </div>
</template>

<script>
import { KindCoinsService } from '../../services/kindcoins-api.service';

export default{
    name: "campaign-card",
    data(){
        return{
            cards:[],
            kindcoinsService: null,
        };
    },
    mounted(){
        this.kindcoinsService = new KindCoinsService();
        this.kindcoinsService.getAllCards()
        .then((response)=>{
            this.cards = response.data;
        })
        .catch(error=>{
            console.log(error);
        })
    }
}
</script>

<style>

.card-container{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 1%;
      margin-bottom: 1%;
}
.card-container .card-photo{
    width: 350px;
    border-radius: 1% 1% 0% 0%;
}
.card-container .donar-btn{
    background-color:#0597A6;
}
