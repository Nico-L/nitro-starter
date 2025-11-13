import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  var url = process.env.BASEROW_URL
  url = url + "669051/?user_field_names=true"
  const order = "order_by=-date"
  const filtre = "filters=%7B%22filter_type%22%3A%22AND%22%2C%22filters%22%3A%5B%7B%22type%22%3A%22date_is_after%22%2C%22field%22%3A%22date%22%2C%22value%22%3A%22Europe%2FParis%3F1%3Fnr_days_from_now%22%7D%5D%2C%22groups%22%3A%5B%5D%7D"
  const data = await $fetch<Repo[]>(url+"&"+order+"&"+filtre, 
  {
    method: 'GET',
    headers: {
      'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
    }
  })

  return data
})
