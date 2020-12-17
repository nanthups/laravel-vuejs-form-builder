/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

 require('./bootstrap');

 window.Vue = require('vue');

 /************************* Recruitment *************************/

// ================
// Use Element UI
// ----------------
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// import locale from 'element-ui/lib/locale/lang/en'
// Vue.use(Element, { locale })

/************************* Recruitment ends *************************/

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/FormBuilderComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('custom-component-component', require('./components/CustomComponentComponent.vue').default);

Vue.component('form-component', require('./components/formbuilder/FormComponent.vue').default);
Vue.component('form-builder-component', require('./components/formbuilder/FormBuilderComponent.vue').default);
Vue.component('form-view-component', require('./components/formbuilder/FormViewComponent.vue').default);

Vue.component('signature-container-component', require('./components/signature/SinatureContainerComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

 const app = new Vue({
 	el: '#app',
 });
