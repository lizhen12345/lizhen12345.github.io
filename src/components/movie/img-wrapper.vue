<template>
  <div>
    <div class="img-wrapper1" @mouseenter="enter" @mouseleave="leave" @click="openMovie()">
      <div class="img-father">
        <img :src="oneMovie.url" class="photo" />
        <div class="watch-wrapper"  v-show="showFlag">
          <span class="iconfont icon-guankan"></span>
        </div>
        <span class="time" v-show="showFlag">
          <span class="iconfont icon-shijian"></span>
          {{oneMovie.time}}
        </span>
      </div>
    </div>
    <div class="movie-detail">
      <p class="date" :class="{'active':showFlag}">拍摄日期：{{oneMovie.date}}</p>
      <p class="place" :class="{'active':showFlag}">拍摄地点：{{oneMovie.place}}</p>
      <p class="info" :class="{'active':showFlag}">拍摄内容：{{oneMovie.info}}</p>
      <favorite class="favorite"></favorite>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import favorite from "../photos/favorite";
export default {
  props: {
    oneMovie: {
      type: Object
    }
  },
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    enter() {
      this.showFlag = true;
    },
    leave() {
      this.showFlag = false;
    },
    openMovie() {
      //将子组件中的点击事件告诉父组件movie，
      this.$emit("openMovie", this.oneMovie.src);
    }
  },
  components: {
    favorite
  }
};  
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.img-wrapper1 {
  padding-top: 10px;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  

  .img-father {
    position: relative;

    .photo {
      max-height: 150px;
      max-width: 100%;
    }

    .watch-wrapper {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .icon-guankan{
        font-size :30px
      }
    }

    .time {
      position: absolute;
      bottom: 5px;
      left: 0;
      font-size :14px
      color :#fff
      .icon-shijian{
        font-size :14px
      }
    }
  }
}

.movie-detail {
  margin-top: 5px;
  position: relative;

  .date, .info, .place {
    margin: 0;
    font-size: 14px;
    color: #212121;

    &.active {
      color: #00a1d6;
    }
  }

  .favorite {
    position: absolute;
    bottom: 20px;
    right: 30px;
  }
}
</style>