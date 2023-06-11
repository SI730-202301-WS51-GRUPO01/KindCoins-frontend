<template>
    <div class="card flex">
        <pv-galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 100%"
        :showItemNavigators="true" :showItemNavigatorsOnHover="true" :showThumbnails="false">
            <template #item="slotProps">
                <img :src="slotProps.item.photoURL" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
        </pv-galleria>
    </div>
</template>

<script>
import { KindCoinsService } from '../../services/kindcoins-api.service';

export default{
    name: "galleria",
    data(){
        return{
            images: [],
            kindcoinsService: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
    mounted(){
        this.kindcoinsService = new KindCoinsService();
        this.kindcoinsService.getImages()
        .then((response)=>{
            this.images = response.data;
        })
        .catch(error=>{
            console.log(error);
        })
    }
}

</script>