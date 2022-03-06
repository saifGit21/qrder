<template>
  <v-app>
    <v-main>
      <Menu />
      <!-- <router-view /> -->
    </v-main>
  </v-app>
</template>

<script>
import Menu from './views/Menu.vue'
export default {
  name: "App",
  components : {
    Menu,
  },
  data: () => ({
    
  }),
};
</script>
