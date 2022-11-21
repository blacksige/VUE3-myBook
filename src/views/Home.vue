<template>
  <component :is="ScreenAdapter">
    <div class="content">
      <div class="aside">
        <component :is="Menu"></component>
      </div>
      <div class="main">
        <div class="center_box">
          <img alt="Vue logo" src="../assets/logo.png" />
        </div>
      </div>
    </div>
  </component>
</template>

<script lang="ts" setup>
// import Hello from '@/components/HelloWorld.vue';
import Adapter from '@/components/screen-adapter/index.vue';
import menu from '@/components/menu/index.vue';
import { ref } from 'vue-demi';
// const HelloWorld = ref(Hello);
const ScreenAdapter = ref(Adapter);
const Menu = ref(menu);
</script>

<style lang="less" scoped>
.el-container /deep/ {
  height: 100%;
}
.el-button--primary /deep/ {
  border-radius: 50%;
  width: 65px;
  height: 65px;
}
.el-dropdown + .el-dropdown /deep/ {
  margin-left: 15px;
}
.content {
  width: 100%;
  height: 100%;
  .aside {
    position: absolute;
    top: 20px;
    width: 200px;
  }
  .main {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    .center_box {
      width: 400px;
      padding: 40px;
      border-radius: 9px;
      border: #ebe9c3 9px double;
      background-color: rgba(210, 201, 142, 0.6);
    }
  }
}
</style>
