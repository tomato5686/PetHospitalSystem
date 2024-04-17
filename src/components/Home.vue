<template>
  <div id="app">
    <!-- 上半部分：背景图片 -->
    <div class="background-image"></div>
    <!-- 下半部分：模块内容 -->
    <div class="modules-container">
      <!-- 导览展示模块 -->
      <el-card class="module-card">
        <h2>导览展示</h2>
        <p>这是导览展示模块的内容。</p>
        <el-button class="experience-button" type="primary" @click="goToGuidePage">体验</el-button>
      </el-card>

      <!-- 角色扮演模块 -->
      <el-card class="module-card">
        <h2>角色扮演</h2>
        <p>这是角色扮演模块的内容。</p>
        <el-button class="experience-button" type="primary" @click="goToRolePage">体验</el-button>
      </el-card>

      <!-- 病例学习模块 -->
      <el-card class="module-card">
        <h2>病例学习</h2>
        <p>这是病例学习模块的内容。</p>
        <el-button class="experience-button" type="primary" @click="goToCasePage">体验</el-button>
      </el-card>

      <!-- 测试答题模块 -->
      <el-card class="module-card">
        <h2>测试答题</h2>
        <p>这是测试答题模块的内容。</p>
        <el-button class="experience-button" type="primary" @click="goToExamPage">体验</el-button>
      </el-card>

      <!-- 管理员模块 -->
      <el-card class="module-card">
        <h2>管理系统</h2>
        <p>这是管理系统的内容。</p>
        <el-button class="experience-button" type="primary" @click="goToHomeAdmin">体验</el-button>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    goToGuidePage () {
      this.$router.push({ name: 'GuidePage' })
    },
    goToRolePage () {
      this.$router.push({ name: 'RolePage' })
    },
    goToCasePage () {
      this.$router.push({ name: 'CasePage' })
    },
    goToExamPage () {
      this.$router.push({ name: 'ExamPage' })
    },
    goToHomeAdmin () {
      if(false) alert('您的权限不足！')
      else this.$router.push({ name: 'HomeAdmin' })
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh; /* 让页面铺满整个视口 */
  display: flex;
  flex-direction: row;
}
.background-image {
  background-image: url('@/assets/background.jpg'); /* 背景图片地址 */
  background-size: cover;
  background-position: center;
  /* filter: blur(8px);  模糊效果 */
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1; /* 将背景图片置于最底层 */
}
.modules-container {
  flex: 1;  /* 让模块容器占据剩余空间 */
  display: flex;
  justify-content: center;
  align-items: center; /* 垂直居中对齐 */
  flex-wrap: wrap;
  padding: 20px; /* 添加内边距 */
}

.module-card {
  margin: 10px;
  width: 300px; /* 设置模块卡片宽度 */
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2); /* 添加半透明边框 */
  border-radius: 10px; /* 设置边框圆角 */
  background-color: rgba(255, 255, 255, 0.8); /* 设置模块背景颜色为半透明白色 */
}

.el-button {
  width: 100%;
}

.experience-button {
  background-color: #5e72e4; /* 淡蓝色 */
  border-color: #5e72e4; /* 边框颜色 */
  color: #fff; /* 文字颜色 */
  font-weight: bold; /* 字体加粗 */
  border-radius: 5px; /* 圆角 */
  padding: 10px 20px; /* 内边距 */
  transition: all 0.3s ease; /* 过渡效果 */
}

.experience-button:hover {
  background-color: #7e8ce0; /* 淡蓝色 - 鼠标悬停时 */
  border-color: #7e8ce0; /* 边框颜色 - 鼠标悬停时 */
}

</style>
