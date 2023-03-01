<script>
    import ModeCard from '$lib/components/ModeCard.svelte'
    import { selectedMode, modesExpanded } from '$lib/stores.js'
    import { faceCoverData } from '$lib/cloudinary.js'
	import { onMount } from 'svelte'

    let faceCoverDataCopy = [...faceCoverData]
    let cardNumber = 4
    let innerWidth

    selectedMode.set(faceCoverDataCopy[0].name)

    const showMore = () => {
        modesExpanded.update(prevMode => !prevMode)
    }
    
    const handleResize = () => {
        if(innerWidth < 1200) {
            cardNumber = 3
        } else {
            cardNumber = 4
        }

        faceCoverDataCopy = faceCoverDataCopy
    }

    onMount(() => {
        handleResize()
    })
</script>

<svelte:window bind:innerWidth={ innerWidth } on:resize={ handleResize } />

<h3>Choose Face Cover: </h3>
<div class="mode-select">
    {#each faceCoverDataCopy as { name, displayName, url }, i}
        {#if i < cardNumber || ($modesExpanded && i >= cardNumber)}
            <ModeCard { name } { displayName } { url } />
        {/if}
    {/each}
</div>

<div class="show-more-cont">
    <button class="show-more" on:click={ showMore }>{ $modesExpanded ? 'Show Less' : 'Show More' }</button>
</div>

<style>
    .mode-select {
        display: grid;
        grid-template-columns: repeat(var(--card-number), 1fr);
        grid-gap: 10px;
        width: var(--body-width);
    }
    
    h3 {
        margin-bottom: 15px;
        font-size: 25px;
        font-weight: normal;
    }

    button.show-more {
        text-align: right;
        margin-top: 15px;
        cursor: pointer;
        margin-bottom: 30px;
        color: #fff;
        background: var(--primary-color);
        border: none;
        padding: 8px;
        border-radius: 3px;
        font-size: 16px;
        transition: opacity .3s ease;
    }

    button.show-more:hover {
        opacity: 0.8;
    }

    .show-more-cont {
        display: flex;
        justify-content: end;
    }
</style>