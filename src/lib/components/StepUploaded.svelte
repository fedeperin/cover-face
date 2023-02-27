<script>
    import { originalImage, modifiedImage } from '$lib/stores.js'
    import { onMount } from 'svelte'

    let originalImageReference
    let originalWidth, originalHeight

    const handleImageLoad = () => {
        originalHeight = originalImageReference.naturalHeight
        originalWidth = originalImageReference.naturalWidth
    }

    onMount(async () => {
        await import('two-up-element')
    })
</script>

<two-up>
    <img src={ $originalImage } alt="Uploaded by User" bind:this={ originalImageReference } on:load={ handleImageLoad }>
    <img src={ $modifiedImage } alt="Modified" style="width: { originalWidth }; height: { originalHeight };">
</two-up>

<a href={ $modifiedImage } download>Download Modified Image.</a>

<style>
    two-up img {
        width: var(--body-width);
        object-fit: cover;
    }
</style>