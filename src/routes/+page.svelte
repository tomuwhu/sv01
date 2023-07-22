<script>
	import Amoba from './Amoba.svelte'
  import Malom from './Malom.svelte'
	var ap = 0
	var h1 = ["Amőba", "Malom"]
</script>

<svelte:head>
	<title>SV01</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  {#if ap > 0}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <h2 on:click={() =>
    ap--
  }>{h1[ap - 1]}</h2>
  {/if}
  <h1>{h1[ap]}</h1>
  {#if ap < h1.length - 1}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <h2 on:click={() =>
    ap++
  }>{h1[ap + 1]}</h2>
  {/if}
  <hr>
  {#if ap == 0}
  <Amoba />
  {/if}
  {#if ap == 1}
  <Malom />
  {/if}
</section>

<style>
  h1, h2 {
    display: inline-block;
  }
  h2 {
    cursor: pointer;
    color: gray;
  }
  h2:hover {
    color: red;
  }
</style>
