<template>
    <div class="card flex flex-column align-items-center ">
        <pv-panel-menu v-model:expandedKeys="expandedKeys" :model="items" class="w-full md:w-25rem "  />
    </div>
</template>

<script setup>
import { ref } from "vue";

const expandedKeys = ref({});
const items = ref([
  {
      key: '0',
      label: 'Explorar',
      icon: 'pi pi-fw pi-file',
      
  },
  {
      key: '1',
      label: 'Noticias',
      icon: 'pi pi-fw pi-pencil',
  },
  {
      key: '2',
      label: 'Campañas',
      icon: 'pi pi-fw pi-user',
      items: [
          {
              key: '2_0',
              label: 'Crear campaña',
              icon: 'pi pi-fw pi-user-plus'
          },
          {
              key: '2_1',
              label: 'Mis campañas',
              icon: 'pi pi-fw pi-user-minus'
          }
          
      ]
  }
]);


const expandAll = () => {
  for (let node of items.value) {
      expandNode(node);
  }

  expandedKeys.value = {...expandedKeys.value};
};

const collapseAll = () => {
  expandedKeys.value = {};
};

const expandNode = (node) => {
  if (node.items && node.items.length) {
      expandedKeys.value[node.key] = true;

      for (let child of node.items) {
          expandNode(child);
      }
  }
};
</script>