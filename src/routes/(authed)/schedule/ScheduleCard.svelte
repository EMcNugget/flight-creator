<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import ArrowRight from '@lucide/svelte/icons/arrow-right';
  import ScheduleItem from './ScheduleItem.svelte';

  let {
    flightNumber,
    departure,
    arrival,
    blockTime,
    equipment
  } = $props();
</script>

<Card.Root
  class="
      relative
      w-full
      max-w-xs
      rounded-lg
      border
      border-white/15
      bg-white/10 shadow-2xl
      shadow-black/60 backdrop-blur-xl  
      before:pointer-events-none before:absolute
      before:inset-0
      before:rounded-lg before:bg-linear-to-br before:from-white/20 before:via-transparent
      before:to-transparent
      before:opacity-50
    "
>
  <Card.Content class="space-y-4 text-slate-200">
    <div class="flex w-full flex-row items-center justify-between">
      <p class="text-xl font-semibold">{flightNumber}</p>

      <div class="flex flex-row items-center space-x-1 text-3xl font-semibold">
        <p>{departure.airport}</p>
        <ArrowRight />
        <p>{arrival.airport}</p>
      </div>
    </div>

    <div class="grid w-full grid-cols-2 gap-2">
      <ScheduleItem label="Dep" value={departure.time} />
      <ScheduleItem label="Gate" value={departure.gate} />
      <ScheduleItem label="Arr" value={arrival.time} />
      <ScheduleItem label="Gate" value={arrival.gate} />
      <ScheduleItem label="Block Time" value={blockTime} />
      <ScheduleItem label="Equip" value={equipment} />
    </div>

    <Button
      class="w-full bg-linear-to-r from-cyan-700 to-blue-500 text-slate-200 hover:cursor-pointer hover:from-cyan-800 hover:to-blue-600"
      variant="default"
    >
      View Simbrief Flightplan
      <ArrowRight class="ml-2" />
    </Button>
  </Card.Content>
</Card.Root>
