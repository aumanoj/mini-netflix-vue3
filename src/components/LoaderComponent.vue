<script setup>
defineProps({
  loading: Boolean
})
</script>
<template>
  <div v-if="loading" class="loader-container">
    <div class="loader"></div>
  </div>
</template>
