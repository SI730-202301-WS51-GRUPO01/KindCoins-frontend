<template>
  <div class="class-full">
    <pv-menubar class="menu-bar">
      <template #start>
        <pv-button text rounded>
          <img
            src="https://i.postimg.cc/6QvxVCSG/logo.png"
            alt="logo"
            class="h-3rem"
          />
        </pv-button>
      </template>

      <template #end>
        <div
          class="card flex flex-wrap justify-content-center gap-4 align-items-center"
        >
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <pv-input-text
              v-model="value1"
              placeholder="Buscar"
              class="p-inputtext-sm"
            />
          </span>
          <!-- <pv-badge value="3" severity="danger"></pv-badge> -->
          <i
            v-badge="2"
            class="pi pi-bell p-overlay-badge"
            style="font-size: 2rem"
          />
          <pv-avatar
            image="https://i.postimg.cc/cLh4rpj5/Ellipse-1.png"
            size="large"
            shape="circle"
          />
          <i class="pi pi-angle-down" style="font-size: 1 rem"></i>
        </div>
      </template>
    </pv-menubar>
  </div>
</template>

<script></script>

<style scoped>
.menu-bar {
  background-color: #ebfffd;
}
.card {
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
}
</style>
