<template>
<span v-if="type" class='iconfont icon-dianzan' @click="love"></span> 
<span v-else class='iconfont icon-dianzan1' @click="love"></span> 
</template>

<script type='text/ecmascript-6'>
export default{
    data(){
        return{
            type :false
        }
    },
    methods:{
        love(){
            debugger
                this.type = !this.type
        }
    }
    
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
.icon-dianzan{
    color :red
}
</style>    