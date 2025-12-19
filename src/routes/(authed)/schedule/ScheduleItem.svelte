<script lang="ts">
  export let label: string;
  export let value: string;
</script>

<div class="flex flex-row items-center gap-2">
  <p class="text-xs text-white/50">{label}</p>
  <p class="text-lg font-semibold">{value}</p>
</div>
