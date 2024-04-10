<script setup lang="ts">
import { RouterLink,RouterView } from 'vue-router';
</script>

<template>
    <header>
        <div>
            <RouterLink to="/role/receptionist">前台学习</RouterLink>
            <RouterLink to="/role/assistant">医助学习</RouterLink>
            <RouterLink to="/role/veterinarian">兽医学习</RouterLink>
            <RouterLink to="/home">返回主页</RouterLink>
        </div>
    </header>
    <main>
        <RouterView></RouterView>
    </main>
</template>

<style>
    a {
        display:flex;
        place-items: top;
        font-size:30px;
    }
</style>
