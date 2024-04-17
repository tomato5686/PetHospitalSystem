<template>
    <div class="demo-container">
      <router-link to="/Guide" class="guide-button">返回上级</router-link>
      <div id="viewer"></div>
      <div class="navigation-container">
        <div class="navigation-box">
          <ul class="item-container">
            <li
              v-for="(item, index) in itemArr"
              :key="index"
              class="navigation-item"
              :class="{ 'active': selectedTitle === item.title }"
              @click="setViewer(item.img, item.title, item.description)"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="description-container">
        <div v-if="selectedDescription" class="description-panel">
          <div v-if="!isCollapsed(selectedTitle)" class="description-content">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { Viewer } from 'photo-sphere-viewer'
  import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
  
  import { MarkersPlugin } from 'photo-sphere-viewer/dist/plugins/markers'
  import 'photo-sphere-viewer/dist/plugins/markers.css'
  
  export default {
    name: 'demo',
    data() {
      return {
        viewer: '',
        markersPlugin: '',
        selectedTitle: '',
        selectedDescription: '',
        itemArr: [
          {
            img: './3Dimg/前台区.jpg',
            title: '前台区',
            description: '包括接待挂号、导医咨询、病历档案发出与回收、收费等。'
          },
          {
            img: './3Dimg/档案室.jpg',
            title: '档案室',
            description: '包括病例档案的合理保存与数据统计等。'
          },
          {
            img: './3Dimg/门诊室.jpg',
            title: '门诊室',
            description: '包括诊室的布局介绍；对宠物进行临床基本检查（视、听、触、嗅等）、疾病诊断；与宠物主人交流并根据情况开具处方。'
          },
          {
            img: './3Dimg/免疫室.jpg',
            title: '免疫室',
            description: '包括为健康宠物接种疫苗的流程，对常见并发症的处理流程，对常见免疫相关问题的解答等。'
          },
          {
            img: './3Dimg/化验室.jpg',
            title: '化验室',
            description: '包括对送检样本的预处理，对相应样本进行血常规、血液生化、电解质、血气、血凝指标、激素指标、尿常规、微生物学检查、药敏、皮肤刮片、粪便检查、传染病检查等检查操作流程。'
          },
          {
            img: './3Dimg/影像学检查室.jpg',
            title: '影像学检查室',
            description: '包括X线检查、B超检查以及CT、MRI检查。如X线检查：X光机的结构功能介绍、全身各部位的摆位、拍摄条件的选择、拍摄流程、洗片的操作流程。B超检查：扫查探头的选择、全身各个部位扫查的摆位、腹部扫查流程。'
          },
          {
            img: './3Dimg/专科检查室.jpg',
            title: '专科检查室',
            description: '包括对眼科、骨科、神经科、心脏科等专科疾病的检查，如眼科（检眼镜检查、眼压检查、裂隙灯检查、眼底检查、泪液分泌量检查等）、心脏科检查（心脏听诊、心电图检查等）、神经学检查（步态检查、各种反射检查等）等。'
          },
          {
            img: './3Dimg/处置室.jpg',
            title: '处置室',
            description: '包括口服投药、换药、清洗耳道、挤肛门腺、修剪指甲、鼻饲管放置、灌肠、安乐死等基本处置操作流程。'
          },
          {
            img: './3Dimg/药房.jpg',
            title: '药房',
            description: '包括对各种药物的存放要求、处方的审核流程、药物的发放流程、常见药物的使用说明等。'
          },
          {
            img: './3Dimg/注射室.jpg',
            title: '注射室',
            description: '包括静脉注射、皮下注射、肌肉注射、局部封闭注射的操作流程，常见问题的处理方法，输液泵、加热垫的使用方法，注射室的消毒流程。'
          },
          {
            img: './3Dimg/手术准备室.jpg',
            title: '手术准备室',
            description: '包括术前对宠物进行麻前给药、注射麻醉、吸入麻醉的流程，保定、剃毛、消毒的流程，常见手术器械的介绍，手术器械包的准备、灭菌流程，手术人员的消毒、穿戴手术衣流程等。'
          },
          {
            img: './3Dimg/手术室.jpg',
            title: '手术室',
            description: '包括手术室的布局介绍，手术室消毒流程，手术无菌要求，常规手术、特殊手等的操作规范。'
          },
          {
            img: './3Dimg/住院部.jpg',
            title: '住院部',
            description: '包括对需要住院的病例进行护理分级，不同护理级别的要求，住院部的工作流程，住院部的消毒流程等。'
          },
          {
            img: './3Dimg/病理剖检室.jpg',
            title: '病理剖检室',
            description: '包括对病死动物剖解的流程，病理剖检室的消毒流程，病历剖检过程的人员要求，病理剖检过程中的人道关怀。'
          }
        ],
        collapsedState: {}
      }
    },
    methods: {
      setViewer(panorama, title, description) {
        if (this.viewer) {
          try {
            this.viewer.destroy()
          } catch (e) {
            console.log(e)
            const viewer = document.querySelector('#viewer')
            viewer.removeChild(viewer.childNodes[0])
          }
        }
  
        this.selectedTitle = title;
        this.selectedDescription = description;
  
        this.viewer = new Viewer({
          container: 'viewer',
          navbar: ['autorotate', 'zoom', 'caption', 'fullscreen'],
          lang: {
            autorotate: '自动旋转',
            zoom: '缩放',
            zoomOut: '缩小',
            zoomIn: '放大',
            fullscreen: '全屏'
          },
          panorama: panorama,
          size: {
            width: '1586px',
            height: '800px'
          },
          minFov: 30,
          maxFov: 90,
          defaultZoomLvl: 60,
          fisheye: false,
          defaultLong: 0,
          defaultLat: 0,
          plugins: [
            [
              MarkersPlugin,
              {
                markers: []
              }
            ]
          ],
          caption: title,
          description: description
        })
  
        this.viewer.once('ready', () => {
          console.log('ready')
        })
  
        this.markersPlugin = this.viewer.getPlugin(MarkersPlugin)
  
        this.markersPlugin.on('select-marker', (e, marker) => {
          console.log('select-marker e:', e)
          console.log('marker:', marker)
          if (e.args[0].config.note) this.setViewer(this.itemArr[e.args[0].config.note].img, this.itemArr[e.args[0].config.note].title, this.itemArr[e.args[0].config.note].description)
        })
  
        this.viewer.on('click', (e, data) => {
          console.log('data', data)
          const num = 1 + Math.round(Math.random() * 3)
          console.log('num:', num)
          this.markersPlugin.addMarker({
            id: `mark${Math.random() * 10}`,
            tooltip: `<p>点击标注跳去${num + 1}全景图</p></p><img style="width:100px;height:100px;" src= ${img6} />`,
            html: `
              <p class="remark">点击标注跳去${num + 1}全景图</p>
              <p class="remark">这里是标记${Math.floor(data.longitude * 200) / 100} - ${Math.floor(data.latitude * 200) / 100}</p>
              <img  src=${img7} />
            `,
            longitude: data.longitude,
            latitude: data.latitude,
            anchor: 'center center',
            note: num
          })
          let configArr = Object.keys(this.markersPlugin.markers).map((item) => this.markersPlugin.markers[item].config)
          localStorage.setItem('configArr', JSON.stringify(configArr))
        })
      },
      
      toggleCollapse(title) {
        this.$set(this.collapsedState, title, !this.collapsedState[title]);
      },
      isCollapsed(title) {
        return this.collapsedState[title];
      }
    },
    mounted() {
      this.setViewer(this.itemArr[0].img, this.itemArr[0].title, this.itemArr[0].description)
      const configArr = JSON.parse(localStorage.getItem('configArr'))
      this.viewer.once('ready', () => {
        configArr.forEach((item) => {
          this.markersPlugin.addMarker(item)
        })
      })
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .demo-container {
    position: relative;
    min-width: 1439px;
    margin: 0 auto;
  }
  
  #viewer {
    margin: 0 auto;
  
    ::v-deep .psv-container {
      .psv-marker {
        border: 1px solid white;
        padding: 10px;
  
        .remark {
          padding: 10px 15px;
          color: white;
        }
  
        img {
          width: 50px;
          height: 40px;
          margin: 0 auto;
          display: block;
        }
      }
  
      .psv-tooltip {
        .psv-tooltip-content {
          img {
            width: 100px;
            height: 100px;
            margin: 0 auto;
            display: block;
          }
        }
      }
    }
  }
  
  .navigation-container {
    display: flex;
    justify-content: center;
  }
  
  .navigation-box {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
  }
  
  .item-container {
    text-align: center;
    margin: 0;
    padding: 0;
    list-style: none;
  
    .navigation-item {
      cursor: pointer;
      display: inline-block;
      padding: 10px 20px;
      border: 1px solid #ccc;
      margin: 5px;
      transition: background-color 0.3s;
  
      &:hover {
        background-color: blue;
        color: white;
      }
  
      &.active {
        background-color: blue;
        color: white;
      }
    }
  }
  .guide-button {
    display: inline-block;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
    font-size: 20px;
  }
  
  .guide-button:hover {
    background-color: #0056b3;
  }
  
  .back-button {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
  
  .description-container {
    margin-top: 20px;
  }
  
  .description-panel {
    margin-bottom: 10px;
  }
  
  .collapse-button {
    cursor: pointer;
  }
  
  .description-content {
    margin-top: 10px;
  }
  </style>
  