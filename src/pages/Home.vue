<template>
  <div class="flex flex-col w-full pt-16 pl-4">
    <router-link to="/tasks"><div class="flex gap-4 items-center"><font-awesome-icon icon="briefcase" class="w-6 h-6" />Задачи</div></router-link>
    <router-link to="/settings"><div class="flex gap-4 items-center"><font-awesome-icon icon="cog" class="w-6 h-6" />Настройки</div></router-link>
    <router-link to="/"><div class="flex gap-4 items-center"><font-awesome-icon icon="info-circle" class="w-6 h-6" />О системе</div></router-link>
  </div>
</template>

<style scoped>
a > .fa, .fas, .far, .fal, .fab {
  color: #007bff !important; /* Пример: синий цвет */
  font-size: 1.5rem; /* Пример: размер */
  margin-right: 8px; /* Пример: отступ справа */
}

</style>