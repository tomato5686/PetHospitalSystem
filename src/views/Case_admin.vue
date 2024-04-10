<template>
    <div class="management">
      <!-- 检索病例 -->
      <el-input v-model="searchKeyword" placeholder="请输入关键字"></el-input>
      <el-button @click="searchCases" type="primary">搜索</el-button>
  
      <!-- 添加病例 -->
      <el-input v-model="newCase" placeholder="请输入新的病例"></el-input>
      <el-button @click="addCase" type="success">添加</el-button>
  
      <!-- 病例列表 -->
      <el-table :data="cases" style="width: 100%">
        <el-table-column prop="name" label="病例名称"></el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button @click="deleteCase(row)" type="danger" size="mini">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
        axios.get('http:/localhost:5173/cases')
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
      },
      addCase() {
        // 向后端发送添加病例请求
      },
      deleteCase(row) {
        // 向后端发送删除病例请求
      }
    }
  };
  </script>
  
  <style>
  .management {
    padding: 20px;
  }
  </style>
  