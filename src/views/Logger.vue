<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'
const router=useRouter()

let user = ref({
  id:'',
  password:'',
  is_admin:true
})

let log_in_admin=ref(false)

function Switch_log(){
  log_in_admin.value=!log_in_admin.value
}

function Verify(){
  if(user.value.id=='123456'&&user.value.password=='666666'){
    if(log_in_admin.value){
      if(user.value.is_admin) router.replace('/home_admin')
      else alert('用户权限不足！')
    }
    else router.replace('/home')
  }
  else alert('账号或密码错误！')
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
      <input v-model="user.id" @keydown.enter.prevent="Verify" placeholder="输入账号">
    </form><br>
    <form>
      <input type="password" v-model="user.password" @keydown.enter.prevent="Verify" placeholder="输入密码">
    </form><br>
    <button @click="Verify">登录</button><br>
    <button @click="Switch_log">以{{log_in_admin?'实习生':'管理员'}}身份登录</button><br>
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
  a {
    font-size: 10px;
  }
</style>