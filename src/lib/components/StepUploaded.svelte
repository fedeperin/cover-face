<script>
    import { originalImage, modifiedImage } from '$lib/stores.js'
    import { onMount } from 'svelte'

    onMount(async () => {
        await import('two-up-element')
    })
</script>

<two-up>
    <img src={ $originalImage } alt="Uploaded by User">
    <img src={ $modifiedImage } alt="Modified">
</two-up>

<a href={ $modifiedImage } download>Download Modified Image.</a>

<style>
    two-up img {
        width: var(--body-width);
        object-fit: cover;
    }
</style>