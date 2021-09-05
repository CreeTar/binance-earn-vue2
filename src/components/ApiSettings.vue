<template>
	<v-container class="pa-0 ma-0 justify-center">
		<v-card flat>
			<v-card-title>API-Settings</v-card-title>
			<v-card-text>
				<v-row class="px-8 justify-center">
					<v-text-field dense v-model="apiKey" label="Key" outlined />
				</v-row>
				<v-row class="px-8 justify-center">
					<v-text-field
						dense
						v-model="apiSecret"
						label="Secret"
						outlined
					></v-text-field>
				</v-row>
				<v-row class="px-8 justify-center">
					<v-text-field
						dense
						v-model="apiServer"
						label="Server"
						outlined
					></v-text-field>
				</v-row>
			</v-card-text>
			<v-card-actions>
				<v-col cols="6">
					<v-btn @click="testApi">Test Connection</v-btn>
				</v-col>
				<v-col cols="6">
					<v-btn>Save Settings</v-btn>
				</v-col>
			</v-card-actions>
		</v-card>
	</v-container>
</template>

<script>
import ApiService from '@/components/ApiService.ts';

export default {
	name: 'ApiSettings',
	components: {},
	data() {
		return {
			apiKey: '',
			apiSecret: '',
			apiServer: 'https://api.binance.com'
		};
	},
	methods: {
		testApi() {
			const service = new ApiService(
				this.apiKey,
				this.apiSecret,
				this.apiServer
			);
			service.testConnection();
		},
		getQuestionaire() {
			return [
				{
					step: '23',
					questions: [
						{
							title: 'Abfahrtszeit',
							type: 'select',
							value: '--.--',
							values: ['08:00', '10:00', '12:00'],
							active: true
						}
					]
				}
			];
		}
	}
};
</script>

<style>
</style>
