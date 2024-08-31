<template>
    <div class="fixed bottom-0 w-full bg-white">
        <div class="h-1/4 fs w-full p-4 flex">
            <div class="flex align-center w-full h-full justify-between px-4">
                <router-link to="/" class="flex flex-col justify-center">
                    <font-awesome-icon icon="bars" class="text-lg mr-2" />
                    Меню
                </router-link>
                <div class="flex flex-col justify-center">
                    <font-awesome-icon icon="barcode" class="text-lg mr-2" />
                    Сканер
                </div>
                <div class="flex flex-col text-green-600 justify-center" @click="$router.go(-1)">
                    <font-awesome-icon icon="chevron-left" class="text-lg mr-2" />
                    Назад
                </div>
            </div>
        </div>
    </div>
</template>