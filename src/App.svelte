<script lang="ts">
	import { Router } from "@sveltech/routify";
	import { routes } from "@sveltech/routify/tmp/routes";
</script>

<main>
	<Router {routes} />
</main>

<style lang="scss">
@import './styles/global.scss';

main {
  background-color: $background-color;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
</style>