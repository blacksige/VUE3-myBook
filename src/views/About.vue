<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="about" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { ref } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
  data() {
    const about = ref('关于');
    return {
      about,
    };
  },
})
export default class About extends Vue {}
</script>
