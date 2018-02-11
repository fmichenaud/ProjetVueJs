<template>
  <v-toolbar>
    <v-toolbar-title><router-link :to="{ name: 'DisplayItem' }">Home</router-link></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-sm-and-down">
      <router-link :to="{ name: 'CreateItem' }"><v-btn flat>Add A Movie</v-btn></router-link>
    </v-toolbar-items>
  </v-toolbar>
</template>
