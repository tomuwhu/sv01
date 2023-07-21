<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>SV01</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Cica
	</h1>

	<Counter />
</section>

<style>

</style>
