<script setup lang="ts">
const appConfig = useAppConfig()

const title = computed(() => {
  return `Chat - ` + appConfig.title
})
useHead({
  title
})

const { chat, messages, sendMessage } = useChat()


</script>

<template>
  <ChatWindow :chat :messages @send-message="sendMessage" />
</template>