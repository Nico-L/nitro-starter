import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)
  const data = await $fetch<Repo[]>(process.env.BASEROW_URL+'669051/' + id + '/?user_field_names=true', {
    method: 'PATCH',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
    },
    body: body
  })

  return data
})
