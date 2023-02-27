<script>
    import { submitDropzone, fileSent } from '$lib/stores.js'
    import toast from 'svelte-french-toast'

    const handleClick = () => {
        if($fileSent) {
            $submitDropzone()
        }else {
            toast.error('Upload a file before sending form')
        }
    }
</script>

<div class="button-cont">
    <button on:click={ handleClick }>Submit</button>
</div>

<style>
    .button-cont {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 130px;
    }

    button {
        background: var(--secondary-color);
        color: #fff;
        border: none;
        border-radius: 3px;
        padding: 13px;
        font-size: 30px;
        cursor: pointer;
        transition: opacity .3s ease;
    }

    button:hover {
        opacity: 0.8;
    }
</style>