<template>
<div id="comment">
<br><br><br><br>
<span :id="pathName" class="leancloud-visitors" data-flag-title="文章阅读量统计">
    <em class="post-meta-item-text">本页面访问次数： </em>
    <i class="leancloud-visitors-count"></i>
</span>

<h2 v-show="isValine">留言</h2>
<Valine v-show="isValine"/>
</div>
</template>
<script>
import Valine from "./Valine";
export default {
  components: { Valine },
  props:{
    isValine:{
      type:Boolean,
      default:true
    }
  },
  data(){
    return {
      pathName:window.location.pathname
    }
    
  }
}
</script> -->
