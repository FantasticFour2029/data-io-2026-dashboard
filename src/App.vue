<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <header style="position: fixed; top: 0; left: 0; right: 0; background: rgba(0,0,0,0.7); padding: 20px; text-align: center; z-index: 10; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <h1 style="margin: 0; cursor: pointer; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);" @click="router.push('/')">NYC Housing Data Dashboard</h1>
  </header>
  <router-view />
  <footer style="background: rgba(0,0,0,0.7); padding: 20px; text-align: center; color: white; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
    <p style="margin: 0; font-size: 14px;">Made for Data I/O 2026</p>
    <p style="margin: 5px 0 0 0; font-size: 12px;">© 2026 Ani Bhati, Aditya Dhati, Rohan Nishant, Pranav Rajesh</p>
  </footer>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
