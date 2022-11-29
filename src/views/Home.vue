<template>
  <ScreenAdapter>
    <div class="content">
      <div class="aside">
        <Menu></Menu>
      </div>
      <div class="main">
        <router-view />
      </div>
    </div>
  </ScreenAdapter>
</template>

<script lang="ts" setup>
// import Hello from '@/components/HelloWorld.vue';
import ScreenAdapter from '@/layout/screen-adapter/index.vue';
import Menu from '@/components/menu/index.vue';
</script>

<style lang="less" scoped>
.el-container /deep/ {
  height: 100%;
}
.content {
  width: 100%;
  height: 100%;
  .aside {
    position: absolute;
    top: 20px;
    width: 200px;
    opacity: 0.8;
  }
  .main {
    width: inherit;
    height: inherit;
  }
}
</style>
