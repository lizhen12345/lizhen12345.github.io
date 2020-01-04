<template>
  <div class="shouye-wrapper">
    <div class="right-wrapper">
      <div class="top-wrapper">
        <div class="img-wrapper">
          <!-- <img src="./linzhen.jpg" width="80px" height="120px" /> -->
        </div>
        <div class="miaoshu-wrapper">
          <p class="title">
            {{message.name}}
            <span
              v-for="(item,index) in message.des"
              :key="index"
              class="block"
            >{{message.des[index]}}</span>
          </p>
          <dl class="table" v-for="(item,index) in detail" :key="index">
            <dt class="wenzi">{{wenzi[index]}}:</dt>
            <dd class="item">{{item}}</dd>
          </dl>
        </div>
        <div class="right-bottom">
          <span class="button" @click="collect">个人简历</span>
          <span class="button" @click="score">课程成绩</span>
        </div>
        <span class="el-icon-edit-outline"></span>
      </div>
      <div class="middle-wrapper">
        <div class="middle-top">
          <el-dropdown trigger="click" class="caidan">
            <span class="el-dropdown-link" v-if="showFlag">
              学分情况
              <i class="el-icon-arrow-down"></i>
            </span>
            <span class="el-dropdown-link" v-else>
              培养计划
              <i class="el-icon-arrow-down"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item class="item" @click.native="change1()">学分情况</el-dropdown-item>
              <el-dropdown-item class="item" @click.native="change2()">培养计划</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="el-icon-more"></span>
        </div>
        <div class="middle-middle" v-if="showFlag">
          <div class="each-one" v-for="(item,index) in xuefen" :key="index">
            <div class="yuan-wrapper">
              <circleProgress
                width="100"
                radius="7"
                :progress="percentCompute1(index)"
                :barColor="item.color"
                backgroundColor="#f4f7f9"
                :isAnimation="false"
              ></circleProgress>
              <div class="neirong">
                <p class="big-number">{{item.success}}</p>
                <span class="sum">共{{item.zong}}学分</span>
              </div>
            </div>
            <div class="circle-top">{{item.name}}</div>
          </div>
        </div>
        <div class="middle-middle" v-else>
          <div class="each-one" v-for="(item,index) in classes" :key="index">
            <div class="yuan-wrapper">
              <circleProgress
                width="100"
                radius="7"
                :progress="percentCompute2[index]"
                :barColor="item.color"
                backgroundColor="#f4f7f9"
                :isAnimation="false"
              ></circleProgress>
              <div class="neirong">
                <p class="big-number">{{item.success}}</p>
                <span class="sum">共{{item.zong}}门</span>
              </div>
            </div>
            <div class="circle-top">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="bottom-wrapper">
        <div class="bottom-title">学业预警</div>
        <div class="bottom-middle">
          <ul class="ul-wrapper">
              <li class="box" v-for="(item,index) in yujing" :key="index">
                  <span :class="item.icon"></span><br>
                  <span class="text">{{item.name}}</span>
              </li>
          </ul>
        </div>
        <div class="bottom-bottom">
            <ul>
                <li class="level" v-for="(item,index) in level" :key="index">
                    <span class="frist">{{item.dengji}}级预警:</span>
                    <span class="second">{{item.content}}</span>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import circleProgress from "../common/circle-progress";

export default {
  data() {
    return {
      message: {
        name: "林振",
        des: ["全日制学术硕士", "2018"]
      },
      detail: ["上海师范大学", "李莉", "信息与机电工程学院", "通信与信息系统"],
      wenzi: ["学校", "导师", "学院", "专业"],
      xuefen: [
        { name: "总学分", zong: "29", success: "26", color: "#00A7F7", p: 10 },
        {
          name: "必修学分",
          zong: "25",
          success: "22",
          color: "#FFB400",
          p: 20
        },
        { name: "选修学分", zong: "4", success: "4", color: "#FF6e7f", p: 30 }
      ],
      classes: [
        { name: "总门数", zong: "12", success: "11", color: "#00A7F7", p: 10 },
        { name: "必修课", zong: "10", success: "9", color: "#FFB400", p: 20 },
        { name: "选修课", zong: "2", success: "2", color: "#FF6e7f", p: 30 }
      ],
      showFlag: true,
      yujing: [
        { name: "学籍", icon: "el-icon-document" },
        { name: "成绩", icon: "el-icon-notebook-2" },
        { name: "学分", icon: "el-icon-wallet" },
        { name: "开题", icon: "el-icon-thumb" },
        { name: "答辩", icon: "el-icon-cpu" }
      ],
      level :[{dengji:'四',content:'[开题:应开题日期:2019-08-18]'}]
    };
  },
  computed: {
    percentCompute2() {
      
      let percent = [];
      this.classes.forEach(item => {
        let a = Number(item.success);
        let b = Number(item.zong);
        let p = (a / b) * 100;
        percent.push(p);
      });

      return percent;
    }
  },
  methods: {
    percentCompute1(index) {
      let item = this.xuefen[index];
      let a = Number(item.success);
      let b = Number(item.zong);
      let percent = (a / b) * 100;
      return percent;
    },
    change1() {
      this.showFlag = true;
    },
    change2() {
      this.showFlag = false;
    },
    collect(){
      this.$router.push('/message')
      let target=[]
      target[0]='message'
      target[1] = '当前您的位置在：个人管理>个人信息管理'
      this.$emit('recTarget',target)
    },
    score(){
     
      this.$router.push('/score')
      let target=[]
      target[0]='score'
      target[1] = '当前您的位置在：培养管理>课程成绩'
      this.$emit('recTarget',target)
    }
  },
  components: {
    circleProgress
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.shouye-wrapper {
  position: relative;
  height: 100%;
  overflow :hidden
  .right-wrapper {
    position: absolute;
    overflow :auto
    width: 440px;
    height :100%
    top: 0;
    right: -15px;
    background: rgb(255, 255, 255);
    border-left: 1px solid rgba(229, 229, 229, 1);

    .top-wrapper {
      position: relative;
      padding: 20px;
      border-bottom: 1px solid rgba(229, 229, 229, 1);
      height: 240px;

      .img-wrapper {
        margin: 0px 30px 0 0;
        width: 80px;
        height: 120px;
        background: url('./linzhen.jpg');
        background-size: 80px 120px;
      }

      .miaoshu-wrapper {
        position: absolute;
        left: 130px;
        top: 0px;
        width: 290px;

        .title {
          font-size: 16px;

          .block {
            display: inline-block;
            margin-left: 6px;
            background: rgb(255, 180, 0);
            font-size: 14px;
            color: rgb(255, 255, 255);
            border-radius: 2px;
          }
        }

        .table {
          margin-top: 9px;
          padding-bottom: 9px;
          border-bottom: 1px solid rgba(229, 229, 229, 1);
          font-size: 14px;

          .wenzi {
            display: inline;
            margin-right: 10px;
            color: #77909d;
          }

          .item {
            display: inline;
            margin: 0;
          }
        }
      }
    }

    .right-bottom {
      position: absolute;
      bottom: 20px;
      right: 20px;

      .button {
        display: inline-block;
        margin-right: 20px;
        padding: 2px 10px;
        border: 1px solid #eee;
        border-radius: 20px;
      }
    }

    .el-icon-edit-outline {
      position: absolute;
      top: 20px;
      right: 20px;
      display: block;
      padding: 5px 10px;
      font-size: 15px;
      border: 1px solid #eee;
      border-radius: 20px;
    }
    .bottom-wrapper{
        padding :20px
        .bottom-title{
            margin-bottom :20px
            font-size: 16px;
            color: #24292B;
            font-weight: 700;
        }
        .bottom-middle{
            .ul-wrapper{
                padding :0 0 16px 0
                border-bottom :1px solid rgba(229,229,229,1)
                .box{
                    display :inline-block
                    list-style-type :none
                    width :19.7%
                    text-align :center
                    border-right :1px solid rgba(229,229,229,1)
                    color :rgb(77,200,255)
                    font-size :16px
                    &:last-child{
                        border-right :none
                    }
                    .text{
                        padding-top :12px
                    }
                }
            }
        }
        .bottom-bottom{
            ul{
                padding-left :0
            }
            .level{
                padding-left :5px
                font-size :0
                list-style-type :none
                border-left :5px solid rgba(77,200,255,1)
                .frist{
                    margin-right :2px
                    font-size :12px
                    color :#77909d
                }
                .second{
                    font-size :12px
                    color :#333
                }
            }
        }
    }
  }

  .middle-wrapper {
    padding: 20px;
    border-bottom: 1px solid rgba(229, 229, 299, 1);

    .middle-top {
      position: relative;

      .caidan {
        .el-dropdown-link {
          font-size: 16px;
          color: #24292B;
          font-weight: 700;
        }

        .item {
          font-size: 14px;
        }
      }

      .el-icon-more {
        float: right;
      }
    }

    .middle-middle {
      margin-top: 20px;

      .each-one {
        display: inline-block;
        width: 33%;

        .yuan-wrapper {
          display: flex;
          position: relative;
          align-items: center;
          justify-content: center;

          .neirong {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -31px;
            margin-left: -30px;
            text-align: center;

            .big-number {
              font-size: 32px;
              margin: 0;
            }

            .sum {
              color: #77909d;
            }
          }
        }

        .circle-top {
          text-align: center;
          color: #000;
        }
      }
    }
  }
}
</style>