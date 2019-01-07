<template>
  <div id="vcomments"></div>
</template>

<script>
export default {
  name: 'Valine',
  mounted: function(){
    // require window 
    const Valine = require('valine');
    if (typeof window !== 'undefined') {
      this.window = window
      window.AV = require('leancloud-storage')
      
    }
     
    new Valine({
      el: '#vcomments' ,
      appId: 'h8AK0ePa0DV6D43Q8vUsIEzV-gzGzoHsz',// your appId
      appKey: 'gM8SuafnfWSjT2BteGBScANJ', // your appKey
      visitor: true, // 阅读量统计
      path:window.location.pathname,
      notify:false, 
      verify:true, 
      avatar:'mp', 
      placeholder: '你可以在这发表你的评论' 
    });
  },
}
</script>