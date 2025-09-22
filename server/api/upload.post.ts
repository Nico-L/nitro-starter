import { Repo } from '~/types'

async function zeFetch (form): Promise<number> {
  return $fetch<Repo[]>('https://api.baserow.io/api/user-files/upload-file/', {
              method: 'POST',
              headers: {
                'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
              },
              body: form
            })
}

export default defineEventHandler(async (event) => {
  const formDataBody = await readMultipartFormData(event)
   // Append the data to a new FormData (need to convert Buffer into string / Blob)
  var retour = []
  for (const form of formDataBody) {
       const formData = new FormData()
       if (form.data) {
         const blob = new Blob([form.data], { type: form.type });
         formData.append('file', blob)
       
         try{
            var data = await zeFetch(formData) 
          } catch (e) {
            console.log('error', e)
          }
         retour.push(data)
       }
   }
  return retour
})
