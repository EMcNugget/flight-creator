<script lang="ts">
  import ScheduleCard from './ScheduleCard.svelte';
  import * as Carousel from '$lib/components/ui/carousel/index.js';
  import * as Pagination from '$lib/components/ui/pagination/index.js';
  import ChevronLeft from '@lucide/svelte/icons/chevron-left';
  import ChevronRight from '@lucide/svelte/icons/chevron-right';
  import Progress from './Progress.svelte';

  let bidData = [
    {
      flightNumber: 'DL123',
      departure: {
        airport: 'ATL',
        time: '08:00',
        gate: 'B21'
      },
      arrival: {
        airport: 'JFK',
        time: '10:00',
        gate: 'A3'
      },
      blockTime: '02:00',
      equipment: 'B738'
    },
    {
      flightNumber: 'AA456',
      departure: {
        airport: 'LAX',
        time: '09:30',
        gate: 'C12'
      },
      arrival: {
        airport: 'ORD',
        time: '15:00',
        gate: 'D5'
      },
      blockTime: '03:30',
      equipment: 'A321'
    },
    {
      flightNumber: 'UA789',
      departure: {
        airport: 'SFO',
        time: '07:15',
        gate: 'E7'
      },
      arrival: {
        airport: 'DEN',
        time: '10:45',
        gate: 'F2'
      },
      blockTime: '02:30',
      equipment: 'B737'
    },
    {
      flightNumber: 'UA789',
      departure: {
        airport: 'SFO',
        time: '07:15',
        gate: 'E7'
      },
      arrival: {
        airport: 'DEN',
        time: '10:45',
        gate: 'F2'
      },
      blockTime: '02:30',
      equipment: 'B737'
    }
  ];

  let loadingComplete = true;
</script>

{#if !loadingComplete}
  <Progress value={75} message="Loading your schedule" />
{:else}
  <div class="m-6 flex flex-col items-center justify-between space-y-10">
    <h1 class="text-3xl font-bold text-slate-200 text-shadow-lg">Current Schedule</h1>
    <script lang="ts">
      import * as Card from '$lib/components/ui/card/index.js';
      import * as Carousel from '$lib/components/ui/carousel/index.js';
    </script>

    <Carousel.Root
      opts={{
        loop: false
      }}
    >
      <Carousel.Content>
        {#each bidData as props, i}
          <Carousel.Item class="md:basis-1/2 lg:basis-1/3 ">
            <ScheduleCard
              showNextLeg={i === 0}
              flightNumber={props.flightNumber}
              departure={props.departure}
              arrival={props.arrival}
              blockTime={props.blockTime}
              equipment={props.equipment}
            />
          </Carousel.Item>
        {/each}
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>

    <Pagination.Root count={5} perPage={1}>
      {#snippet children({ pages, currentPage })}
        <Pagination.Content
          class="flex items-center gap-1 rounded-2xl
         border border-white/10 bg-white/5 px-2 
         py-1 text-slate-300 backdrop-blur-sm"
        >
          <Pagination.Item>
            <Pagination.PrevButton
              class="rounded-2xl bg-transparent hover:bg-blue-600 hover:text-slate-200"
            >
              <ChevronLeft />
            </Pagination.PrevButton>
          </Pagination.Item>
          {#each pages as page (page.key)}
            {#if page.type === 'ellipsis'}
              <Pagination.Item>
                <Pagination.Ellipsis />
              </Pagination.Item>
            {:else}
              <Pagination.Item>
                <Pagination.Link
                  {page}
                  isActive={currentPage === page.value}
                  class={currentPage === page.value
                    ? 'rounded-2xl bg-blue-500 text-slate-200 hover:bg-blue-600 hover:text-slate-200'
                    : 'hover:bg-white/10'}
                >
                  {page.value}
                </Pagination.Link>
              </Pagination.Item>
            {/if}
          {/each}
          <Pagination.Item>
            <Pagination.NextButton
              class="rounded-2xl bg-transparent hover:bg-blue-600 hover:text-slate-200"
            >
              <ChevronRight />
            </Pagination.NextButton>
          </Pagination.Item>
        </Pagination.Content>
      {/snippet}
    </Pagination.Root>
  </div>
{/if}
