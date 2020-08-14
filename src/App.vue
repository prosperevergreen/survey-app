<template>
	<v-app fixed>
		<v-app-bar  app color="primary" dark>
			<v-toolbar-title>Survey</v-toolbar-title>
		</v-app-bar>

		<v-main>
			<v-container>
				<AppDetailsSection />
				<AppImageSection />
				<AppListSection />
				<div class="d-flex justify-end mt-3">
					<v-btn large color="success">SUBMIT</v-btn>
				</div>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
	import AppDetailsSection from "./components/UserDetailSection";
	import AppImageSection from "./components/ImageSection";
	import AppListSection from "./components/WordListSection";

	export default {
		name: "App",
		components: {
			AppDetailsSection,
			AppImageSection,
			AppListSection,
		},
		data: () => ({
			//
		}),
	};
</script>
