<template>
	<div class="card">
		<div class="card-body">
			
			<!-- nav-tabs -->
			<ul class="nav nav-tabs">
				<li class="nav-item">
					<a href="#" class="nav-link" :class="[{'active' : currentComponent == 'form-builder-component'}]" v-on:click="() => { currentComponent = 'form-builder-component' }"> 
						Builder 
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link" :class="[{'active' : currentComponent == 'form-view-component'}]" v-on:click="() => { currentComponent = 'form-view-component' }"> 
						View 
					</a>
				</li>
			</ul>
			<!-- /nav-tabs -->

			<!-- tab-content-->
			<div class="tab-content">
				<div class="tab-pane active mt-3">
					<component :is="currentComponent" v-bind="currentProperties"></component>
				</div>
			</div>
			<!-- /tab-content -->
			
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'Form',
	data() {
		return {
			form: [],
			currentComponent: 'form-builder-component'
		}
	},
	computed: {
		currentProperties: function() {
			return { 
				form: this.form
			}
		}
	}
}
</script>