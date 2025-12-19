<script lang="ts">
  import Progress from '$lib/components/ui/progress/progress.svelte';

  let { value = 0, message = '' } = $props();
</script>

<div class="flex w-full flex-col items-center justify-center space-y-4">
  <p class="text-center text-xl text-slate-300">
    {message}
    <span class="inline-flex w-6 justify-start">
      <span class="animate-pulse">.</span>
      <span class="animate-pulse [animation-delay:200ms]">.</span>
      <span class="animate-pulse [animation-delay:400ms]">.</span>
    </span>
  </p>
  <Progress {value} class="h-4 w-1/2 bg-slate-600 *:bg-linear-to-r *:from-cyan-700 *:to-blue-500" />
  <p class="text-center text-lg text-slate-300">{value}%</p>
</div>
