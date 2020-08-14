<template>
	<v-card mb-4>
		<v-card-text>
			<v-row>
				<v-col md="6" v-for="(sound, index) in soundArr" :key="sound">
					<v-row justify="center" class="flex-nowrap">
						<v-col cols="auto" align-self="center" class="pa-0">
							<strong>{{index+1}}.</strong>
							<v-btn class="mx-2" fab dark color="cyan" @click.prevent="playSound(require(`@/assets/sounds/${(index+1)}-${sound}.mp3`))">
								<v-icon>mdi-volume-high</v-icon>
							</v-btn>
						</v-col>
						<v-col class="px-0 pl-1" cols="auto" align-self="center">
							<v-btn-toggle v-model="rating[index]" color="primary">
								<v-btn>1</v-btn>
								<v-btn>2</v-btn>
								<v-btn>3</v-btn>
								<v-btn>4</v-btn>
								<v-btn>5</v-btn>
							</v-btn-toggle>
						</v-col>
					</v-row>
				</v-col>
			</v-row>

		</v-card-text>
	</v-card>
</template>

<script>
	export default {
		data: () => ({
			rating: [],
			soundArr: ['bonzer','pot','fudge','flash','gal','shirt','nerd','boob','witch','fool','blob','hit','bloop','frosh','wow','sheik','frump','beans','dreck','babe']
		}),
		methods: {
			playSound(sound) {
				if (sound) {
					var audio = new Audio(sound);
					audio.play();
				}
				console.log(this.rating)
			},
		},
	};
</script>

<style>
</style>