<template>
    <div class="management">
      <!-- 检索病例 -->
      <el-input v-model="searchKeyword" placeholder="请输入关键字"></el-input>
      <el-button @click="searchCases" type="primary">搜索</el-button>
  
      <!-- 添加病例 -->
      <el-input v-model="newCase" placeholder="请输入新的病例"></el-input>
      <el-button @click="addCase" type="success">添加</el-button>
    </div>
</template>
  
  <script>
  import { ref } from 'vue';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        cases: [],
        searchKeyword: '',
        newCase: ''
      };
    },
    mounted() {
      // 页面加载时获取病例列表
      this.fetchCases();
    },
    methods: {
      fetchCases() {
        axios.get('http://localhost:5173/case_admin')
          .then(response => {
            this.cases = response.data;
          })
          .catch(error => {
            console.error('Error fetching cases:', error);
          });
      },
      searchCases() {
        // 根据关键字检索病例
        // 向后端发送搜索请求
        if (this.searchKeyword.trim() !== '') {
          // 创建包含搜索关键字的对象
          const searchData = {
            keyword: this.searchKeyword.trim()
          };
          // 向后端发送检索病例的 GET 请求
          axios.get('http://localhost:5173/case_admin', { params: searchData })
            .then(response => {
              // 根据后端返回的结果更新前端界面上的病例列表
              this.cases = response.data;
            })
          .catch(error => {
            console.error('Error searching cases:', error);
          });
        }
      },
      addCase() {
        // 向后端发送添加病例请求
        if (this.newCase.trim() !== '') {
            // 创建包含新病例信息的对象
            const newCaseData = {
            name: this.newCase.trim(),
            // 其他病例属性...
            };
            // 向后端发送添加病例的 POST 请求
            axios.post('http://localhost:5173/case_admin', newCaseData)
                .then(response => {
                // 添加成功后，更新前端界面上的病例列表
                this.cases.push(response.data);
                this.newCase = ''; // 清空输入框
            })
            .catch(error => {
                console.error('Error adding case:', error);
            });
        }
      }
    }
  };
  </script>
  
  <style>
  .management {
    padding: 20px;
  }
  </style>
  