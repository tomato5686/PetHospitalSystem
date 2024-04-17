<template>
    <div class="subject-management">
      <button @click="goBack" class="back-button">返回上一页面</button>
      <h1>编辑科目</h1>
      <div class="search-bar">
        <input type="text" v-model="searchKeyword" placeholder="搜索科目">
        <button @click="searchSubjects">搜索</button>
      </div>
      <ul class="subject-list">
        <li v-for="subject in filteredSubjects" :key="subject.id" class="subject-item">
          <div class="subject-name">
            <span v-if="!subject.editing">{{ subject.name }}</span>
            <input v-else type="text" v-model="subject.name" class="edit-input">
          </div>
          <div class="button-group">
            <button @click="editSubject(subject)" class="edit-button">{{ subject.editing ? '保存' : '编辑' }}</button>
            <button v-if="subject.editing" @click="cancelEdit(subject)" class="cancel-button">取消</button>
            <button @click="deleteSubject(subject)" class="delete-button">删除</button>
          </div>
        </li>
      </ul>
      <button @click="addSubject" class="add-button">添加科目</button>
      <button @click="saveChanges" class="save-button">保存修改</button>
    </div>
  </template>
  
  <script>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'TestModify',
  setup() {
    const router = useRouter();

    const subjects = ref(JSON.parse(localStorage.getItem('subjects')) || [
      { id: 1, name: '科目一', editing: false },
      { id: 2, name: '科目二', editing: false },
      { id: 3, name: '科目三', editing: false },
    ]);

    const searchKeyword = ref('');
    const searchResults = ref([]);

    const filteredSubjects = computed(() => {
      return searchKeyword.value ? searchResults.value : subjects.value;
    });

    const editSubject = (subject) => {
      if (subject.editing) {
        subject.editing = false;
        updateLocalStorage();
      } else {
        subject.editing = true;
      }
    };

    const cancelEdit = (subject) => {
      subject.editing = false;
    };

    const deleteSubject = (subject) => {
      subjects.value = subjects.value.filter(item => item.id !== subject.id);
      updateLocalStorage();
    };

    const addSubject = () => {
      const newSubject = {
        id: subjects.value.length + 1,
        name: `科目 ${subjects.value.length + 1}`,
        editing: false
      };
      subjects.value.push(newSubject);
      updateLocalStorage();
    };

    const searchSubjects = () => {
      searchResults.value = subjects.value.filter(subject => subject.name.includes(searchKeyword.value));
    };

    const updateLocalStorage = () => {
      localStorage.setItem('subjects', JSON.stringify(subjects.value));
      // 触发 Test 页面的更新
      window.dispatchEvent(new Event('storageChange'));
    };

    const saveChanges = () => {
      const editedSubjects = subjects.value.filter(subject => subject.editing);
      editedSubjects.forEach(subject => subject.editing = false);
      updateLocalStorage();
      alert('保存成功！');
    };

    onMounted(() => {
      const storedSubjects = localStorage.getItem('subjects');
      if (storedSubjects) {
        subjects.value = JSON.parse(storedSubjects);
      }
    });

    const goBack = () => {
      router.go(-1); // 返回上一页
    };

    return {
      subjects,
      searchKeyword,
      filteredSubjects,
      editSubject,
      cancelEdit,
      deleteSubject,
      addSubject,
      searchSubjects,
      goBack,
      saveChanges
    };
  }
}
</script>
  
  <style scoped>
  .subject-management {
    font-family: Arial, sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .back-button {
    margin-bottom: 20px;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  .search-bar {
    margin-bottom: 20px;
  }
  
  .subject-list {
    padding: 0;
  }
  
  .subject-item {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .subject-name {
    flex-grow: 1;
  }
  
  .edit-input {
    margin-right: 10px;
  }
  
  .button-group {
    display: flex;
    align-items: center;
  }
  
  .edit-button,
  .cancel-button,
  .delete-button,
  .add-button,
  .save-button {
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .edit-button {
    background-color: #007bff;
    color: #fff;
  }
  
  .cancel-button {
    background-color: #35dcb5;
    color: #fff;
  }
  
  .delete-button {
    background-color: #dc3545;
    color: #fff;
  }
  
  .add-button {
    background-color: #28a745;
    color: #fff;
  }
  
  .save-button {
    background-color: #007bff;
    color: #fff;
  }
  </style>
  