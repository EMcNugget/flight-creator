<script lang="ts">
  import * as Card from '$lib/components/ui/card/index.js';
</script>

<div class="mb-12 flex flex-col items-center gap-2">
  <h1 class="text-4xl font-bold text-white text-shadow-lg">vBS - Virtual Bid System</h1>
  <p class="font-semibold text-white text-shadow-lg">Your flight sim schedule made simple</p>
</div>
<Card.Root
  class="
      relative w-full max-w-md
      rounded-2xl
      border
      border-white/15
      bg-white/10 shadow-2xl
      shadow-black/60 backdrop-blur-xl  
      before:pointer-events-none before:absolute
      before:inset-0
      before:rounded-2xl before:bg-linear-to-br before:from-white/20 before:via-transparent
      before:to-transparent
      before:opacity-50
    "
>
  <Card.Header class="border-b border-white/10">
    <Card.Title class="text-xl text-white">Card Title</Card.Title>
    <Card.Description class="text-slate-300">Card Description</Card.Description>
  </Card.Header>

  <Card.Content class="text-slate-200">
    <p>Card Content</p>
  </Card.Content>

  <Card.Footer class="border-t border-white/10 text-slate-400">
    <p>Card Footer</p>
  </Card.Footer>
</Card.Root>
