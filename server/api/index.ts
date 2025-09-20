export default defineEventHandler((event) => {
  return useRuntimeConfig(event).apiToken // Returns `dev_token`
});
