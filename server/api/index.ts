export default defineEventHandler(() => {
  return useRuntimeConfig(event).apiToken
})
