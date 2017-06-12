<template>
  <div class="champ-list-container">
    <champ v-for="champ in champs" :champ="champ"></champ>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  Vue.use(VueResource);
  import champ from './Champ.vue';

  export default {
    name: 'Champions',
    data(){
      return {champs:[]};
    },
    created() {
      return this.$http
        .get('app/champs/champs.get')
        .then(response=>response.json())
        .then(response=>{
          this.champs = response;
        });
    },
    components:{
      champ
    }
  };
</script>
