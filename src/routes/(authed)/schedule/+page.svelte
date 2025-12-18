<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import * as Card from '$lib/components/ui/card/index.js';
  import * as Form from '$lib/components/ui/form/index.js';
  import * as Dialog from '$lib/components/ui/dialog/index.js';
  import Switch from '$lib/components/ui/switch/switch.svelte';
  import ArrowRight from '@lucide/svelte/icons/arrow-right';
  import Input from '$lib/components/ui/input/input.svelte';
  import { bidSchema } from '../bidSchema.js';
  import { superForm } from 'sveltekit-superforms/client';
  import { zod4Client } from 'sveltekit-superforms/adapters';

  let { data } = $props();

  const form = superForm(data.form, {
    validators: zod4Client(bidSchema)
  });

  form;

  const { form: formData, enhance, errors } = form;
</script>

<div class="mb-12 flex flex-col items-center gap-2">
  <h1 class="text-4xl font-bold text-white text-shadow-lg">vBS - Virtual Bid System</h1>
  <p class="font-semibold text-white text-shadow-lg">Your flight sim schedule made simple</p>
</div>
<Card.Root
  class="
      relative w-full max-w-lg
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
    <Card.Title class="text-xl text-white">Generate Your Schedule</Card.Title>
    <Card.Description class="text-slate-300">
      Fill out the form below to create a personalized flight schedule.
    </Card.Description>
  </Card.Header>

  <Card.Content class="space-y-4 text-slate-200">
    <form method="POST" use:enhance class=" space-y-6">
      <div class="grid-cols-2 gap-4 md:grid">
        <Form.Field {form} name="base">
          <Form.Control>
            {#snippet children({ props })}
              <Form.Label>Base</Form.Label>
              <Input
                class="bg-white/10 text-white uppercase placeholder:text-white/50 placeholder:normal-case focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Starting Airport"
                {...props}
                bind:value={$formData.base}
              />
            {/snippet}
          </Form.Control>
          <Form.Description />
        </Form.Field>
        <Form.Field {form} name="airline">
          <Form.Control>
            {#snippet children({ props })}
              <Form.Label>Airline</Form.Label>
              <Input
                class="bg-white/10 text-white uppercase placeholder:text-white/50 placeholder:normal-case focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Airline"
                {...props}
                bind:value={$formData.airline}
              />
            {/snippet}
          </Form.Control>
          <Form.Description />
        </Form.Field>
        <Form.Field {form} name="aircraftType">
          <Form.Control>
            {#snippet children({ props })}
              <Form.Label>Aircraft</Form.Label>
              <Input
                class="bg-white/10 text-white uppercase placeholder:text-white/50 placeholder:normal-case focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Aircraft Type"
                {...props}
                bind:value={$formData.aircraftType}
              />
            {/snippet}
          </Form.Control>
          <Form.Description />
        </Form.Field>
        <Form.Field {form} name="days">
          <Form.Control>
            {#snippet children({ props })}
              <Form.Label>Days</Form.Label>
              <Input
                min="1"
                type="number"
                max="5"
                class="bg-white/10 text-white placeholder:text-white/50 focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Number of Days"
                {...props}
                bind:value={$formData.days}
              />
            {/snippet}
          </Form.Control>
          <Form.Description />
        </Form.Field>
      </div>
      <Dialog.Root>
        <Dialog.Trigger
          class="text-sm text-slate-300 hover:cursor-pointer hover:text-blue-400 hover:underline"
        >
          <div class="flex items-center">
            <span>Advanced Settings</span>
            <ArrowRight class="mt-1 ml-0.5" size={16} />
          </div>
        </Dialog.Trigger>
        <Dialog.Content
          class="w-1/4 rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl shadow-black/60 backdrop-blur-xl"
        >
          <Dialog.Header>
            <Dialog.Title class="text-xl text-white">Advanced Settings</Dialog.Title>
            <Dialog.Description class="text-slate-400">
              Configure additional options for your flight schedule.
            </Dialog.Description>
          </Dialog.Header>
          <div class="flex flex-col space-y-4">
            <Form.Field {form} name="preferAirportsWithATC">
              <Form.Control>
                {#snippet children({ props })}
                  <div class="flex gap-2 text-white">
                    <Form.Label>Prefer Airports with ATC</Form.Label>
                    <Switch
                      {...props}
                      bind:checked={$formData.preferAirportsWithATC}
                      class="data-[state=checked]:bg-blue-500 hover:data-[state=checked]:bg-blue-600"
                    />
                  </div>
                {/snippet}
              </Form.Control>
            </Form.Field>
            <Form.Field {form} name="preferAirportsWithScenery">
              <Form.Control>
                {#snippet children({ props })}
                  <div class="flex gap-2 text-white">
                    <Form.Label>Prefer Airports with Scenery</Form.Label>
                    <Switch
                      {...props}
                      bind:checked={$formData.preferAirportsWithScenery}
                      class="data-[state=checked]:bg-blue-500 hover:data-[state=checked]:bg-blue-600"
                    />
                  </div>
                {/snippet}
              </Form.Control>
            </Form.Field>
            <Form.Field {form} name="part117">
              <Form.Control>
                {#snippet children({ props })}
                  <div class="flex gap-2 text-white">
                    <Form.Label>Part 117</Form.Label>
                    <Switch
                      {...props}
                      bind:checked={$formData.part117}
                      class="data-[state=checked]:bg-blue-500 hover:data-[state=checked]:bg-blue-600"
                    />
                  </div>
                {/snippet}
              </Form.Control>
            </Form.Field>
          </div>
        </Dialog.Content>
      </Dialog.Root>
      <Button
        class="text-md w-full bg-blue-500 hover:cursor-pointer hover:bg-blue-600 hover:shadow-lg"
        type="submit"
      >
        Generate Schedule
      </Button>
    </form>
  </Card.Content>
</Card.Root>
