<template>
	<div id="app">
		<v-app>
			<v-tabs vertical background-color="#efefef" color="success">
				<v-tabs-slider />
				<v-tab href="#tab-home">Home</v-tab>
				<v-tab href="#tab-apisettings">API-Settings</v-tab>

				<v-tab-item value="tab-home">
					<v-container fill-height fluid>
						<v-row justify="center" align="center">
							<v-col>...</v-col>
						</v-row>
					</v-container>
				</v-tab-item>

				<v-tab-item value="tab-apisettings">
					<ApiSettings />
				</v-tab-item>
			</v-tabs>
		</v-app>
	</div>
</template>

<script>
import ApiSettings from '@/components/ApiSettings';

export default {
	name: 'App',
	components: {
		ApiSettings
	}
};
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
