<script>
    import { dragging, fileSent } from '$lib/stores.js'
    import { cloudinaryUploadURL } from '$lib/cloudinary.js'
    
    import { initDropzone } from '$lib/dropzone.js'
    
    initDropzone()
</script>

{#if !$fileSent}
    <form action={ cloudinaryUploadURL } id="dropzone" class="rectangle-container">
        <i class="bx bxs-cloud-upload { $dragging ? 'darker': '' }" />
        <p class={ $dragging ? 'darker': '' }>Drag and Drop image here</p>
        <span class={ $dragging ? 'darker big': 'big' }>or</span>
        <button>Browse Files</button>
        <span class="small">Accepted File Types: .jpg, .png and .webp</span>
    </form>
{:else}
    <div class="rectangle-container rectangle-uploaded">
        <i class="bx bx-check"></i>
        <p>File Uploaded</p>
    </div>
{/if}

<style>
    .rectangle-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: var(--body-width);
        height: 320px;
        border-radius: 7px;
        margin-bottom: 40px;
    }

    .rectangle-uploaded {
        border: 2px solid #64a700;
    }

    .rectangle-uploaded p {
        font-size: 30px;
        font-weight: bold;
        color: var(--light-color);
    }

    .rectangle-uploaded i {
        color: #64a700;
    }

    form {
        border: 2px dashed var(--light-color);
    }

    form * {
        transition: color .3s ease;
        pointer-events: none;
    }

    form i {
        color: var(--light-color);
    }

    i.bx {
        font-size: 100px;
    }

    form p {
        font-size: 25px;
        color: var(--light-color);
        font-weight: bold;
    }

    form span.big {
        font-size: 30px;
        font-weight: bold;
        color: var(--light-color);
    }
    
    form span.small {
        font-size: 17px;
        margin-top: 15px;
        color: var(--light-color);
    }

    .darker {
        color: var(--hard-light-color);
    }

    form button {
        border: none;
        margin-top: 20px;
        background: var(--primary-color);
        color: #fff;
        font-size: 23px;
        padding: 10px;
        border-radius: 3px;
    }
</style>