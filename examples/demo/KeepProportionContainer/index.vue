<template>
  <div class="p-edkpcd">
    <h1>基本使用</h1>
    <h2>宽：200px 高宽百分比：200</h2>

    <div class="p-edkpcd-container">
      <z-Keep-proportion-container :aspect-ratio-percent="200">
        <div class="p-edkpcd-demo"></div>
      </z-Keep-proportion-container>
    </div>

    <!-- bidirectional data binding（双向数据绑定） -->
    <codemirror v-model="code"
                :options="cmOptions"></codemirror>
  </div>
</template>

<script>
import ZKeepProportionContainer from '../../../packages/keep-proportion-container/src/index.vue';

// language js
import 'codemirror/mode/javascript/javascript.js';
// theme css
import 'codemirror/theme/base16-dark.css';
// more codemirror resources
// import 'codemirror/some-resource...'

export default {
  name: 'keep-proportion-container-demo',
  components: { ZKeepProportionContainer },
  data() {
    return {
      code: 'const a = 10',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        // more codemirror options, 更多 codemirror 的高级配置...
      },
    };
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm);
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm);
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode);
      this.code = newCode;
    },
  },
  computed: {
    // codemirror() {
    //   return this.$refs.myCm.codemirror;
    // },
  },
  mounted() {
    console.log('this is current codemirror object', this.codemirror);
    // you can use this.codemirror to do something...
  },
};
</script>

<style lang="scss" scoped>
.p-edkpcd {
  &-container {
    width: 200px;
  }

  &-demo {
    background-color: lightblue;
  }
}
</style>
