<script setup lang='ts'>
const route = useRoute()
let no = route.path.slice(1)
if (no.startsWith('x'))
  no = no.slice(1)

const hide = Boolean(route.query.shot || route.query.hideFrame)
const active = ref(false)
</script>

<template>
  <div v-if="!hide" font-normal font-mono class="note" :class="[{ active }]">
    <div
      class="handle"
      fixed text-center
      border="~ gray-200"
      text="~ center gray-400"
      bg="~ white opacity-50"
      @click="active = true"
    >
      i
    </div>
    <div
      class="modal-bg"
      bg-black
      fixed top-0 left-0 bottom-0 right-0
      @click="active = false"
    />

    <div
      class="content"
      border="~ gray-200"
      fixed bottom-0
      bg-white shadow p8
    >
      <slot />

      <br>

      <a link mr-3 :href="`https://github.com/antfu/dz-css/blob/main/src/pages/${no}.vue`">
        source
      </a>
    </div>
  </div>
</template>

<style lang='stylus' scoped>
.note
  .handle
    left calc(50% - 20px)
    width 40px
    height 40px
    bottom -2px
    line-height 40px
    cursor default

  .content
    pointer-events none
    left 50%
    width 500px
    max-width 100vw
    min-height 100px
    transform translate(-50%, 110%)
    transition 0.3s all ease-in-out

  .modal-bg
    pointer-events none
    opacity 0
    transition 0.2s opacity ease-in-out

.note.active
  .content
    display block
    transform translate(-50%, 0)
    pointer-events auto
  .modal-bg
    opacity 0.2
    pointer-events auto
</style>
