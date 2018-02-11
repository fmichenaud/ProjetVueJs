<template>
  <form enctype="multipart/form-data" name="fileUploadForm" v-on:submit.prevent="addItem">
    <v-card color="grey lighten-4" flat>
    <v-card-text>
<v-container fluid>
  <v-layout row>
    <v-text-field
      label="Titre du film"
      v-model="item.title"
      :error-messages="titleErrors"
      @input="$v.item.title.$touch()"
      @blur="$v.item.title.$touch()"
      required
    ></v-text-field>
    <v-text-field
      label="Année de sortie"
      v-model="item.year"
      :error-messages="yearErrors"
      @input="$v.item.year.$touch()"
      @blur="$v.item.year.$touch()"
      required
    ></v-text-field>
    <v-text-field
      label="Language"
      v-model="item.language"
      :error-messages="titleErrors"
      @input="$v.item.language.$touch()"
      @blur="$v.item.language.$touch()"
      required
    ></v-text-field>
    </v-layout>
    <v-layout row>
    <v-flex xs6>
    <v-text-field
      label="Nom du réalisateur"
      v-model="item.realisator_lastname"
      :error-messages="titleErrors"
      @input="$v.item.realisator_lastname.$touch()"
      @blur="$v.item.realisator_lastname.$touch()"
      required
    ></v-text-field>
    </v-flex>
    <v-flex xs6>
    <v-text-field
      label="Prénom du réalisateur"
      v-model="item.realisator_firstname"
      :error-messages="titleErrors"
      @input="$v.item.realisator_firstname.$touch()"
      @blur="$v.item.realisator_firstname.$touch()"
      required
    ></v-text-field>
    </v-flex>
    </v-layout>
    <v-layout row>
    <v-text-field
      label="Nationalité du réalisateur"
      v-model="item.realisator_nationality"
      :error-messages="titleErrors"
      @input="$v.item.realisator_nationality.$touch()"
      @blur="$v.item.realisator_nationality.$touch()"
      required
    ></v-text-field>
    <v-text-field
      label="Année de naissance du réalisateur"
      v-model="item.realisator_birthday"
      :error-messages="titleErrors"
      @input="$v.item.realisator_birthday.$touch()"
      @blur="$v.item.realisator_birthday.$touch()"
      required
    ></v-text-field>
    </v-layout>
    <v-layout row>
    <v-text-field
      label="Genre du film"
      v-model="item.kind"
      :error-messages="titleErrors"
      @input="$v.item.kind.$touch()"
      @blur="$v.item.kind.$touch()"
      required
    ></v-text-field>
            <input type="file" name="myFile" accept="image/*">
    </v-layout>


        <div class="form-group">
          <button class="btn btn-primary">Add Movie</button>
        </div>

      </v-container>
    </v-card-text>
    </v-card>
  </form>
</template>
<script>
  export default {
    data(){
        return{
          item:{}
        }
    },
    methods: {
      addItem(){
        let uri = 'http://localhost:4000/items/add';
        this.axios.post(uri, this.item).then((response) => {
          this.$router.push({name: 'DisplayItem'})
        });
    }
}
}

</script>
