<template>
  <div class="score-wrapper">
    <div class="score">
      <div class="top-wrapper">
          <el-row>
            <el-col :span="12">
                <div class="top-left">
                    <div class="title">必修课</div>
                    <el-table :data="tableData" style="width:100%" stripe :row-style="changeRow" :header-row-style="changeHeader">
                        <el-table-column prop="class" label="课程"></el-table-column>
                        <el-table-column prop="level" label="学分"></el-table-column>
                        <el-table-column prop="index" label="学期"></el-table-column>
                        <el-table-column prop="score" label="成绩"></el-table-column>
                    </el-table>
                </div>
            </el-col>
            <el-col :span="12">
                <div class="top-right">
                    <div class="title">选修课</div>
                    <el-table :data="tableData1" style="width:100%" stripe :row-style="changeRow" :header-row-style="changeHeader">
                        <el-table-column prop="class" label="课程"></el-table-column>
                        <el-table-column prop="level" label="学分"></el-table-column>
                        <el-table-column prop="index" label="学期"></el-table-column>
                        <el-table-column prop="score" label="成绩"></el-table-column>
                    </el-table>
                </div>
            </el-col>
          </el-row>
      </div>
      <div class="bottom-wrapper">
          <table>
              <tr>
                  <td class="biaoti">必修学分:</td>
                  <td class="shuzi" :class="red">22学分</td>
                  <td class="biaoti">应修必修学分:</td>
                  <td class="shuzi">25学分</td>
                  <td class="biaoti">要求最低必修学分:</td>
                  <td class="shuzi">23学分</td>
              </tr>
              <tr>
                  <td class="biaoti">选修学分:</td>
                  <td class="shuzi">4学分</td>
                  <td class="biaoti">应修选修学分:</td>
                  <td class="shuzi" colspan="3">4学分</td>
              </tr>
              <tr>
                  <td class="biaoti">总学分:</td>
                  <td class="shuzi" :class="red">26学分</td>
                  <td class="biaoti">应修总学分:</td>
                  <td class="shuzi">29学分</td>
                  <td class="biaoti">要求最低总学分:</td>
                  <td class="shuzi">27学分</td>
              </tr>
          </table>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data() {
    return {
      tableData: [
        { class: "中国特色社会主义理论与实践", level: 2, index: 1, score: 83},
        { class: "综合外语C", level: 2, index: 1, score: 78 },
        { class: "FPGA系统设计与实验", level: 3, index: 1, score: 80 },
        { class: "高等工程数学", level: 3, index: 1, score: 80 },
        { class: "现代信号处理", level: 3, index: 1, score: 97 },
        { class: "信号检测与估计", level: 3, index: 2, score: 89 },
        { class: "移动通信工程", level: 3, index: 2, score: 95 },
        { class: "智能系统与信息融合", level: 3, index: 1, score: 92 },
      ],
      tableData1: [
        { class: "通信信号处理新技术", level: 2, index: 2, score: 86},
        { class: "无线通信系统建模与仿真", level: 2, index: 2, score: 96 },

      ]
    };
  },
  methods:{
      changeRow({row,rowIndex}){
          if(rowIndex === 1){
              return "background :red"
          }
      },
      changeHeader({row,rowIndex}){
          if(rowIndex === 0){
              return "border-bottom :2px solid rgb(41,128,185)"
          }
      }
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.score-wrapper {
   padding: 20px;
  .score {
    background: #fff;
    padding: 30px;
    .top-wrapper {
      
      
      .el-row{
          border :1px solid rgb(229,229,229)
          .top-left{
              border-right :1px solid rgb(229,229,229)
          }
          .title{
              height :40px
              background :rgb(244,247,249)
              font-size :16px
              line-height :40px
              font-weight bold
              padding-left :20px
          }
      }
    }
    .bottom-wrapper{
        table{
            width :100%
            border-top :1px solid rgb(229,229,229)
            border-left :1px solid rgb(229,229,229)
            border-collapse :collapse
            tr{
                height :40px
                line-height :40px
                td{
                    width :16.6%
                    border-right :1px solid rgb(229,229,229)
                    border-bottom :1px solid rgb(229,229,229)
                }
                .biaoti{
                    padding-right :15px
                    text-align :right
                    background :rgb(244,247,249)
                    font-size :14px
                }
                .shuzi{
                    padding-left :15px
                    text-align :left
                    font-size :14px
                }
            }
        }
    }
  }
}
</style>