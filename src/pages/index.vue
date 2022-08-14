<script setup lang="ts">
import { works } from '../works'

const avaliable_works = works.filter(i => !i.draft)
</script>

<template>
  <div paper>
    <div
      centered max-h-full w-full md:w-auto
      p="~ t-[60px] r-[40px] b-[30px] l-[40px]"
    >
      <h1 text-lg font-bold mb-4>
        DZ CSS
      </h1>

      <pre grid="~ cols-1 sm:cols-2 lg:cols-3" gap="~ x-4 y-1">
        <router-link
          v-for="work in avaliable_works"
          :key="work.no"
          :to="`/${work.no}`"
          flex mr-4 link
        >
          <span mr-2 opacity-50>{{ work.no }}</span>
          <b>{{ work.name }}</b>
        </router-link>
      </pre>

      <Footer />
    </div>
  </div>
</template>

