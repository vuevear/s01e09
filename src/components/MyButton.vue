<template>
  <button class="bg-blue-700 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-500 rounded" @click="onClick">
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="text">{{ text }}</span>
    <slot v-else></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',

  props: {
    text: { type: String, default: "" },
    isLoading: { type: Boolean, default: false }
  },

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>
