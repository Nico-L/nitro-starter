import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  const formDataBody = await readMultipartFormData(event)
  console.log('received data', formDataBody[0])
  const formData = new FormData()
   // Append the data to a new FormData (need to convert Buffer into string / Blob)
         formDataBody?.forEach((value) => {
             if (value.name && value.data) {
               const blob = new Blob([value.data], { type: value.type });
               formData.append('file', blob)
             }
         })
  const data = await $fetch<Repo[]>('https://api.baserow.io/api/user-files/upload-file/', {
    method: 'POST',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
    },
    body: formData
  })

  return data
})
