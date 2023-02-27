import { 
    imageStatus,
    originalImage,
    modifiedImage,
    selectedMode,
    facesDetected,
    dragging,
    fileSent,
    submitDropzone
} from '$lib/stores.js'

import {
    faceCoverData,
    preset,
    apiKey
} from '$lib/cloudinary.js'

import Dropzone from 'dropzone'

import { onMount } from 'svelte'
import { get } from 'svelte/store'

export const initDropzone = () => {
    onMount(() => {
        const dropzone = new Dropzone('#dropzone', {
            uploadMultiple: false,
            acceptedFiles: '.jpg,.png,.webp',
            maxFiles: 1,
            disablePreviews: true,
            autoProcessQueue: false
        })
    
        submitDropzone.set(() => dropzone.processQueue())
    
        dropzone.on('dragenter', () => dragging.set(true))
        dropzone.on('dragleave', () => dragging.set(false))
    
        dropzone.on('addedfile', file => {
            console.log(JSON.stringify(file))
            if(file.upload.total != 0) {
                fileSent.set(true)
            }else {
                dragging.set(false)
            }
        })
    
        dropzone.on('sending', (file, hxr, formData) => {
            imageStatus.set(
                {
                    status: 'UPLOADING',
                    error: null
                }
            )
    
            formData.append('upload_preset', preset)
            formData.append('timestamp', (Date.now() / 1000))
            formData.append('api_key', apiKey)
        })
    
        dropzone.on('success', (file, response) => {
            const numFacesDetected = response.coordinates.faces.length
            facesDetected.set(numFacesDetected)
    
            if(numFacesDetected != 0) {
                const { secure_url: url, public_id: publicId } = response
    
                modifiedImage.set(faceCoverData.filter(obj => obj.name == get(selectedMode))[0].url(publicId))
    
                imageStatus.set(
                    {
                        status: 'SUCCESS',
                        error: null
                    }
                )
                originalImage.set(url)
            }else {
                imageStatus.update(prevImgStatus => {
                    return {
                        status: prevImgStatus.status,
                        error: 'No Faces Detected'
                    }
                })
            }
        })
    
        dropzone.on('error', (file, response) => {
            imageStatus.update(prevImgStatus => {
                return {
                    status: prevImgStatus.status,
                    error: response
                }
            })

            console.error(response)
        })
    })
}