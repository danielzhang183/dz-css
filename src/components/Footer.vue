<template>
  <nav text-xl mt-6 inline-flex gap-2>
    <button link @click="toggleDark()">
      <div dark:i-carbon-moon i-carbon-sun />
    </button>

    <a
      link i-carbon-logo-github
      rel="noreferrer"
      href="https://github.com/danielzhang183/dz-css"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
