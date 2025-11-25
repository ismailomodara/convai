<template>
  <UApp>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup lang="ts">
const config = useRuntimeConfig()
console.log(config)

const appConfig = useAppConfig()
useHead({
  title: appConfig.title,
})
</script>