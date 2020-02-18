<template>
  <div class="message-wrapper">
    <div class="message">
      <div class="right-wrapper">
        <div class="base-title">
          <span class="title">基本信息</span>
          <span class="close" @click="closeSpread">-{{spread}}</span>
        </div>
     
        <div class="base-content" v-show="closeOrSpread">
            <div class="img">
              <img src="./linzhen.jpg" width="144px" height="210px" />
            </div>
            <table>
              <tr v-for="(item,index) in rowCompute" :key="index">
                <td>
                  <span class="name">{{base[3*index].name}}:</span>
                  <span class="detail">{{base[3*index].content}}</span>
                </td>

                <td>
                  <span class="name">{{base[3*index+1].name}}:</span>
                  <span class="detail">{{base[3*index+1].content}}</span>
                </td>
                <td>
                  <span class="name">{{base[3*index+2].name}}:</span>
                  <span class="detail">{{base[3*index+2].content}}</span>
                </td>
              </tr>
            </table>
        </div>
       
        <div class="aca-title">
          <span class="title">学业信息</span>
          <span class="close" @click="closeSpread1">-{{spread1}}</span>
        </div>
        <div class="aca-content" v-show="closeOrSpread1">
          <table>
            <tr v-for="(item,index) in rowCompute1" :key="index">
              <td>
                <span class="name">{{aca[3*index].name}}:</span>
                <span class="detail">{{aca[3*index].content}}</span>
              </td>

              <td>
                <span class="name">{{aca[3*index+1].name}}:</span>
                <span class="detail">{{aca[3*index+1].content}}</span>
              </td>
              <td>
                <span class="name">{{aca[3*index+2].name}}:</span>
                <span class="detail">{{aca[3*index+2].content}}</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="left-wrapper"></div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {

  data() {
    return {
      
     base: [
        {
            name: "学号",
            content: 182201180
        },
        {
            name: "国籍",
            content: "中国"
        },
        {
            name: "家庭住址",
            content: "山东省临沂市平邑县铜石镇"
        },
        {
          name: "学号",
            content: 182201180
        },
        {
            name: "民族",
            content: "汉族"
        },
        {
            name: "本科学校",
            content: "青岛大学"
        },
        {
            name: "学号",
            content: 182201180
        },
        {
            name: "政治面貌",
            content: "中国共产主义青年团员"
        },
        {
            name: "婚姻状况",
            content: "未婚"
        },
        {
            name: "学号",
            content: 182201180
        },
        {
            name: "身高",
            content: "187cm"
        },
        {
            name: "体重",
            content: "70kg"
        },
        {
            name: "xingming",
            content: 182201180
        },
        {
            name: "爱好",
            content: "无"
        },
        {
            name: "现就读学校",
            content: "上海师范大学"
        },
        {
            name: "姓名",
            content: "林振"
        },
        {
            name: "学号",
            content: 182201180
        },
        {
            name: "性别",
            content: "男"
        },
        {
            name: "出生日期",
            content: "1996-04-18"
        },
        {
            name: "联系方式",
            content: 19802151553
        },
        {
            name: "邮箱",
            content: "125974423@qq.com"
        },
        {
            name: "家庭电话",
            content: "无"
        },
        {
            name: "宿舍住址",
            content: "上师大4号楼219"
        },
        {
            name: "培养类别",
            content: "非定向"
        }
    ],

      aca: [
        { name: "年级", content: 2018 },
        { name: "入学日期", content: "2018-09-01" },
        { name: "报道日期", content: "2018-09-01" },
        { name: "研究方向", content: "自适应信息处理与无线通信" },
        { name: "所属院系", content: "信息与机电工程学院" },
        { name: "专业", content: "通信与信息系统" },
        { name: "学生类别", content: "全日制学术硕士" },
        { name: "导师", content: "李莉" },
        { name: "学习方式", content: "全日制" },
        { name: "来源", content: "本科应届" },
        { name: "入学方式", content: "硕士统考" },
        { name: "学制", content: "3年" },
        { name: "学习地点", content: "上师大奉贤校区" },
        { name: "预计毕业时间", content: "2021-06" },
        { name: "一卡通号", content: 1000459425 }
      ],
      spread: "收起",
      closeOrSpread: true,
      spread1: "收起",
      closeOrSpread1: true
    };
  },
  computed: {
    rowCompute() {
      //计算我表格具体有多少行，返回一个数组
      console.log(this.base);
      let rowSum = Math.ceil(this.base.length / 3);
      let a = [];
      for (let i = 1; i <= rowSum; i++) {
        a.push(i);
      }
      return a;
    },
    rowCompute1(){
     console.log(this.aca);
      let rowSum = Math.ceil(this.aca.length / 3);
      let a = [];
      for (let i = 1; i <= rowSum; i++) {
        a.push(i);
      }
      return a;
    }
  },
  methods: {
    closeSpread() {
      if (this.closeOrSpread) {
        this.closeOrSpread = false;
        this.spread = "展开";
      } else {
        this.closeOrSpread = true;
        this.spread = "收起";
      }
    },
    closeSpread1() {
      if (this.closeOrSpread1) {
        this.closeOrSpread1 = false;
        this.spread1 = "展开";
      } else {
        this.closeOrSpread1 = true;
        this.spread1 = "收起";
      }
    }
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus'>
.message-wrapper {
  
  

  .message {
    
    height: 100%;
    padding: 50px;

    .right-wrapper {
      background: #fff;

      .base-title {
        margin: 0 20px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba(229, 229, 229, 1);

        .title {
          font-size: 16px;
          font-weight: bold;
        }

        .close {
          padding-right: 20px;
          float: right;
          color: #00a7f7;
          font-size: 12px;
        }
      }

      .base-content {
        position: relative;
        margin: 20px;

        .img {
          position: absolute;
          top :0px
          left :0px
        }

        table {
          font-size: 0px;
          width: 100%;

          tr {
            width: 33%;
            height: 40px;

            .name {
              font-size: 14px;
              color: #77909d;
            }

            .detail {
              font-size: 14px;
            }
          }
        }
      }
      .aca-title{
        margin: 0 20px;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba(229, 229, 229, 1);

        .title {
          font-size: 16px;
          font-weight: bold;
        }

        .close {
          padding-right: 20px;
          float: right;
          color: #00a7f7;
          font-size: 12px;
        } 
      }
      .aca-content{
        margin: 20px;
        table {
          font-size: 0px;
          width: 100%;

          tr {
            width: 33%;
            height: 40px;

            .name {
              font-size: 14px;
              color: #77909d;
            }

            .detail {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>