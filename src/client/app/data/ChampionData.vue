<script>
  import Vue from 'vue';
  import VueResource from 'vue-resource';
  Vue.use(VueResource);

  export default {
    name: 'ChampionData',
    data() {
      return {
        champions: []
      };
    },
    created() {
      return this.$http
        .get('app/techs/techs.json')
        .then(response => response.json())
        .then(response => {
          this.techs = response;
        });
    },
    components: {
      tech
    }
  };
</script>
