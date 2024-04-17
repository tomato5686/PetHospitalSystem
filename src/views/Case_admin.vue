<template>
  <div>
    <el-input v-model="searchQuery" placeholder="输入病例名搜索" clearable @clear="clearSearch"></el-input>
    <el-button type="primary" @click="addCase" class = "blue-button">增加病例</el-button>
    <el-table :data="filteredCases" style="width: 100%" class = "case-container">
      <el-table-column prop="name" label="病例名"></el-table-column>
      <el-table-column label="操作">
        <template v-slot:default = "scope">
          <el-button @click="viewCase(scope.row)" class = "blue-button">查看</el-button>
          <el-button @click="editCase(scope.row)" class = "blue-button">修改</el-button>
          <el-button @click="deleteCase(scope.row)" class = "blue-button">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-if="filteredCases.length === 0">
      <p>没有找到匹配的病例</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      searchQuery: '',
      cases: [
        { id: 1, name: '哈士奇犬瘟热' },
        { id: 2, name: '吉娃娃犬瘟热' }
        // 其他病例...
      ]
    }
  },
  methods: {
    addCase () {
      // 添加病例的逻辑
      console.log('添加病例')
    },
    viewCase (caseItem) {
      // 查看病例的逻辑
      console.log('查看病例:', caseItem)
    },
    deleteCase (caseItem) {
      // 删除病例的逻辑
      console.log('删除病例:', caseItem)
      this.cases = this.cases.filter(item => item !== caseItem)
    },
    editCase (caseItem) {
      // 修改病例的逻辑
      console.log('修改病例:', caseItem)
    },
    clearSearch () {
      this.searchQuery = ''
    }
  },
  computed: {
    filteredCases () {
      const query = this.searchQuery.toLowerCase()
      return this.cases.filter(caseItem => caseItem.name.toLowerCase().includes(query))
    }
  }
}
</script>

<style>
.case-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ded7d7; /* 添加边框 */
  padding: 10px; /* 添加内边距 */
  max-width: 1000px;
  margin-left: 30px; /* 往右偏一点点 */
  margin-top: 30px; /* 往下偏一点点 */
}

.blue-button {
  background-color: #5e72e4; /* 蓝色背景 */
  color: white; /* 白色字体颜色 */
}
</style>
