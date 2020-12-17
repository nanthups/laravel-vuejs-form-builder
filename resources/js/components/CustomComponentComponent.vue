<template>
	<div class="card">
		<div class="card-body">
			
			<!-- nav-tabs -->
			<ul class="nav nav-tabs">
				<li class="nav-item">
					<a href="#" class="nav-link" :class="[{'active' : currentComponent == 'form-component'}]" v-on:click="() => { currentComponent = 'form-component' }"> 
						Form Builder 
					</a>
				</li>
				<li class="nav-item">
					<a href="#" class="nav-link" :class="[{'active' : currentComponent == 'signature-container-component'}]" v-on:click="() => { currentComponent = 'signature-container-component' }"> 
						Signature Pad
					</a>
				</li>
			</ul>
			<!-- /nav-tabs -->

			<!-- tab-content-->
			<div class="tab-content">
				<div class="tab-pane active mt-3">
					<component :is="currentComponent"></component>
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
				currentComponent: 'form-component'
			}
		}
	}
</script>