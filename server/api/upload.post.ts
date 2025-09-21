import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
    var dataFile = new FormData()
    dataFile.append('file', body)
    console.log('datafile', body)
  const data = await $fetch<Repo[]>('https://api.baserow.io/api/user-files/upload-file/', {
    method: 'POST',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
    },
    body: dataFile
  })

  return data
})
