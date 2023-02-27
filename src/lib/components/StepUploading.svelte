<script>
    import { SyncLoader } from 'svelte-loading-spinners'
</script>

<div class="loader-container">
    <SyncLoader color="var(--primary-color)" size="150" duration="0.6s" />
</div>

<style>
    .loader-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: var(--body-width);
        height: 350px;
        border: 2px solid var(--light-color);
        border-radius: 7px;
    }
</style>