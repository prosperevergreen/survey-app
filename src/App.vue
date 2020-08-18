<template>
	<v-app fixed>
		<v-app-bar app color="primary" dark>
			<v-toolbar-title>Survey</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<v-container>
				<AppDetailsSection />
				<AppInfoSection :surveyInfo="appSurveyInfo[0]" />
				<AppInfoSection :surveyInfo="appSurveyInfo[1]" />
				<AppImageSection />
				<AppListSection />
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
			sex: null,
			age: null,
			imageDef: [],
			answers: [],
			appSurveyInfo: [
				"Сейчас вы услышите слова, одни из которых выражают восхищение или одобрение, другие - неприязнь или презрение. Руководствуясь исключительно звучанием услышанных вами слов, \"оцените\" слово в представленной вам анкете по шкале от <strong>1 (безусловно вызывающее презрение), 2 (скорее всего вызывающее презрение), 3 (нечто нейтральное), 4 (скорее всего вызывающее восхищение), 5 (безусловно вызывающее восхищение).</strong> Вы услышите слова дважды с небольшой паузой. Прежде чем приступить непосредственно к выполнению задания, предлагаем вам посмотреть на приведенные в анкете рисунки. Определите, пожалуйста, какой из рисунков может называться словом ''ulambula', а какой 'kikiriki'. Аналогичным образом следует поступать и при отнесении услышанных вами слов по шкале от 1 до 5.",
				'Häzir siz sözleri eşidersiňiz, käbiri haýran galmagy ýa-da makullanmagyny aňladýar, beýlekileri halamaýar ýa-da ýigrenýär. \nDiňe eşidýän sözleriňiziň sesine esaslanyp, size 1-den 5-e çenli şkalada hödürlenen anketadaky sözi "bahalandyryň". <strong>1 (elbetde ýigrenji), 2 (iň ýigrenji bolmagy mümkin), 3 (bitarap bir zat), 4 (iň haýran galdyryjy), 5 (elbetde haýran galdyryjy).</strong> Sözleri gysga arakesme bilen iki gezek eşidersiňiz. Göni tabşyryga geçmezden ozal, anketada berlen çyzgylara seretmegiňizi maslahat berýäris. Çyzgylaryň haýsysyny \'\' ulambula" we haýsysyny "kikiriki" diýip atlandyryp boljakdygyny kesgitläň. Eşiden sözleriňizi 1-den 5-e çenli şkalada belläniňizde edil şonuň ýaly edilmeli.',
			],
		}),
		method: {
			print() {
				console.log(
					`Sex: ${this.sex},\nAge: ${this.age},\nAnswers: ${this.answers}`
				);
			},
		},
		created() {
			bus.$on("setSex", (data) => {
				this.sex = data;
				console.log(data);
			});

			bus.$on("setAge", (data) => {
				this.age = data;
				console.log(data);
			});

			bus.$on("setImageDef", (data) => {
				this.imageDef = data;
				console.log(data);
			});

			bus.$on("setAnswers", (data) => {
				this.answers = data;
				console.log(data);
			});
		},
	};
</script>
