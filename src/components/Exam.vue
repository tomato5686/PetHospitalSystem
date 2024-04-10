
<template>
  <div class="exam-page">
    <div class="header">
      <h1>考试题目</h1>
      <div class="time-info">
        <p>考试规定时间：{{ formatTime(examTime) }}</p>
        <p>已考试时间：{{ formatTime(elapsedTime) }}</p>
      </div>
    </div>
    <div class="questions">
      <div v-for="(question, index) in examQuestions" :key="question.id">
        <h3>{{ index + 1 }}. {{ question.title }}</h3>
        <ul>
          <li v-for="(option, idx) in question.options" :key="idx" @click="selectAnswer(question.id, idx)">
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
    <button @click="submitExam" class="submit-btn">提交试卷</button>
    <p v-if="elapsedTime >= examTime" class="timeout-msg">您已超时，试卷已自动提交</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'ExamPage',
  setup() {
    const examQuestions = ref([]);
    const userAnswers = ref([]);
    const examTime = 3600000; // 考试规定时间（1小时）
    const elapsedTime = ref(0);

    // 发起HTTP请求获取考试题目数据
    const fetchExamQuestions = async () => {
      try {
        const response = await axios.get('https://your-backend-api.com/exam/questions');
        examQuestions.value = response.data;
      } catch (error) {
        console.error('获取考试题目数据失败:', error);
      }
    };

    // 组件加载时自动获取考试题目数据
    onMounted(() => {
      fetchExamQuestions();
      startTimer();
    });

    // 用户选择答案
    const selectAnswer = (questionId, optionIndex) => {
      userAnswers.value[questionId] = optionIndex;
    };

    // 提交试卷
    const submitExam = () => {
      // 将用户答案提交至后端处理，计算得分等操作
      console.log('用户答案:', userAnswers.value);
      // 提交至后端的逻辑可根据实际需求自行实现
    };

    // 开始计时
    const startTimer = () => {
      setInterval(() => {
        elapsedTime.value += 1000; // 每秒加1秒
        if (elapsedTime.value >= examTime) {
          clearInterval(timer); // 清除定时器
          submitExam(); // 提交试卷
        }
      }, 1000);
    };

    // 将毫秒时间格式化为 HH:mm:ss
    const formatTime = (milliseconds) => {
      const hours = Math.floor(milliseconds / (1000 * 60 * 60));
      const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return {
      examQuestions,
      selectAnswer,
      submitExam,
      elapsedTime,
      formatTime,
      examTime
    };
  }
}
</script>

<style scoped>
.exam-page {
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time-info {
  text-align: right;
}

.questions {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  cursor: pointer;
  padding: 5px;
  margin-bottom: 5px;
  background-color: #f0f0f0;
  border-radius: 5px;
}

li:hover {
  background-color: #e0e0e0;
}

.submit-btn {
  margin-top: 20px;
}

.timeout-msg {
  color: red;
  margin-top: 10px;
}
</style>
