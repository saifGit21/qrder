<template>
<v-main>
  <h3>{{ menu.restaurant}}</h3>
  <v-list >
      <v-list-item v-for="(m,index) in menu.menu_type" :key="index">
          <v-list-item-content class="menu">
              <v-list-item-title class="title">{{m.title}}</v-list-item-title>
              <v-divider/>
              <div  v-for="item in m.menu_items" :key="item.name">
                  <v-row>
                    <v-col>
                  <h4 class="items">
                      {{item.name}}
                  </h4>
                  <v-list-item-subtitle style="margin-bottom:10px; width:250px">{{item.description}}</v-list-item-subtitle>
                  </v-col>
                  <v-spacer/>
                  <v-col>
                  <h5 style="margin-top:10px">{{item.price}} $ CA</h5>
                  </v-col>
                  </v-row>
                  <v-divider/>
              </div>
          </v-list-item-content>
      </v-list-item>
  </v-list>
</v-main>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    menu: {
      restaurant: "Some restaurant",
      menu_type: {
        Appetizers: {
          title: "Appetizers",
          menu_items: [
            {
              name: "Nachos",
              price: 6,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            },
            {
              name: "Fries",
              price: 5,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            },
            {
              name: "Dumplings",
              price: 6,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            },
          ],
        },
        Meals: {
          title: "Meals",
          menu_items: [
            {
              name: "Chicken Burger",
              price: 12,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            },
            {
              name: "Burger",
              price: 10,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            },
            {
              name: "Pepperoni Pizza",
              price: 15,
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
            },
            
          ],
        },
      },
    },
  }),
};
</script>

<style>
    h3 {
        color : white;
        background-color : black;
        padding: 20px;
    }
    .title {
        font-size: 20px;
        font-weight: 700;
        margin-bottom : 5px;
    }
    .menu {
        width: 100%
    }
    .items {
        margin-top : 10px;
        width : 200px;
    }
</style>
