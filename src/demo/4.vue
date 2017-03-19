
<template>  
  <div>
    <p><input v-model="fullName"></p>
    <input v-model="firstName"><input v-model="lastName">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        firstName: 'ai',
        lastName: 'hao',
      };
    },
    computed: {
      fullName: {
        get() {
          // console.log(`lastName:${this.lastName}`);
          return `${this.firstName} ${this.lastName}`;
        },
        set(fullName) {
          const names = fullName.split(' ');
          this.firstName = names[0];
          this.lastName = names[names.length - 1];
          // console.log(`firstName: ${this.firstName} == lastName: ${this.lastName}`);
        },
      },
    },
  };
</script>
