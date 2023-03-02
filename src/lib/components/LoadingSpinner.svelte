<script>
    import { Circle } from 'svelte-loading-spinners'
    import { onMount } from 'svelte'

    let loading = true

    onMount(() => {
        loading = false
    })
</script>

{#if loading}
    <div class="loader">
        <Circle color="var(--primary-color)" />
    </div>
{/if}

<style>
    .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        background: #eee;
    }
</style>