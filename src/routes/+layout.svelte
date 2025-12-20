<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  import * as Avatar from '$lib/components/ui/avatar/index.js';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import { goto } from '$app/navigation';
  import Plane from '@lucide/svelte/icons/plane';

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>vBS</title>
</svelte:head>

<main
  class=" flex min-h-screen flex-col items-center justify-between bg-linear-135 from-slate-950 via-blue-950 to-zinc-950 py-4 font-['Ubuntu'] tracking-wide"
>
  <div class="flex w-full justify-between border-b border-white/10 px-6 pb-4">
    <div class="flex items-center space-x-6">
      <h1
        class="bg-linear-to-r from-cyan-400 to-blue-300 bg-clip-text text-2xl font-bold text-transparent drop-shadow-[0_2px_12px_rgba(56,189,248,0.35)]"
      >
        vBS
      </h1>
      <span class="text-2xl tracking-tighter text-slate-300">--</span>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="/bid" class="text-slate-300 hover:text-slate-200">Bid</a></li>
          <li><a href="/schedule" class="text-slate-300 hover:text-slate-200">Schedule</a></li>
        </ul>
      </nav>
    </div>
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button class="ml-6 rounded-full p-1 hover:bg-white/10">
            <Avatar.Root class="h-8 w-8">
              <Avatar.Image
                src="https://www.gravatar.com/avatar/?d=mp"
                alt="User Avatar"
                class="h-full w-full rounded-full"
              />
              <Avatar.Fallback class="h-full w-full rounded-full bg-slate-700 text-slate-300">
                U
              </Avatar.Fallback>
            </Avatar.Root>
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          align="end"
          class="w-48 rounded-lg border border-white/10 bg-white/5 p-2 text-slate-200 backdrop-blur-sm"
        >
          <DropdownMenu.Item
            class="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-blue-600 hover:text-slate-200"
            onclick={() => goto('/profile')}
          >
            <Plane class="h-4 w-4" />
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Item
            class="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-red-600 hover:text-slate-200"
            onclick={() => goto('/logout')}
          >
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  </div>
  <div class="my-auto flex w-full flex-col items-center justify-center">
    {@render children()}
  </div>
  <footer class="grid w-full items-center text-sm text-slate-500">
    <p class="justify-self-center">
      Powered by <a
        href="https://www.flightaware.com/commercial/aeroapi/"
        class="text-blue-500 hover:underline"
        target="_blank">FlightAware</a
      >
    </p>
  </footer>
</main>
