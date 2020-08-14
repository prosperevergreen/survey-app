<template>
	<!-- <v-item-group v-model="selected">
			<v-container>
				<v-row justify="center">
					<v-col cols="6" v-for="n in images" :key="n">
						<v-item v-slot:default="{ active, toggle }">
							<v-card @click="toggle">
								<v-img :src="require('@/assets/' + n + '.png')" contain height="150">
									<v-btn icon>
										<v-icon>
											{{ active ? 'mdi-thumb-up' : 'mdi-thumb-up-outline' }}
										</v-icon>
									</v-btn>
								</v-img>
								<v-scroll-y-transition>
									<div v-if="active" class="display-3 flex-grow-1 text-center">

									</div>
								</v-scroll-y-transition>
							</v-card>
						</v-item>
					</v-col>
				</v-row>
			</v-container>
		</v-item-group> -->
	<div>
		<v-row>
			<v-col v-for="(n,i) in images" :key="n" cols="6">
				<v-card>
					<v-img :src="require('@/assets/img/' + n + '.png')" contain height="150"></v-img>
					<!-- <v-card-title class="title">height</v-card-title> -->
					<v-card-text>
						<input  v-model="imageDef[i]" :placeholder="'word ' + (i+1)" class="image-words text-center" max="70" min="10">
					</v-card-text>
				</v-card>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	export default {
		data: () => ({
			images: ["image-1", "image-2"],
			imageDef: [],
		}),
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
        margin-bottom: 5px ;
	}
</style>