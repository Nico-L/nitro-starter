import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  /*const data = await $fetch<Repo[]>(process.env.BASEROW_URL, {
    method: 'GET',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
    }
  }) */

  return process.env.BASEROW_URL
})
