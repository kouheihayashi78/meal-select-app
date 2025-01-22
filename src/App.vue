<script setup lang="ts">
import { ref } from 'vue';
import FoodBlock from "./components/FoodBlock.vue";
import { FoodData } from "../FoodData.js";

const foodList = ref(FoodData);
</script>

<template>
  <main>
    <h2 class="title">今日、何食べたい？？？</h2>

    <FoodBlock :name="foodList[0].name" :emoji="foodList[0].emoji" />
    <p>vs</p>
    <FoodBlock :name="foodList[1].name" :emoji="foodList[1].emoji"  />
  </main>
</template>

<style scoped>
  main {
    width: 350px;
    margin: auto;
    text-align: center;
  }
  .title {
    font-size: 40px;
    margin-bottom: 50px;
  }
</style>
