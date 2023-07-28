<script>
	import Amoba from './Amoba.svelte'
  import Valasz from './Valasz.svelte'
	var ap = 1, h1 = ["Amőba", "Válasz mindenre", "Mindkettő"]
  $: hap = h1[ap]
</script>

<svelte:head>
	<title>{hap}</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="menu">
    {#each h1 as elem, i}
      {#if ap == i}
        <button class="a">{hap}</button>
      {:else}
        <button 
          on:click={() => ap = i }
          class="p"
        >{h1[i]}</button>
      {/if}
    {/each}
  </div>
  <div class:hide={ap == 0}><Valasz /><br><br></div>
  <hr  class:hide={ap != 2}>
  <div class:hide={ap == 1}>
    <Amoba ad={ap == 0 ? "Amőba egyedül" : "Amőba"} />
  </div>
</section>

<style>
  * {
    user-select: none;
    margin: 0px;
  }
</style>
