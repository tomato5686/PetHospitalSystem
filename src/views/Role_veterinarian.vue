<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <header>
        <div>
            <RouterLink to="/role">结束学习</RouterLink><br>
        </div>

    </header>
    <main>
        <div>
            <h2>content</h2>
        </div>
    </main>
</template>

<style>
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }
    a {
        display:flex;
        place-items: center;
        font-size:30px;
    }
</style>