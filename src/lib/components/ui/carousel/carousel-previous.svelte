<script lang="ts">
  import ChevronLeft from '@lucide/svelte/icons/chevron-left';
  import type { WithoutChildren } from 'bits-ui';
  import { getEmblaContext } from './context.js';
  import { cn } from '$lib/utils.js';
  import { Button, type Props } from '$lib/components/ui/button/index.js';

  let {
    ref = $bindable(null),
    class: className,
    variant = 'outline',
    size = 'icon',
    ...restProps
  }: WithoutChildren<Props> = $props();

  const emblaCtx = getEmblaContext('<Carousel.Previous/>');
</script>

<Button
  data-slot="carousel-previous"
  {variant}
  {size}
  aria-disabled={!emblaCtx.canScrollPrev}
  class={cn(
    'absolute size-8 rounded-full bg-slate-200/50 shadow-md transition-opacity hover:bg-slate-200/70 disabled:opacity-50',
    emblaCtx.orientation === 'horizontal'
      ? '-start-12 top-1/2 -translate-y-1/2'
      : 'start-1/2 -top-12 -translate-x-1/2 rotate-90',
    className
  )}
  onclick={emblaCtx.scrollPrev}
  onkeydown={emblaCtx.handleKeyDown}
  {...restProps}
  bind:ref
>
  <ChevronLeft class="size-4" />
  <span class="sr-only">Previous slide</span>
</Button>
