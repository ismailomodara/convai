<script setup lang="ts">
const appConfig = useAppConfig()

const title = computed(() => {
  return `Chat - ` + appConfig.title
})
useHead({
  title
})

const typing = ref(false)
const { chat, messages, sendMessage } = useChat()

const handleSendMessage = async (message: string) => {
  typing.value = true
  await sendMessage(message)
  typing.value = false
}
</script>


<template>
  <ChatWindow :chat :messages :typing @send-message="handleSendMessage" />
</template>