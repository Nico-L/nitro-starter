import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  const receivedData = await readMultipartFormData(event)
  console.log('received data', receivedData.data)
  const formData = new FormData()
  const blob = new Blob(receivedData.data, { type: receivedData.type });
  formData.append(receivedData.name, blob)
  console.log('blob', receivedData.data)
  const data = await $fetch<Repo[]>('https://api.baserow.io/api/user-files/upload-file/', {
    method: 'POST',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
    },
    body: formData
  })

  return data
})
