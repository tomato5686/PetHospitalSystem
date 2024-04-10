<template>
    <div class="test-page">
      <button @click="goBack" class="back-button">返回</button>
      <h1>选择测试科目</h1>
      <ul>
        <li v-for="subject in subjects" :key="subject.id" @click="selectSubject(subject)"
            :class="{ 'selected': subject === selectedSubject }">
          {{ subject.name }}
        </li>
      </ul>
      <button @click="confirmSelection">确定</button>
      <p v-if="!selectedSubject">请先选择一个科目</p>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'TestPage',
    setup() {
      const router = useRouter();
  
      const subjects = ref([
        { id: 1, name: '科目一' },
        { id: 2, name: '科目二' },
        { id: 3, name: '科目三' },
      ]);
  
      const selectedSubject = ref(null);
  
      const selectSubject = (subject) => {
        selectedSubject.value = subject;
      };
  
      const confirmSelection = () => {
        if (selectedSubject.value) {
          // 如果选择了科目，则跳转到考试页面，并传递科目ID作为路由参数
          // router.push(`/exam/${selectedSubject.value.id}`);
          router.push('/exam')
        } else {
          // 如果未选择科目，则显示提醒消息
          console.log('请先选择一个科目');
        }
      };
  
      const goBack = () => {
        // 返回上级页面
        router.push('/home')
      };
  
      return {
        subjects,
        selectedSubject,
        selectSubject,
        confirmSelection,
        goBack
      };
    }
  }
  </script>
  
  <style scoped>
  .test-page {
    font-family: Arial, sans-serif;
  }
  
  .back-button {
    margin-bottom: 10px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    cursor: pointer;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    margin-bottom: 5px;
  }
  
  li:hover {
    background-color: #e0e0e0;
  }
  
  .selected {
    background-color: lightblue;
  }
  </style>
  