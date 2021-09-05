import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import { store } from './plugins/store';

import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;

Vue.use(Vuetify);

const opts = {
	icons: { iconfont: 'mdiSvg' }
};

new Vue({
	el: '#app',
	store,
	vuetify: new Vuetify(opts),
	components: { App },
	template: '<App/>'
});
