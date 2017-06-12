<template>
  <div class="champ" v-bind:data-champ-id="champ.id">
    <img class="champ-icon" v-bind:src="champ.icon" />
    <h3 class="champ-name">
      {{ champ.name }}
    </h3>
  </div>
</template>
<script>
  export default {
    name: 'Champ',
    props: ['champ']
  };
</script>
