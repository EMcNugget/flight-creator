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
  class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden
         bg-linear-135 from-slate-950 via-blue-950 to-zinc-950 p-6"
>
  {@render children()}
  <footer
    class="absolute bottom-0 grid w-full grid-cols-3 items-center px-4 py-2 text-sm text-slate-500"
  >
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <button {...props} class="cursor-pointer hover:opacity-80">
            <Avatar.Root>
              <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
          </button>
        {/snippet}
      </DropdownMenu.Trigger>

      <DropdownMenu.Content
        class="mb-2 w-56 border border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-lg"
        align="start"
      >
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Group>
          <DropdownMenu.Item onclick={() => goto('/preferences')}>Account Preferences</DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
    <p class="justify-self-center">
      Powered by <a
        href="https://www.flightaware.com/commercial/aeroapi/"
        class="text-blue-500 hover:underline"
        target="_blank">FlightAware</a
      >
    </p>
  </footer>
</main>
