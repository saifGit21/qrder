<template>
  <v-main>
    <h3>{{ menu.title }}</h3>
    <v-list>
      <v-list-item v-for="(m, index) in menu.menu_types" :key="index">
        <v-list-item-content class="menu">
          <v-list-item-title class="title">{{ m.title }}</v-list-item-title>
          <v-divider />
          <div v-for="item in m.menu_items" :key="item.name">
            <v-row>
              <v-col>
                <v-img width="100%" height="100%" :src="item.img"></v-img>
              </v-col>
              <v-col>
                <v-row>
                  <v-col class="">
                    <h4 class="items">
                      {{ item.name }}
                    </h4>
                  </v-col>
                  <v-col class=".col-6 .col-md-4" align="right">
                    <h5 style="margin-top: 10px">{{ item.price }} $ CA</h5>
                  </v-col>
                </v-row>
                <v-row>
                  <v-list-item-subtitle class="description">{{
                    item.description
                  }}</v-list-item-subtitle>
                </v-row>
              </v-col>
            </v-row>
            <v-divider />
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-main>
</template>

<script>
import { getRestaurants, getRestaurantMenu } from "../server/db.js";

export default {
  name: "Menu",
  data: () => ({
    menu: {
      title: "",
      menu_types: {},
    },
  }),
  methods: {
    async getAllRestaurants() {
      const restaurants = await getRestaurants();
      this.menu.title = restaurants[0].title;
      const menu = await getRestaurantMenu(restaurants[0].id);
      this.menu.menu_types = menu;
    },
  },
  async created() {
    await this.getAllRestaurants();
  },
};
</script>

<style>
h3 {
  color: white;
  background-color: black;
  padding: 20px;
  width: 100%;
  position: fixed;
}
.title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
}
.menu {
  width: 100%;
}
.items {
  margin-left: -12px;
  width: 110px;
  margin-top: 10px;
}
.description {
  margin-bottom:20px;
}
</style>
