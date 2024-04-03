<script setup lang="ts">
    import { RouterLink } from 'vue-router'
</script>

<template>
    <div>
        <RouterLink to="/role">角色扮演</RouterLink>
        <RouterLink to="/case">病例学习</RouterLink>
    </div>
</template>

<style>
    a {
        display:flex;
        place-items: center;
        font-size:30px;
    }
</style>