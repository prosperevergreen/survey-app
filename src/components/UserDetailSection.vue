<template>
	<div>
		<v-card>
			<v-card-text>
				<v-row>
					<v-col cols="auto" align-self="center">
						Sex:
					</v-col>
					<v-col>
						<v-btn-toggle v-model="sex">
							<v-btn>Male</v-btn>
							<v-btn>Female</v-btn>
							<v-btn>Others</v-btn>
						</v-btn-toggle>
					</v-col>
				</v-row>
				<v-row>
					<v-col cols="auto" align-self="center">Age:</v-col>
					<v-col md="1" cols="3">
						<input type="number" v-model="age" placeholder="17..." id="age" max="70" min="10">
					</v-col>
				</v-row>
			</v-card-text>
		</v-card>
		<v-row>
			<v-col cols=12 justify="center">
				<v-alert dense text type="info">
					Сейчас вы услышите слова, одни из которых выражают восхищение или одобрение, другие - неприязнь или презрение. Руководствуясь исключительно звучанием услышанных вами слов, "оцените" слово в представленной вам анкете по шкале от <strong>1 (безусловно вызывающее презрение), 2 (скорее всего вызывающее презрение), 3 (нечто нейтральное), 4 (скорее всего вызывающее восхищение), 5 (безусловно вызывающее восхищение).</strong> 
                    Вы услышите слова дважды с небольшой паузой.
					Прежде чем приступить непосредственно к выполнению задания, предлагаем вам посмотреть на приведенные в анкете рисунки. Определите, пожалуйста, какой из рисунков может называться словом ''ulambula', а какой 'kikiriki'. 
                    Аналогичным образом следует поступать и при отнесении услышанных вами слов по шкале от 1 до 5.
				</v-alert>
				<v-alert dense text type="info">
					Häzir siz sözleri eşidersiňiz, käbiri haýran galmagy ýa-da makullanmagyny aňladýar, beýlekileri halamaýar ýa-da ýigrenýär. 
                    Diňe eşidýän sözleriňiziň sesine esaslanyp, size 1-den 5-e çenli şkalada hödürlenen anketadaky sözi "bahalandyryň". 
                    <strong>1 (elbetde ýigrenji), 2 (iň ýigrenji bolmagy mümkin), 3 (bitarap bir zat), 4 (iň haýran galdyryjy), 5 (elbetde haýran galdyryjy).</strong> 
                    Sözleri gysga arakesme bilen iki gezek eşidersiňiz. Göni tabşyryga geçmezden ozal, anketada berlen çyzgylara seretmegiňizi maslahat berýäris. Çyzgylaryň haýsysyny '' ulambula" we haýsysyny "kikiriki" diýip atlandyryp boljakdygyny kesgitläň. 
                    Eşiden sözleriňizi 1-den 5-e çenli şkalada belläniňizde edil şonuň ýaly edilmeli.
				</v-alert>
			</v-col>
		</v-row>
	</div>

</template>

<script>
	export default {
		data: () => ({
			sex: null,
			age: null,
		}),
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