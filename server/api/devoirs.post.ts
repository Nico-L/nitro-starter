import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
    const query = getQuery(event);
  const data = await $fetch<Repo[]>(process.env.BASEROW_URL+'669051/?user_field_names=true', {
    method: 'GET',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
    }
  })

  return query
})
