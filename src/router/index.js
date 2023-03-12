import { createRouter, createWebHistory } from 'vue-router'
import PokemonPage from "../views/PokemonPage.vue";
import TaxPage from "../views/TaxPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: '/pokemonpage',
		name: 'pokemonpage',
		component: PokemonPage
	},
	{
		path: '/taxpage',
		name: 'taxpage',
		component: TaxPage
	},
  ]
})

export default router
