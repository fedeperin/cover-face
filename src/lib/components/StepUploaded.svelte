<script>
    import { originalImage, modifiedImage, facesDetected } from '$lib/stores.js'
    import { onMount } from 'svelte'

    onMount(async () => {
        await import('two-up-element')
    })
</script>

<two-up>
    <img src={ $originalImage } alt="Uploaded by User">
    <img src={ $modifiedImage } alt="Modified">
</two-up>

<div class="data">
    <p class="faces-detected">Faces Detected: { $facesDetected }</p>
    <a href={ $modifiedImage } class="download">Download Modified Image.</a>
</div>

<style>
    two-up img {
        width: var(--body-width);
        object-fit: cover;
    }

    .data {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 130px;
        margin-top: 10px;
    }

    .download {
        padding: 10px;
        text-decoration: none;
        background: var(--primary-color);
        color: #fff;
        font-size: 20px;
        border-radius: 2px;
        transition: opacity .3s ease;
    }

    .download:hover {
        opacity: .8;
    }

    .faces-detected {
        font-size: 20px;
    }

    @media (max-width: 550px) {
        .data {
            flex-direction: column;
            align-items: start;
        }

        .faces-detected {
            margin-bottom: 10px;
        }
    }
</style>