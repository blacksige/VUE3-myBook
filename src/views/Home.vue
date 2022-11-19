<template>
  <ScreenAdapter>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :default-openeds="['1', '3']">
            <el-sub-menu index="1">
              <template #title>
                <el-icon><message /></el-icon>
                Navigator One
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="1-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>Option4</template>
                <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><icon-menu /></el-icon>
                Navigator Two
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="2-1">Option 1</el-menu-item>
                <el-menu-item index="2-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="2-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="2-4">
                <template #title>Option 4</template>
                <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-sub-menu index="3">
              <template #title>
                <el-icon><setting /></el-icon>
                Navigator Three
              </template>
              <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-main>
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
      </el-main>
    </el-container>
  </ScreenAdapter>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ScreenAdapter from '@/components/screen-adapter/index.vue';
@Options({
  components: {
    HelloWorld,
    ScreenAdapter,
  },
  setup() {
    const about = ref('Welcome to Your Vue.js + TypeScript App');
    return about;
  },
})
export default class Home extends Vue {
  about!: string;
}
</script>

<style lang="less" scope>
.el-container /deep/ {
  height: 100%;
}
</style>
