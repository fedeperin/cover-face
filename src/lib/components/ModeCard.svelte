<script>
    import { fly } from 'svelte/transition'
    import { selectedMode } from '$lib/stores.js'

    export let data
    const { displayName, name, url, beta } = data
</script>

<label for={name} transition:fly={{duration: 200, y: -100}}>
    <img src={ url('ugqfs0pxzn4msaceq5kv') } alt={ displayName }>
    <input type="radio" name="mode" id={ name } bind:group={ $selectedMode } value={ name }>

    <div class={ beta ? 'card-info beta-cont' : 'card-info' }>
        <p>{ displayName }</p>

        {#if beta}
            <span class="beta">BETA</span>
        {/if}
    </div>
</label>

<style>
    input {
        display: none;
    }

    label {
        border: .5px solid var(--light-color);
        border-radius: 5px;
        padding: 20px;
        cursor: pointer;
        transition: background .3s ease;
    }
    
    label img {
        width: 100%;
        border-radius: 5px;
        margin-bottom: 7px;
    }
    
    label:has(input:checked) {
        border-width: 3px;
        background: #ebebeb;
    }
    
    label p {
        display: flex;
    }

    .card-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    .beta-cont {
        margin-bottom: -10px;
    }

    .card-info span {
        background: var(--secondary-color);
        padding: 4px 10px;
        border-radius: 40px;
        color: #fff;
    }

    .beta {
        position: relative;
        display: flex;
        justify-content: center;
        font-size: 14px;
    }

    .beta:hover::before {
        content: "Maybe this option doesn't work correctly";
        position: absolute;
        background: var(--primary-color);
        padding: 7px;
        top: -70px;
        width: 95px;
        font-size: 13px;
        text-align: center;
        border-radius: 10px;
    }
</style>