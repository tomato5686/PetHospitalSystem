<script setup lang="ts">
import { RouterLink,RouterView } from 'vue-router';

</script>

<template>
    <header>
        <div>
            <RouterLink to="">修改密码</RouterLink>
            <RouterLink to="">修改权限</RouterLink>
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