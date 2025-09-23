import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  const data = await $fetch<Repo[]>(process.env.BASEROW_URL+'669051/?user_field_names=true&order_by=-date&filters={"filter_type":"AND","filters":[{"type":"date_is_after","field":"date","value":"Europe/Paris??today"}],"groups":[]}, {
    method: 'GET',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
    }
  })

  return data
})
