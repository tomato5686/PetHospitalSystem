<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router=useRouter()

let id = ref('')
let password = ref('')

function Verify(){
  if(id.value=='123456'&&password.value=='666666')
    router.replace('/home')
  else alert('账号或密码错误')
}

</script>

<template>
  <header>
    <div>
      <h1>虚拟宠物医院系统</h1>
    </div>
  </header>
  <main>
    <form>
      <input v-model="id" @keydown.enter.prevent="Verify" placeholder="输入账号">
    </form><br>
    <form>
      <input type="password" v-model="password" @keydown.enter.prevent="Verify" placeholder="输入密码">
    </form><br>
    <button @click="Verify">登录</button>
  </main>
</template>

<style scoped>
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  input {
    zoom:150%;
  }
  button {
    zoom:150%;
  }
</style>