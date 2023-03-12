<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main>
	<header>
      <nav>
		<div class="links">
            <RouterLink to="/taxpage">Tax Application</RouterLink>
		</div>
		<div class="links">
            <RouterLink to="/pokemonpage">Pokemon Application</RouterLink>
		</div>
      </nav>
    </header>

	<main>
		<div class="viewItem">
			<RouterView />
		</div>
	</main>
  </main>
</template>

<style scoped>
nav {
	display: flex;
	justify-content: center;
	font-size: 1.8em;
}
.links {
	padding: 1em;
}

main {
	display: flex;
	width: 90%;
	margin-left: auto;
	margin-right: auto;
	justify-content: center;
	flex-direction: column;
	font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.viewItem {
	margin-left: auto;
	margin-right: auto;
}
</style>
