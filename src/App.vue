<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";
import theme from "@/utils/theme.js"
export default  {
  name:  'App',
  created(){
    // 恢复主题
    theme.restoreCss()
  }
}
</script>
