<script>
    import { imageStatus } from '$lib/stores.js'
    import toast, { Toaster } from 'svelte-french-toast'
    import Nav from '$lib/components/Nav.svelte'
    import Footer from '$lib/components/Footer.svelte'

    imageStatus.subscribe(({ error }) => {
        if(error) {
            toast.error(error)
        }
    })
</script>

<Toaster />

<Nav />
<slot />
<Footer />