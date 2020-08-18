<template>
	<v-alert class="my-3" dense text type="info">
		<span v-html="surveyInfo"></span>
	</v-alert>
</template>

<script>
	export default {
        props:{
            surveyInfo: String
        }
    };
</script>

<style>
</style>