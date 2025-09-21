import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
    console.log('body', body)
  const data = await $fetch<Repo[]>('https://api.baserow.io/api/user-files/upload-file/', {
    method: 'POST',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
    },
    body: body
  })

  return data
})
