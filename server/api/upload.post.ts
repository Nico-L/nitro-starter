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
  console.log('received data', formDataBody)
   // Append the data to a new FormData (need to convert Buffer into string / Blob)
  var forms=[]
  var retour = []
   formDataBody?.forEach((value) => {
       const formData = new FormData()
       if (value.data) {
         const blob = new Blob([value.data], { type: value.type });
         formData.append('file', blob)
       
         try{
            var data = await zeFetch(formData) 
          } catch (e) {
            console.log('error', e)
          }
         retour.push(data)
     }
   })
  console.log('retour', retour)
  return retour
})
