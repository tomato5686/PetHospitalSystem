<template>
  <div class="hospital-map">
    <div class="return-button-container">
      <router-link to="/home" class="return-button">返回上级</router-link>
    </div>
    <div class="overview">
      <h2>医院平面图</h2>
      <div class="hospital-layout">
        <div v-for="department in departments" :key="department.id" 
             class="department"
             :style="{ left: department.left + '%', top: department.top + '%', width: department.width + 'px', height: department.height + 'px', backgroundColor: selectedDepartment === department ? '#ccebff' : '#f0f0f0' }"
             @click="selectDepartment(department)"
             @mouseover="showDepartmentImage(department)">
          {{ department.name }}
        </div>
      </div>
    </div>
    <div class="department-info" v-if="selectedDepartment">
      <h2>科室展示</h2>
      <div class="department-image">
        <img :src="selectedDepartmentImage" alt="科室图片">
      </div>
      <div class="department-title">
        <h3>科室信息</h3>
      </div>
      <div class="department-description">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ selectedDepartment.info }}</p>
      </div>
      <div class="department-title">
        <h3>设备信息</h3>
      </div>
      <div class="department-description">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ selectedDepartment.equipment }}</p>
      </div>
    </div>
    <div class="guide-button-container">
      <router-link to="/3DGuide" class="guide-button">进入3D导览</router-link>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      departments: [
    { id: 1, name: '前台区', width: 90, height: 70, image: 'public/2Dimg/前台区.png', left: 5, top: 5, info: '包括接待挂号、导医咨询、病历档案发出与回收、收费等。' },
    { id: 2, name: '档案室', width: 80, height: 60, image: 'public/2Dimg/档案室.png', left: 30, top: 5, info: '包括病例档案的合理保存与数据统计等。' },
    { id: 3, name: '门诊室', width: 110, height: 90, image: 'public/2Dimg/门诊室.png', left: 5, top: 20, info: '包括诊室的布局介绍；对宠物进行临床基本检查（视、听、触、嗅等）、疾病诊断；与宠物主人交流并根据情况开具处方。' },
    { id: 4, name: '免疫室', width: 70, height: 50, image: 'public/2Dimg/免疫室.png', left: 30, top: 20, info: '包括为健康宠物接种疫苗的流程，对常见并发症的处理流程，对常见免疫相关问题的解答等。' },
    { id: 5, name: '化验室', width: 90, height: 70, image: 'public/2Dimg/化验室.png', left: 55, top: 20, info: '包括对送检样本的预处理，对相应样本进行血常规、血液生化、电解质、血气、血凝指标、激素指标、尿常规、微生物学检查、药敏、皮肤刮片、粪便检查、传染病检查等检查操作流程。' },
    { id: 6, name: '影像学检查室', width: 100, height: 80, image: 'public/2Dimg/影像学检查室.png', left: 5, top: 40, info: '包括X线检查、B超检查以及CT、MRI检查。如X线检查：X光机的结构功能介绍、全身各部位的摆位、拍摄条件的选择、拍摄流程、洗片的操作流程。B超检查：扫查探头的选择、全身各个部位扫查的摆位、腹部扫查流程。' },
    { id: 7, name: '专科检查室', width: 110, height: 70, image: 'public/2Dimg/专科检查室.png', left: 30, top: 40, info: '包括对眼科、骨科、神经科、心脏科等专科疾病的检查，如眼科（检眼镜检查、眼压检查、裂隙灯检查、眼底检查、泪液分泌量检查等）、心脏科检查（心脏听诊、心电图检查等）、神经学检查（步态检查、各种反射检查等）等。' },
    { id: 8, name: '处置室', width: 80, height: 60, image: 'public/2Dimg/处置室.png', left: 60, top: 40, info: '包括口服投药、换药、清洗耳道、挤肛门腺、修剪指甲、鼻饲管放置、灌肠、安乐死等基本处置操作流程。' },
    { id: 9, name: '药房', width: 90, height: 70, image: 'public/2Dimg/药房.png', left: 5, top: 55, info: '包括对各种药物的存放要求、处方的审核流程、药物的发放流程、常见药物的使用说明等。' },
    { id: 10, name: '注射室', width: 100, height: 60, image: 'public/2Dimg/注射室.png', left: 30, top: 55, info: '包括静脉注射、皮下注射、肌肉注射、局部封闭注射的操作流程，常见问题的处理方法，输液泵、加热垫的使用方法，注射室的消毒流程。' },
    { id: 11, name: '手术准备室', width: 110, height: 90, image: 'public/2Dimg/手术准备室.png', left: 60, top: 55, info: '包括术前对宠物进行麻前给药、注射麻醉、吸入麻醉的流程，保定、剃毛、消毒的流程，常见手术器械的介绍，手术器械包的准备、灭菌流程，手术人员的消毒、穿戴手术衣流程等。' },
    { id: 12, name: '手术室', width: 120, height: 80, image: 'public/2Dimg/手术室.png', left: 5, top: 75, info: '包括手术室的布局介绍，手术室消毒流程，手术无菌要求，常规手术、特殊手等的操作规范。' },
    { id: 13, name: '住院部', width: 100, height: 70, image: 'public/2Dimg/住院部.png', left: 30, top: 75, info: '包括对需要住院的病例进行护理分级，不同护理级别的要求，住院部的工作流程，住院部的消毒流程等。' },
    { id: 14, name: '病理剖检室', width: 90, height: 60, image: 'public/2Dimg/病理剖检室.png', left: 60, top: 75, info: '包括对病死动物剖解的流程，病理剖检室的消毒流程，病历剖检过程的人员要求，病理剖检过程中的人道关怀。' }
],

      selectedDepartment: null,
      selectedDepartmentImage: ''
    };
  },
  methods: {
    showDepartmentImage(department) {
      if (!this.selectedDepartment) {
        this.selectedDepartmentImage = department.image;
      }
    },
    selectDepartment(department) {
      this.selectedDepartment = department;
      this.selectedDepartmentImage = department.image;
    }
  }
};

</script>

<style scoped>
.return-button-container {
  position: absolute;
  top: 20px;
  left: 20px;
}

.return-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.return-button:hover {
  background-color: #0056b3;
}
.department-title h3 {
  text-align: left;
  margin-left: 2em; /* 控制标题左侧缩进 */
}

.department-description p {
  text-align: left;
  margin-left: 2em; /* 控制段落左侧缩进 */
}

.hospital-map {
  display: flex;
  justify-content: center;
  align-items: center;
}

.overview {
  padding: 20px;
}

.hospital-layout {
  position: relative;
  width: 600px; /* 设置医院平面图的宽度 */
  height: 600px; /* 设置医院平面图的高度 */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.department {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.department:hover {
  background-color: #e0e0e0;
}

.department-info {
  margin-top: 20px;
  text-align: center;
}

.department-image {
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px auto;
  overflow: hidden;
}

.department-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.department-details {
  margin-top: 20px;
}

.department-details h3 {
  margin-bottom: 10px;
}

.department-details p {
  margin: 5px 0;
}

.guide-button-container {
  position: absolute;
  bottom: 20px; /* 调整按钮距离底部的距离 */
  left: 50%;
  transform: translateX(-50%);
}

.guide-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.guide-button:hover {
  background-color: #0056b3;
}
</style>
