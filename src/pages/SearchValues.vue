<template>
    <div class="flex flex-col items-center space-y-4 mt-20">
      <div v-for="vzn in vzns" :key="vzn.vzNumber + vzn.issueDate" class="border rounded-lg p-4 w-72">
        <p><strong>ВЗН №{{ vzn.vzNumber }}</strong></p>
        <p>Отправитель: {{ vzn.sender }}</p>
        <p>Получатель: {{ vzn.receiver }}</p>
        <p>Дата выдачи: {{ vzn.issueDate }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { useVznStore } from '../stores/counter'; // Импортируем ваш стор
  
  export default {
    setup() {
      const vznStore = useVznStore(); // Используем созданный стор
  
      // Вытаскиваем данные из стора
      const vzns = vznStore.vzns;
  
      return {
        vzns,
      };
    },
  };
  </script>
  
  <style scoped>
  .border {
    border: 1px solid #ccc;
  }
  </style>
  