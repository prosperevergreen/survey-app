<template>
	<div>
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
								<v-btn-toggle v-model="rating[rateOption[index]]" color="primary">
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
		<div class="d-flex justify-end mt-3">
			<v-btn large color="success" @click.prevent="sendAns()">SUBMIT</v-btn>
		</div>
	</div>

</template>

<script>
	import { bus } from "../main";
	export default {
		data: () => ({
			rating: [],
			rateOption: [1, 2, 3, 4, 5],
			soundArr: [
				"bonzer",
				"pot",
				"fudge",
				"flash",
				"gal",
				"shirt",
				"nerd",
				"boob",
				"witch",
				"fool",
				"blob",
				"hit",
				"bloop",
				"frosh",
				"wow",
				"sheik",
				"frump",
				"beans",
				"dreck",
				"babe",
				"mope",
				"meal",
				"hoke",
				"blub",
				"bim",
				"cher",
				"posh",
				"boot",
				"bub",
				"tuff",
				"saw",
				"fab",
				"tits",
				"case",
				"A",
				"charge",
				"smooth",
				"cake",
				"swave",
				"reet",
				"thing",
				"slick",
				"there",
				"bug",
				"cork",
				"boff",
				"tube",
				"class",
				"down",
				"cinch",
				"dope",
				"check",
				"fish",
				"in",
				"spoon",
				"mess",
				"neat",
				"hop",
				"pill",
				"hash",
				"shag",
				"mink",
				"wall",
				"dot",
				"skag",
				"curl",
				"goof",
				"hot",
				"keen",
				"tip",
				"wimp",
				"dish",
				"nub",
				"woke",
				"tooth",
				"flub",
				"tickety-boo",
				"floocie",
				"mouse",
				"scoops",
				"gear",
				"beef",
				"jazz-bo",
				"ice",
				"pip",
				"large",
				"woozle",
				"rush",
				"jake",
				"deadwood",
				"goum",
				"zinc",
				"frimp",
				"warm",
				"dill",
				"mush",
				"ponce",
				"zool",
				"dreamboat",
				"shim",
				"guff",
				"muff",
				"ace",
				"doll",
				"puss",
				"wog",
				"poop",
				"ride",
				"small",
				"close",
				"lob",
				"spook",
				"stiff",
				"buzz",
				"twerp",
				"vag",
				"yum",
				"dove",
				"hash(2)",
				"shag(2)",
				"fluf",
				"top",
				"noise",
				"kack",
				"squaw",
				"stooge",
				"kick",
				"sunny",
				"blab",
				"shack",
				"great",
				"fine",
				"loop",
				"mensch",
				"oogley",
				"shish",
				"spoof",
				"hood",
				"tough",
				"score",
				"hard",
				"moke",
				"darb",
				"fliv",
				"gump",
				"peach",
				"heel",
				"flam",
				"sooh",
				"shtich",
				"jive",
				"foul",
				"bash",
				"feeb",
				"beat",
				"devoon",
				"gig",
				"beaut",
				"shloomp",
				"snide",
				"cush",
				"click",
				"tart",
				"dud",
				"fave",
				"flop",
				"bosh",
				"ray",
				"dane",
				"rip",
				"blip",
				"whiz",
				"zib",
				"oomph",
				"souse",
				"punk",
				"foz",
				"dumb",
				"boobie",
				"mod",
				"spoon(2)",
				"mess(2)",
			],
		}),
		methods: {
			playSound(sound) {
				if (sound) {
					var audio = new Audio(sound);
					audio.play();
				}
			},
			sendAns() {
				bus.$emit("setAnswers", this.rating);
			},
		},
	};
</script>

<style>
</style>