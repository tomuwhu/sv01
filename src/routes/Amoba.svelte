<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
// @ts-nocheck
  export let ad = "Ötöd-ölő"
  var n = "O", sx = 30, sy = 20, tn = 0
  var t = []  // Üres táblázat
  function bt() {
    tn = 0
    t = Array(sy)
        .fill(0)
        .map(() => 
          Array(sx).fill("")
        )
  }
  bt()
</script>

<div>
  <h1>{ad}</h1>
  <table>
    {#each t as row, y}
      <tr>
        {#each row as c, x}
          <td 
            on:click = {() => {
              if (!t[y][x]) {
                t[y][x] = n = n != "O" ? "O" : "X";
                tn++
              }
            }}
            class = { c }
          >{ c }</td>
        {/each}
      </tr>
    {/each}
  </table>
  <br>
  <div class="menu" class:hide={tn == 0}>
    <button class="p"  on:click={bt}>Új játszma</button>
  </div>
</div>

<style>
  table {
    border: solid 1px gray;
    border-radius: 6px;
    padding: 10px;
    background-color:rgb(233, 217, 175);
    border-spacing: 4px;
    margin: auto;
  }
  td {
    width: 20px; height: 20px;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 1px 1px 3px inset rgb(137, 137, 125);
    background-color: blanchedalmond;
    color: rgb(203, 207, 168);
  }
  .O, .X {
    box-shadow: 1px 1px 3px rgb(111, 93, 93);
    cursor: default;
  }
  .O { background-color: rgb(32, 92, 72);  }
  .X { background-color: rgb(125, 68, 49); }
</style>