<template>
	<v-card>
		<v-card-text>
			<v-row>
				<v-col cols="auto" align-self="center">
					Sex:
				</v-col>
				<v-col>
					<v-btn-toggle v-model="sex">
						<v-btn v-for="sexItem in sexList" :key="sexItem">{{sexItem}}</v-btn>
					</v-btn-toggle>
				</v-col>
			</v-row>
			<v-row>
				<v-col cols="auto" align-self="center">Age:</v-col>
				<v-col cols="3">
					<input type="number" v-model="age" placeholder="17..." id="age" max="70" min="10">
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
	import { bus } from "../main";
	export default {
		data: () => ({
			sexList: ["Male", "Female", "Others"],
			sex: null,
			age: null,
		}),
		watch: {
			sex() {
				bus.$emit("setSex", this.sexList[this.sex]);
			},
			age() {
				bus.$emit("setAge", this.age);
			},
		},
	};
</script>

<style>
	#age {
		border: 1px solid rgba(0, 0, 0, 0.37);
		border-radius: 2px;
		align-items: stretch;
		background: transparent;
		color: rgba(0, 0, 0, 0.87);
		flex: 1 1 auto;
		line-height: 20px;
		padding: 8px 12px;
		max-width: 100%;
		min-width: 0px;
		width: 100%;
		font-size: 16px;
	}
</style>