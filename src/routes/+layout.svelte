<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<main
  class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden
         bg-linear-135 from-slate-950 via-blue-950 to-zinc-950 p-6"
>
  {@render children()}
  <footer class="absolute bottom-0 p-4 text-sm text-slate-500">
    <p>
      Powered by <a
        href="https://www.flightaware.com/commercial/aeroapi/"
        class="text-blue-500 hover:underline">FlightAware</a
      >
    </p>
  </footer>
</main>
