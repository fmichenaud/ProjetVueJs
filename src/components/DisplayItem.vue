<template>
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
    <v-flex xs12 sm3 v-for="item in items" :key="item.id">
      <v-card hover="true" >
        <v-card-media src="https://cdn.empireonline.com/jpg/80/0/0/1000/563/0/north/0/0/0/0/0/t/films/27205/images/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg" height="300px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title}} </h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <button class="btn btn-danger" v-on:click="deleteItem(item._id)">Delete</button>
          <router-link :to="{name: 'ShowItem', params: { id: item._id }}" class="btn btn-primary">Show</router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
    </v-layout>
    </v-container>
    
</template>
<script>

    export default {
        data(){
            return{
                items: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
              let uri = 'http://localhost:4000/items';
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {
              let uri = 'http://localhost:4000/items/delete/'+id;
              this.items.splice(id, 1);
              this.axios.get(uri);
            }
        }
    }
</script>
