<template>
	<div>
		<label :for="currentField.label" v-text="`${currentField.label} :`"></label>
		<span class="text-danger" v-if="currentField.isRequired">*</span>
		<textarea type="text" class="form-control" :id="currentField.label"  v-bind="attributesBinding" :required="this.currentField.isRequired"></textarea>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'MultiLineInput',
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