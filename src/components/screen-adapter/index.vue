<template>
  <div class="screen-adapter">
    <div class="content-wrap" :style="style">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  data() {
    return {
      style: {
        width: `${this.w}px`,
        height: `${this.h}px`,
        transform: 'scale(1) translate3d(-50%, -50%, 0)', // 默认不缩放，垂直水平居中
      },
    };
  },
  props: {
    w: {
      // 设计图尺寸宽
      type: Number,
      default: 1920,
    },
    h: {
      // 设计图尺寸高
      type: Number,
      default: 1080,
    },
  },
  mounted() {
    this.setScale();
    this.onresize = this.debounce(() => this.setScale(), 100);
    window.addEventListener('resize', () => {
      this.onresize();
    });
  },
  methods: {
    // 防抖
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    debounce(fn: any, t: number) {
      const delay = t || 500;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let timer: any;
      // eslint-disable-next-line func-names
      return function (this: any) {
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        if (timer) {
          clearTimeout(timer);
        }
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        console.log(context);
        timer = setTimeout(() => {
          timer = null;
          fn.apply(context, args);
        }, delay);
      };
    },
    // 获取缩放比例
    getScale() {
      console.log(window.innerHeight, window.innerWidth, '-----');
      const w = parseFloat((window.innerWidth / this.w).toFixed(5));
      const h = parseFloat((window.innerHeight / this.h).toFixed(5));
      console.log(w, h, w < h ? w : h);
      return w < h ? w : h;
    },
    // 设置缩放比例
    setScale() {
      this.style.transform = `scale(${this.getScale()}) translate3d(-50%, -50%, 0)`;
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onresize);
  },
})
export default class ScreenAdapter extends Vue {}
</script>

<style lang="less">
.screen-adapter {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #030a1d;
  background-image: linear-gradient(to bottom, #0a084b, #010228);

  .content-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0 0;
  }
}
</style>
