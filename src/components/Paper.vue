<script setup lang='ts'>
import { ref } from 'vue'
import { useEventListener, useFullscreen, useTitle } from '@vueuse/core'
import { useRoute } from 'vue-router'
import { works } from '../works'

const fullscreen = useFullscreen(ref(document.querySelector('html')))

useEventListener('keydown', (e) => {
  if (document.activeElement === document.body) {
    if (e.key === 'f') {
      if (fullscreen.isFullscreen.value)
        fullscreen.exit()
      else
        fullscreen.enter()
    }
  }
})

const route = useRoute()
let no = route.path.slice(1)
if (no.startsWith('x'))
  no = no.slice(1)

const shot = Boolean(route.query.shot)
const hideFrame = Boolean(route.query.hideFrame)
const index = works.findIndex(i => i.no === no)

const work = works[index]
const prev = works[index - 1]
const next = works[index + 1]

useTitle(work ? `${no}. ${work.name}` : '404')
</script>

<template>
  <div paper :class="[shot]">
    <div v-if="work" class="bottom-nav" font-mono flex z-10>
      <div class="nav-links">
        <router-link v-if="prev" class="prev link" :to="`/${prev.no}`">
          <span>{{ prev.name }}</span>
          <span mx-1 opacity-25>{{ prev.no }}</span>
        </router-link>
        <div class="current">
          <span font-bold>{{ work.name }}</span>
          <span mx-1 opacity-50>{{ work.no }}</span>
        </div>
        <router-link v-if="next" class="next link" :to="`/${next.no}`">
          <span>{{ next.name }}</span>
          <span mx-1 opacity-25>{{ next.no }}</span>
        </router-link>
      </div>
      <div flex-auto />
      <div flex flex-col>
        <div flex-auto />
        <span text-gray-300>{{ work.date }}</span>
      </div>
    </div>

    <div v-if="!shot && !hideFrame" class="nav" font-mono>
      <router-link
        link
        text-xl block pt-1 i-carbon-chevron-left
        to="/"
      />
    </div>

    <slot :work="work" />
  </div>
</template>

<style lang='stylus' scoped>
.nav
  position fixed
  top 0
  left 0
  right 0
  padding 12px

.bottom-nav
  position fixed
  bottom 0
  left 0
  right 0
  padding 8px 12px

.shot .nav
  padding 24px

.shot .bottom-nav
  padding 20px 24px

.nav-links
  .next, .prev
    opacity 0
    transition .3s all ease-in-out
    margin-top -1.5em
    display block

.nav-links:hover
  .next, .prev
    opacity 1
    margin-top 0
</style>
