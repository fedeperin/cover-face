<script>
    export const ssr = false

    import { imageStatus, facesDetected } from '$lib/stores.js'

    import StepUpload from '$lib/components/StepUpload.svelte'
    import StepUploading from '$lib/components/StepUploading.svelte'
    import StepUploaded from '$lib/components/StepUploaded.svelte'
</script>

<svelte:head>
    <title>Cover Face</title>
</svelte:head>

<main>
    {#if $imageStatus.status == 'READY'}
        <StepUpload />
    {:else if $imageStatus.status == 'UPLOADING'}
        <StepUploading />
    {:else if $imageStatus.status == 'SUCCESS'}
        <StepUploaded />
        <p>Faces Detected: { $facesDetected }</p>
    {/if}
</main>