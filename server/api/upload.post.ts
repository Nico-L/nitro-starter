import { Repo } from '~/types'

export default defineEventHandler(async (event) => {
  const formDataBody = await readMultipartFormData(event)
  console.log('received data', formDataBody)
   // Append the data to a new FormData (need to convert Buffer into string / Blob)
  var forms=[]
  var retour = []
   formDataBody?.forEach((value) => {
       const formData = new FormData()
       if (value.name && value.data) {
         const blob = new Blob([value.data], { type: value.type });
         formData.append('file', blob)
       }
     forms.push(formData)
   })
console.log('forms', forms)
forms?.forEach( async (form) => {
  console.log('bob ?')
  try{
    var data = await $fetch<Repo[]>('https://api.baserow.io/api/user-files/upload-file/', {
          method: 'POST',
          headers: {
            'Authorization': 'Token ' + process.env.BASEROW_DEVOIRS
          },
          body: form
        })
  } catch (e) {
    console.log('error', e)
  }
 console.log('data', data)
 retour.push(data) 
})
  console.log('retour', retour)
  return retour
})
