<script>
    import logo from '$lib/assets/logo.png'
    import logoSmall from '$lib/assets/logoSmall.png'

    let innerWidth
</script>

<svelte:window bind:innerWidth={ innerWidth } />

<nav>
    <a href="./" data-sveltekit-reload>
        {#if innerWidth < 550}
            <img src={ logoSmall } alt="Cover Face Logo">
        {:else}
            <img src={ logo } alt="Cover Face Logo">
        {/if}
    </a>
</nav>

<style>
    nav {
        margin-bottom: 40px;
        width: var(--body-width);
    }
    
    img {
        height: 40px;
    }
</style>