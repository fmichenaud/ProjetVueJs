<template>
    <div class="container">
        <app-navbar></app-navbar>
        <br>
        <div>
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>

<script>
    import Navbar from './components/Navbar.vue'

    export default{
        components: {
        'app-navbar': Navbar
        }
    }
</script>
