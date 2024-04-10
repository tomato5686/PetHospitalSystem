<template>
    <div class="hospital-layout">
      <div class="area">
        <h2>前台区</h2>
      </div>
      <div class="area">
        <h2>档案室</h2>
      </div>
      <div class="area">
        <h2>门诊室</h2>
      </div>
      <div class="area">
        <h2>免疫室</h2>
      </div>
      <div class="area">
        <h2>化验室</h2>
      </div>
      <div class="area">
        <h2>治疗室</h2>
      </div>
      <div class="area">
        <h2>影像学检查室</h2>
      </div>
      <div class="area">
        <h2>药房</h2>
      </div>
      <div class="area">
        <h2>输液室</h2>
      </div>
      <div class="area">
        <h2>手术准备室</h2>
      </div>
      <div class="area">
        <h2>手术室</h2>
      </div>
      <div class="area">
        <h2>住院部</h2>
      </div>
      <div class="area">
        <h2>病理剖检室</h2>
      </div>
    </div>
  </template>

<script>
export default {
  name: 'GuidePage'
}
</script>

  <style scoped>
  .hospital-layout {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .area {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
  }
  </style>