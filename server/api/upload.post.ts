import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  const form = await readMultipartFormData(event)
  console.log('form', form)
  const data = await $fetch<Repo[]>('https://api.baserow.io/api/user-files/upload-file/', {
    method: 'POST',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
    },
    body: form
  })

  return data
})
