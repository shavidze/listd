<!-- svelte example -->
<script>
	import { IconBrandYoutube } from '@tabler/icons-svelte';
</script>

<div class="p-4 hero-container flex flex-col justify-center items-center">
	<p class="my-4">
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
		the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
		of type and scrambled it to make a type specimen book. It has survived not only five centuries,
		but also the leap into electronic typesetting, remaining essentially unchanged. It was
		popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
		and more recently with desktop publishing software like Aldus PageMaker including versions of
		Lorem Ipsum.
	</p>
	<a href="/onboarding" type="button" class="btn variant-filled-warning cursor-pointer flex">
		Sign up with youtube <IconBrandYoutube class="ml-2" size={36} stroke={2} />
	</a>
</div>
