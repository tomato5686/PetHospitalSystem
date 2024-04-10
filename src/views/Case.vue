<script setup lang="ts">
import {ref} from 'vue'

let cases = ref([
    {id:'001',title:'病例1',content:'fasdklafdsjklafdsk'},
    {id:'002',title:'病例2',content:'jfaskdlfjkasjdfkds'},
    {id:'003',title:'病例3',content:'fadnskfskdjfsdnfkd'}
])
let text = ref('')
let key = ref('')

function select(t:any){
    for (const c in cases.value) {
        if (cases.value[c].id==t) {
            text.value=cases.value[c].content
            
        }
    }
}
function search(k:any){
    if (k=='') {
        alert('请输入搜索内容！')
        return
    }
    let found=false
    for (const c in cases.value) {
        if (cases.value[c].title==k) {
            found=true
            select(cases.value[c].id)
        }
    }
    if (found==false) {
        alert('查无此项！')
        key.value=''
    }
}
</script>

<template>
    <header>
        <form>
            <input v-model=key placeholder="请输入" @keydown.enter.prevent="search(key)">
            <button @click.prevent="search(key)">搜索</button>
        </form>
        <br>
        <div>
            <ul>
                <li v-for="c in cases">
                    <button @click="select(c.id)">{{c.title}}</button><br>
                </li>
            </ul>
        </div>
    </header>
    <main>
        <div>
            <h2>{{text}}</h2>
        </div>
    </main>
</template>

<style>
    header {
        display: flex;
        flex-direction: column;
    }
    input {
        zoom:150%;
    }
    button {
        zoom:150%;
    }
</style>
