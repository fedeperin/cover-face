<script>
    import { fly } from 'svelte/transition'
    import { selectedMode } from '$lib/stores.js'

    export let displayName
    export let name
    export let url
</script>

<label for={name} transition:fly={{duration: 200, y: -100}}>
    <img src={ url('ugqfs0pxzn4msaceq5kv') } alt={ displayName }>
    <input type="radio" name="mode" id={ name } bind:group={ $selectedMode } value={ name }>
    <p>{ displayName }</p>

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
</style>