<template>
  <div class="flex flex-col w-full pt-16 pl-4 gap-4">
    <div class="flex gap-4 items-center"><font-awesome-icon icon="briefcase" class="w-6 h-6" /><router-link to="/tasks" class="nav-link">Задачи</router-link></div>
    <div class="flex gap-4 items-center"><font-awesome-icon icon="cog" class="w-6 h-6" /><router-link to="/settings" class="nav-link">Настройки</router-link></div>
    <div class="flex gap-4 items-center"><font-awesome-icon icon="info-circle" class="w-6 h-6" />О системе</div>
  </div>
</template>

<style scoped>
a > .fa, .fas, .far, .fal, .fab {
  color: #007bff !important; /* Пример: синий цвет */
  font-size: 1.5rem; /* Пример: размер */
  margin-right: 8px; /* Пример: отступ справа */
}
</style>