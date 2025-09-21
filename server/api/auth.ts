import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  const data = await $fetch<Repo[]>('https://api.baserow.io/api/user-source/668266/token-auth', {
    method: 'POST'
  })

  return data
})

