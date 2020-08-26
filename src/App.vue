<template>
	<v-app fixed>
		<v-app-bar app color="primary" dark>
			<v-toolbar-title>Survey</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<v-container>
				<v-alert v-if="submitted" class="mt-6" text type="success" elevation="2">
					Ваш опрос был <strong>отправлен</strong>. Спасибо за ваше время.
				</v-alert>

				
				<AppDetailsSection v-if="!submitted"/>
				<AppInfoSection v-if="!submitted" :surveyInfo="appSurveyInfo[0]" />
				<AppInfoSection v-if="!submitted" :surveyInfo="appSurveyInfo[1]" />
				<AppImageSection v-if="!submitted" :images="appImages" />
				<AppListSection v-if="!submitted" :soundArr="appWordList" />
				<!-- <div @click="overlay = false"> -->
				<v-overlay :value="overlay">
					<v-btn large color="success" class="mr-4" @click="saveToFSDB()">подтвердить</v-btn>
					<v-btn large color="error" class="ml-4" @click="overlay = false">отменить</v-btn>
				</v-overlay>
				<!-- </div> -->

				<v-row v-if="!submitted" class="justify-center mt-2">
					<v-col cols=12 sm=6>
						<v-btn block dark large color="cyan" @click.prevent="overlay = true">Отправить</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
	import AppDetailsSection from "./components/UserDetailSection";
	import AppInfoSection from "./components/InfoSection";
	import AppImageSection from "./components/ImageSection";
	import AppListSection from "./components/WordListSection";
	import { bus } from "./main";
	import { firebase, db } from "./db";

	export default {
		name: "App",
		components: {
			AppDetailsSection,
			AppInfoSection,
			AppImageSection,
			AppListSection,
		},
		data: () => ({
			//
			submitted: false,
			overlay: false,
			sex: 0,
			age: null,
			imageDef: [],
			answers: [],
			appImages: ["image-1", "image-2"],
			appSurveyInfo: [
				"Сейчас вы услышите слова, одни из которых выражают восхищение или одобрение, другие - неприязнь или презрение. Руководствуясь исключительно звучанием услышанных вами слов, \"оцените\" слово в представленной вам анкете по шкале от <strong>1 (безусловно вызывающее презрение), 2 (скорее всего вызывающее презрение), 3 (нечто нейтральное), 4 (скорее всего вызывающее восхищение), 5 (безусловно вызывающее восхищение).</strong> Вы услышите слова дважды с небольшой паузой. Прежде чем приступить непосредственно к выполнению задания, предлагаем вам посмотреть на приведенные в анкете рисунки. Определите, пожалуйста, какой из рисунков может называться словом ''ulambula', а какой 'kikiriki'. Аналогичным образом следует поступать и при отнесении услышанных вами слов по шкале от 1 до 5.",
				'Häzir siz sözleri eşidersiňiz, käbiri haýran galmagy ýa-da makullanmagyny aňladýar, beýlekileri halamaýar ýa-da ýigrenýär. \nDiňe eşidýän sözleriňiziň sesine esaslanyp, size 1-den 5-e çenli şkalada hödürlenen anketadaky sözi "bahalandyryň". <strong>1 (elbetde ýigrenji), 2 (iň ýigrenji bolmagy mümkin), 3 (bitarap bir zat), 4 (iň haýran galdyryjy), 5 (elbetde haýran galdyryjy).</strong> Sözleri gysga arakesme bilen iki gezek eşidersiňiz. Göni tabşyryga geçmezden ozal, anketada berlen çyzgylara seretmegiňizi maslahat berýäris. Çyzgylaryň haýsysyny \'\' ulambula" we haýsysyny "kikiriki" diýip atlandyryp boljakdygyny kesgitläň. Eşiden sözleriňizi 1-den 5-e çenli şkalada belläniňizde edil şonuň ýaly edilmeli.',
			],
			appWordList: [
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
			saveToFSDB() {
				var that = this
				db.collection("reviews")
					.add({
						sex: this.sex,
						age: this.age,
						imageName: this.imageDef,
						answers: this.answers,
						time: firebase.firestore.FieldValue.serverTimestamp(),
					})
					.then(function (docRef) {
						that.overlay = false; 
						that.submitted = true;
						console.log("Document written with ID: ", docRef.id);
					})
					.catch(function (error) {
						console.error("Error adding document: ", error);
					});
			},
		},
		created() {
			for (let index = 0; index < this.appWordList.length; index++) {
				this.answers[index] = 0;
			}

			bus.$on("setSex", (data) => {
				this.sex = data;
			});

			bus.$on("setAge", (data) => {
				this.age = data;
			});

			bus.$on("setImageDef", (data) => {
				this.imageDef = data;
			});

			bus.$on("setWordRating", (data) => {
				this.answers[data.index] = data.rating;
			});
		},
	};
</script>
