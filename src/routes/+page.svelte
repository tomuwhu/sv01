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
  <button on:click={() =>
    ap--
  }>{h1[ap - 1]}</button>
  {/if}
  <h1>{h1[ap]}</h1>
  {#if ap < h1.length - 1}
  <button on:click={() =>
    ap++
  }>{h1[ap + 1]}</button>
  {/if}
  <hr>
  <div style="display:{ap == 0 ? 'block' : 'none'}">
    <Amoba />
  </div>
  <div style="display:{ap == 1 ? 'block' : 'none'}">
    <Malom />
  </div>
</section>

<style>
  h1, button {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 300;
    font-size: 20px;
  }
  h1 {
    display: inline-block;
  }
  button {
    cursor: pointer;
    color: gray;
    border: none;
  }
  button:hover {
    color: red;
  }
</style>
