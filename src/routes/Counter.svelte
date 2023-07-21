<script>
	var table = Array(20).fill("").map(v => Array(20).fill(""))
	/**
     * @param {{ target: { id: { split: (arg0: string) => [undefined, Number, Number]; }; }; }} e
     */
	function f(e) {
		var x, y
		[,x,y] = e.target.id.split("o")
		table[y][x] = "O"
	}
</script>

<div>
	<table>
		{#each table as row, y}
		<tr>
			{#each row as cell, x}
				<td on:click={f} id=o{x}o{y}o>{cell}</td>
			{/each}
		</tr>
		{/each}
	</table>

</div>

<style>
	td {
		width: 20px;
		height: 20px;
		border: solid 1px black;
		user-select: none;
		cursor: pointer;
	}
	table {
		margin: auto;
	}
</style>
