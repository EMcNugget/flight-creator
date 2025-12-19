<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import * as Avatar from '$lib/components/ui/avatar/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import { goto } from '$app/navigation';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>vBS</title>
</svelte:head>

<main
  class=" flex min-h-screen flex-col items-center justify-between bg-linear-135 from-slate-950 via-blue-950 to-zinc-950 font-['Ubuntu'] tracking-wide"
>
  <div class="my-auto flex w-full flex-col items-center justify-center">
    {@render children()}
  </div>
  <footer class="grid w-full items-center py-4 text-sm text-slate-500">
    <p class="justify-self-center">
      Powered by <a
        href="https://www.flightaware.com/commercial/aeroapi/"
        class="text-blue-500 hover:underline"
        target="_blank">FlightAware</a
      >
    </p>
  </footer>
</main>
