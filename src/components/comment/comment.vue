<template>
<div class="comment-bag">
    <div class="comment-wrapper">
        <section style="border-top: 2px solid #eaecef;padding-top:1rem;margin-top:2rem;">
            <div>
            <!-- id 将作为查询条件 -->
                <span class="leancloud-visitors"
                        data-flag-title="Your Article Title">
                    <span class="post-meta-item-text">阅读量： </span>
                    <i class="leancloud-visitors-count"></i>
                </span>
            </div>
            <h3>
            <a href="javascript:;"></a>
            评 论：
            </h3>
            <div id="vcomments"></div>
        </section>
    </div>
</div>

 
</template>
 
<script>
export default {
  name: 'Valine',
  mounted: function () {
    // require window
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      document.getElementsByClassName('leancloud-visitors')[0].id
        = window.location.pathname
      this.window = window
      window.AV = require('leancloud-storage')
    }
 
    new Valine({
      el: '#vcomments',
      appId: 'HX0vbXkV7D5sfhgdqPSfi6k5-gzGzoHsz',// your appId
      appKey: 'iRF6gMvm3WrK7MO080sDxTXf', // your appKey
      notify: false,
      verify: false,
      path: window.location.pathname,
      visitor: true,
      avatar: 'monsterid',
      placeholder: '欢迎留下您的看法'
    });
  },
}
</script>



<style lang='stylus' rel='stylesheet/stylus'>
#vcomments {
  max-width 740px
  padding 10px
  display block;
  margin-left auto;
  margin-right auto;
}
.comment-wrapper{
    width :740px
    margin :0 auto
    background :#fff
}
.leancloud-visitors-count{
    font-style normal
}
</style>