import { writable } from 'svelte/store'

export const imageStatus = writable({
    status: 'READY',
    error: null
})

export const originalImage = writable(null)
export const modifiedImage = writable(null)
export const selectedMode = writable('')
export const facesDetected = writable(0)
export const modesExpanded = writable(false)
export const fileSent = writable(false)
export const dragging = writable(false)
export const submitDropzone = writable(() => {})