<template>
    <div class="fixed top-0 w-full">
        <div class="h-1/4 bg border-b-2 border-black w-full p-4 flex" :class="{ 'header-on-search': $route.path === '/SearchValues', 'header-on-accinsearch': $route.path === '/AccInProjSearch' }">
            <div class="flex items-center h-full gap-5">
                <template v-if="$route.path === '/AccInProjSearch'">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </template>
                {{ $route.name }}
                <template v-if="$route.path === '/SearchValues'">
                        <div class="fixed right-2">
                            <div class="flex gap-4">
                                <button class="flex items-center bg-button rounded-2xl text-white p-1 px-2">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6a1 1 0 00-1-1h-1a1 1 0 00-1 1v6a1 1 0 001 1h4v-4a1 1 0 00.293-.707L3.293 7.293A1 1 0 003 6.586V4z"></path>
                                </svg>
                                Поиск
                            </button>
                            <button class="flex items-center bg-button rounded-2xl text-white p-1 px-2">
                                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                </svg>
                                Создать
                            </button>
                            </div>
                        </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header-on-search{
    background-color: #F2F2F2 ;
    border: none;
}

.header-on-accinsearch{
    background-color: white;
}
</style>