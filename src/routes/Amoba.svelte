<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
  // @ts-nocheck
  export let ad = "Ötöd-ölő";
  var n = "O", sx = 30, sy = 20, ny = "", tn = 0
  var t = []
  function bt() {
    tn = 0
    t = Array(sy)
      .fill(0)
      .map(() => Array(sx).fill(""))
  }
  bt()
  function step(x, y) {
    var xp, yp, maxh
    if (!ny && !t[y][x]) {
      t[y][x] = n = n != "O" ? "O" : "X"
      tn++
      [[1, 1], [1, 0], [0, 1], [-1, 1]].forEach((v) => {
        xp = x, yp = y, maxh = 0
        while (t[yp] && t[yp][xp] == n) xp += v[0], yp += v[1], maxh++
        xp = x, yp = y
        while (t[yp] && t[yp][xp] == n) xp -= v[0], yp -= v[1], maxh++
        if (maxh > 5) ny = n
      })
    }
  }
</script>

<div>
  <h1>{ad}</h1>
  <table>
    {#each t as row, y}
      <tr>
        {#each row as c, x}
          <td on:click={() => step(x, y)} class={c}>{c}</td>
        {/each}
      </tr>
    {/each}
  </table>
  <br />
  <div class="menu" class:hide={!ny}>Nyert: {ny}</div>
  <div class="menu" class:hide={tn == 0}>
    <button class="p" on:click={bt}>Új játszma</button>
  </div>
</div>

<style>
  table {
    border: solid 1px gray;
    border-radius: 6px;
    padding: 10px;
    background-color: rgb(233, 217, 175);
    border-spacing: 4px;
    margin: auto;
  }
  td {
    width: 20px;
    height: 20px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 3px inset rgb(137, 137, 125);
    background-color: blanchedalmond;
    color: rgb(203, 207, 168);
  }
  .O,
  .X {
    box-shadow: 1px 1px 3px rgb(111, 93, 93);
    cursor: default;
  }
  .O {
    background-color: rgb(32, 92, 72);
  }
  .X {
    background-color: rgb(125, 68, 49);
  }
</style>
