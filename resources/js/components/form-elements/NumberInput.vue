<template>
	<div>
		<label :for="currentField.label" v-text="`${currentField.label} :`"></label>
		<span class="text-danger" v-if="currentField.isRequired">*</span>
		<input type="number" class="form-control form-control-sm" :id="currentField.label" v-bind="attributesBinding" :required="this.currentField.isRequired">
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'NumberInput',
	props: ['currentField'],
	computed: {
		attributesBinding() {
			var attr = {};

			if (this.currentField.isPlaceholderVisible) {
				attr['placeholder'] = this.currentField.placeholder;
			}

			return attr;
		}
	}
}
</script>