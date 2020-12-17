<template>
	<div>
		<!-- label -->
		<div class="form-group" v-show="activeField.hasOwnProperty('label')">
			<label for="defaultLabel"> Label: </label>
			<input type="text" class="form-control" id="defaultLabel" v-model="activeField.label" v-on:change="() => { activeField.field = fieldReplace(activeField.label) }">
		</div>
		<!-- /label -->

		<!-- width -->
		<div class="form-group" v-show="activeField.hasOwnProperty('span')">
			<label for="maximumWidth"> Maximum Width - 12 </label>
			<input type="number" class="form-control" id="maximumWidth" min="4" max="12" v-model="activeField.span">
		</div>
		<!-- /width -->

		<!-- required field -->
		<div class="custom-control custom-switch mb-2" v-show="activeField.hasOwnProperty('isRequired')">
			<input type="checkbox" id="requiredField" class="custom-control-input" v-model="activeField.isRequired"> 
			<label for="requiredField" class="custom-control-label"> Required field? </label>
		</div>
		<!-- /required field -->

		<!-- placeholder visible -->
		<div class="custom-control custom-switch mb-2" v-show="activeField.hasOwnProperty('isPlaceholderVisible')">
			<input type="checkbox" id="placeholderVisible" class="custom-control-input" v-model="activeField.isPlaceholderVisible"> 
			<label for="placeholderVisible" class="custom-control-label"> Placeholder Visible? </label>
		</div>
		<!-- /placeholder visible -->

		<!-- placeholder -->
		<div class="form-group" v-show="activeField.isPlaceholderVisible">
			<label for="placeHolder"> Placeholder: </label>
			<input type="text" class="form-control" id="placeHolder" v-model="activeField.placeholder">
		</div>
		<!-- /placeholder -->
	</div>
</template>

<script type="text/javascript">
export default {
	props: ['activeField'],
	methods: {
		fieldReplace(label) {
			return label.toLowerCase().replace(/^\s+|\s+$/g, '').replace(/ /g, '_').replace(/[/]+/g, '').replace(/_+/g, '_');
		}
	}
}
</script>