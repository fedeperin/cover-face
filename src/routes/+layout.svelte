<script>
    import { imageStatus, fileSent } from '$lib/stores.js'
    import toast, { Toaster } from 'svelte-french-toast'
    import Nav from '$lib/components/Nav.svelte'
    import Footer from '$lib/components/Footer.svelte'
    import LoadingSpinner from '$lib/components/LoadingSpinner.svelte'

    imageStatus.subscribe(({ error, status }) => {
        if(status == 'UPLOADING') {
            fileSent.set(false)
        }
        
        if(error) {
            toast.error(error)
        }
    })
</script>

<LoadingSpinner />
<Toaster />

<Nav />
<slot />
<Footer />