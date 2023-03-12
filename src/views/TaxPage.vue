<template>
	<h1> Tax Calculator </h1>
	<label> Name </label>
	<input v-model="userInput.name"/>
	<label> Address </label>
	<input v-model="userInput.address"/>
	<label> Total Income </label>
	<input v-model="userInput.totalIncome"/>
	<label> Employer </label>
	<input v-model="userInput.employer"/>

	<ul>
		<li> Name: {{ taxInfo.name }}</li>
		<li> Address: {{ taxInfo.address }}</li>
		<li> Total Income: {{ taxInfo.totalIncome }}</li>
		<li> Employer: {{ taxInfo.employer }}</li>
		<li> Total Tax: {{ taxInfo.totalTax }}</li>
		<li> Tax Rate: {{ taxInfo.taxRate }}</li>
	</ul>

	<button @click="fillData"> Submit </button>

</template>

<script setup>
import { reactive } from "vue"

let userInput = reactive({
	name: "",
	address: "",
	totalIncome: 0,
	employer: ""
})

let taxInfo = reactive({
	name: "",
	address: "",
	totalIncome: 0,
	employer: "",
	totalTax: 0,
	taxRate: ""
})

function fillData() {
	taxInfo.name = userInput.name;
	taxInfo.address = userInput.address;
	taxInfo.totalIncome = userInput.totalIncome;
	taxInfo.employer = userInput.employer;

    if (userInput.totalIncome > 25000)
	{
		console.log("total tax")
        taxInfo.totalTax = userInput.totalIncome * 0.15;
		taxInfo.taxRate = "15%";
	}
	else
	{
	    taxInfo.totalTax = userInput.totalIncome * 0.10;
		taxInfo.taxRate = "10%";
	}

}


</script>

<style scoped>
input {
	font-size: 1.5em;
	margin-top: 0.3em;
	padding: .3em;
	border-radius: 10px;
	border: 1px solid rgb(159, 159, 159);
}

li {
	font-size: 1.5em;
}

button {
	font-size: 1.5em;
}
</style>