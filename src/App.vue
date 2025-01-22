<script setup lang="ts">
import { ref } from 'vue';
import FoodBlock from "./components/FoodBlock.vue";
import type { Food } from '../FoodData.ts';
import { FoodData } from '../FoodData.ts';

const foodList = ref<Food[]>(FoodData)

const pickUpFoodIndex = ref<number>(0)
const newFoodIndex = ref<number>(1)

const pickUpFood = (index: number): void => {
  pickUpFoodIndex.value = index
  newFoodIndex.value++
}
</script>

<template>
  <main>
    <h2 class="title">今日、何食べたい？？？</h2>

    <FoodBlock
      :name="foodList[pickUpFoodIndex].name"
      :emoji="foodList[pickUpFoodIndex].emoji"
      @click="pickUpFood(pickUpFoodIndex)"
    />
    <template v-if="newFoodIndex < foodList.length">
      <p>vs</p>
      <FoodBlock
        :name="foodList[newFoodIndex].name"
        :emoji="foodList[newFoodIndex].emoji"
        @click="pickUpFood(newFoodIndex)"
      />
    </template>
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
