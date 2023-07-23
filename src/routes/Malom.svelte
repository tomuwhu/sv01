<script>
    import { onMount } from "svelte"
    const endpoint = "data.txt"

    onMount(async function () {
        const response = await fetch(endpoint)
        const data = await response.json()
        adat = data.Cica
    })
    var adat = ""
</script>

Malom {adat}