<template>
	<div>
		<v-row>
			<v-col v-for="(n,i) in images" :key="n" cols="6">
				<v-card>
					<v-img :src="require('@/assets/img/' + n + '.png')" contain height="150"></v-img>
					<v-card-text>
						<input v-model="imageDef[i]" :placeholder="'word ' + (i+1)" class="image-words text-center" max="70" min="10">
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import { bus } from "../main";
	export default {
		data: () => ({
			images: ["image-1", "image-2"],
			imageDef: [],
		}),
		watch: {
			imageDef: {
				// This will let Vue know to look inside the array
				deep: true, 
				// We have to move our method to a handler field
				handler() {
					bus.$emit("setImageDef", this.imageDef);
				},
			}
		},
	};
</script>

<style>
	.image-words {
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
		margin-bottom: 5px;
	}
</style>