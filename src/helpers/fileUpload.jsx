import Swal from "sweetalert2"

export const fileUpload = async ( file ) =>{
    const cloudUrl='https://api.cloudinary.com/v1_1/dwkcka2tc/upload'
    const cloudReference = 'react-journal-app'

    const formData = new FormData()
    formData.append('upload_preset', cloudReference)
    formData.append('file', file)

    try {
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        })

        if( resp.ok ){
            const cloudResp = await resp.json()
            Swal.fire('Saved', 'Image has been uploaded', 'success')
            return cloudResp.secure_url
        }else{
            Swal.fire('Error', 'Image has not been uploaded', 'error')
        }

    } catch (error) {
        Swal.fire('Error', 'Image has not been uploaded', 'error')
    }
}