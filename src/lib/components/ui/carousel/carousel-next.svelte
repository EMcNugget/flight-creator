<script lang="ts">
	import ChevronRight from "@lucide/svelte/icons/chevron-right";
	import type { WithoutChildren } from "bits-ui";
	import { getEmblaContext } from "./context.js";
	import { cn } from "$lib/utils.js";
	import { Button, type Props } from "$lib/components/ui/button/index.js";

	let {
		ref = $bindable(null),
		class: className,
		variant = "outline",
		size = "icon",
		...restProps
	}: WithoutChildren<Props> = $props();

	const emblaCtx = getEmblaContext("<Carousel.Next/>");
</script>

<Button
	data-slot="carousel-next"
	{variant}
	{size}
	aria-disabled={!emblaCtx.canScrollNext}
	class={cn(
		"absolute size-8 rounded-full bg-slate-200/50 shadow-md transition-opacity hover:bg-slate-200/70 disabled:opacity-50",
		emblaCtx.orientation === "horizontal"
			? "-end-12 top-1/2 -translate-y-1/2"
			: "start-1/2 -bottom-12 -translate-x-1/2 rotate-90",
		className
	)}
	onclick={emblaCtx.scrollNext}
	onkeydown={emblaCtx.handleKeyDown}
	bind:ref
	{...restProps}
>
	<ChevronRight class="size-4" />
	<span class="sr-only">Next slide</span>
</Button>
