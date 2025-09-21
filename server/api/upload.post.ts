import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('body', body)
  var dataFile = new FormData()
    dataFile.append('file', body.files)
  const data = await $fetch<Repo[]>('https://api.baserow.io/api/user-files/upload-file/', {
    method: 'POST',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS,
      "Content-Type": "multipart/form-data"
    },
    body: dataFile
  })

  return data
})
