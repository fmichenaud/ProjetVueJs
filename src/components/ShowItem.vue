<template>
<v-layout>
    <v-flex xs12 sm12 >
      <v-card hover="true">
        <v-card-media class="white--text text-xs-center" src="https://cdn.empireonline.com/jpg/80/0/0/1000/563/0/north/0/0/0/0/0/t/films/27205/images/s2bT29y0ngXxxu2IA8AOzzXTRhd.jpg" height="300px">
                 <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="display-4 text-xs-center mb-0">{{item.title}} </span>
              </v-flex>
            </v-layout>
          </v-container>

        </v-card-media>
        <v-card-title primary-title>
          <div>
            
            <div>
                <p>Date de sortie : <strong>{{item.year}}</strong></p>
                <p>Genre : <strong>{{item.kind}}</strong></p>
                <p>Langue : <strong>{{item.language}}</strong></p>
                <p>Réalisateur : <strong>{{item.realisator_firstname}} {{item.realisator_lastname}}</strong></p>
                <p>Nationalité : <strong>{{item.realisator_nationality}}</strong> - Né en <strong>{{item.realisator_birthday}}</strong></p>
            </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <router-link :to="{name: 'EditItem', params: { id: item._id }}" class="btn btn-primary">Edit</router-link>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      item: {}
    };
  },

  created: function() {
    this.getItem();
  },

  methods: {
    getItem() {
      let uri = "http://localhost:4000/items/edit/" + this.$route.params.id;
      this.axios.get(uri).then(response => {
        this.item = response.data;
      });
    },
  }
};
</script>
