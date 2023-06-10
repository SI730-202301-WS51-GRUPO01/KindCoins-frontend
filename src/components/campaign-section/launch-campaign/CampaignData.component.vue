<template>
    <div class="class-full flex-column flex m-5">
        <div class="campaign-name pb-3">
            <p class="pb-2">Nombre de campaña</p>
            <pv-input-text class="w-full" type="text" placeholder="Ej." />
        </div>
        <div class="campaign-name pb-3">
            <p class="pb-2">Eslogan</p>
            <pv-textarea  class="w-full" type="text" placeholder="Ej ."/>
        </div>
        <div class="campaign-name pb-3">
            <p class="pb-2">Banner</p>
            <div class="card">
                <pv-file-upload mode="basic" name="demo[]" url="./upload.php" accept="image/*" :maxFileSize="1000000" @upload="onUpload" />
            </div>
        </div>
        <div class="campaign-name pb-3">
            <p class="pb-2">Fotos de campaña</p>
            <div class="card">
                <pv-file-upload name="demo[]" url="./upload.php" @upload="onAdvancedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000">
                    <template #empty>
                        <p>Arrastra las imágenes aquí</p>
                    </template>
                </pv-file-upload>
            </div>
        </div>
        <div>
            <div class="flex justify-content-end">
                <router-link to="/main-content/campaign-details">
                    <pv-button>Siguiente</pv-button>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script setup>

</script>

<style>

</style>