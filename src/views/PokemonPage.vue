<template>
	<div class="container">
		<h1> Pokemon Index </h1>

	    <select v-model="pokemonName">
			<option> bulbasaur </option>
			<option> ditto </option>
			<option> charmander </option>
			<option> squirtle </option>
			<option> blastoise </option>
	    </select>

		<div class="headerContainer">
			<h3> <p> Name: {{ pokemon.name }} </p> </h3>
			<img :src="pokemon.img_url" class="image"/>
		</div>

		<p> Skills: </p>

		<ul>
			<li v-for="(item, name) in pokemon.abilities"> {{ item }} </li>
		</ul>
	</div>

</template>

<script setup>
import axios from "axios";
import { watch } from "vue";
import { reactive, ref } from "vue";

let pokemonName = ref("bulbasaur");

axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`)
    .then(res => fillData(res.data));

let pokemon = reactive({
	name: "",
	img_url: "",
	abilities: []
})

function fillData(data) {
	pokemon.name = capitalizeFirstLetter(data.name);
	pokemon.img_url = data.sprites.front_default;
	pokemon.abilities = [];
	console.log(data);

	for (let item in data.abilities) {
		pokemon.abilities.push(data.abilities[item].ability.name);
	}
}

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1)
}


//create 2nd request using watch
watch(pokemonName, async (newPokemonName) => {
	await axios.get(`https://pokeapi.co/api/v2/pokemon/${newPokemonName}`)
	    .then(res => fillData(res.data))
})

</script>

<style scoped>

h1 {
	text-align: center;
}

.container {
	background-color: rgb(255, 227, 172);
	border: 2px solid #838383;
	border-radius: 15px;
	width: 500px;
	display: flex;
	justify-content: center;
	flex-direction: column;
}

.headerContainer {
	text-align: center;
}

select {
	font-size: 1.3em;
	text-align: center;
	width: 200px;
	margin-left: auto;
	margin-right: auto;
	border: 2px solid #838383;
	border-radius: 5px;
}
.image {
	width: 180px;
}

p {
	font-size: 1.3em;
	margin-top: 0;
	text-align: center;
}

ul {
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	padding-right: 2.5em;
}

li {
	font-size: 1.3em;
}

</style>