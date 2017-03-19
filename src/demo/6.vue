
<template>
  <div>
    <p><input v-model="question"></p>
    {{result}}
  </div>
</template>

<script>
  import _ from 'lodash';
  import axios from 'axios';
  
  export default {
    data() {
      return {
        question: '',
        result: _.capitalize('hello aihao'),
      };
    },
  
    watch: {
      question() {
        this.result = '正在输入……';
        this.getResult();
      },
    },
  
    methods: {
      getResult: _.debounce(function a() {
        this.result = '查询中……';
        axios.get('https://yesno.wtf/api')
          .then((res) => {
            this.result = _.capitalize(res.data.answer);
          })
          .catch((err) => {
            this.result = `发生错误：${err}`;
          });
      }, 500),
    },
  };
</script>
