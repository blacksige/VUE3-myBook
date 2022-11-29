<template>
  <div class="index_box">
    <div class="center_box">
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      <div>
        <p :class="{ text_roll: rollFlag === 0 }" @click="openLink(0)">
          git 撤销已提交的代码、恢复因git reset --hard造成的文件丢失
        </p>
        <el-divider />
      </div>
      <div>
        <p :class="{ text_roll: rollFlag === 1 }" @click="openLink(1)">
          读取json文件的两种方式：js的XMLHttpRequest 与 jQuery的$.getJSON
        </p>
        <el-divider />
      </div>
      <div>
        <p :class="{ text_roll: rollFlag === 2 }" @click="openLink(2)">
          vue 2.+与vue3.+的区别
        </p>
        <el-divider />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onUnmounted } from 'vue';

// 文字动态
let rollFlag = ref(0);
let timer: any = null;
function rollControl() {
  if (rollFlag.value === 0) {
    rollFlag.value = 1;
  } else if (rollFlag.value === 1) {
    rollFlag.value = 2;
  } else if (rollFlag.value === 2) {
    rollFlag.value = 0;
  }
}
timer = setInterval(() => {
  rollControl();
}, 10000);
onUnmounted(() => {
  clearInterval(timer);
});

// 内容跳转
const links = [
  'https://www.cnblogs.com/ifeelthecall/p/16282246.html',
  'https://www.cnblogs.com/ifeelthecall/p/16550825.html',
  'https://www.cnblogs.com/ifeelthecall/p/15380325.html',
];
function openLink(flag: number) {
  window.open(links[flag]);
}
</script>

<style lang="less" scoped>
.index_box {
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  .center_box {
    width: 350px;
    height: 290px;
    padding: 20px 40px;
    border-radius: 9px;
    border: #ebe9c3 9px double;
    background-color: rgba(210, 201, 142, 0.6);
    & > div {
      width: 100%;
      overflow: hidden;
      font-weight: 500;
      font-size: 16px;
      cursor: pointer;
      color: rgb(98, 98, 98);
      &:hover {
        color: #5aacfa;
      }
      .text_roll {
        position: relative;
        display: inline-block;
        white-space: nowrap;
        animation: slide-left 10s infinite linear;
      }
    }
  }
}
.el-divider /deep/ {
  border-color: #ebe9c3;
}
@keyframes slide-left {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
</style>
