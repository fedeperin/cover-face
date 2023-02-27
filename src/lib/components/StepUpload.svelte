<script>
    import Dropzone from '$lib/components/Dropzone.svelte'
    import SelectMode from '$lib/components/SelectMode.svelte'
    import SubmitButton from '$lib/components/SubmitButton.svelte'
    
    import { fly } from 'svelte/transition'
</script>

<div class="upload-step" transition:fly>
    <Dropzone />
    <SelectMode />
    <SubmitButton />
</div>