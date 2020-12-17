<template>
	<div class="row">
		<div class="col-6">
			<label for="firstInput" v-text="`${currentField.label.first} :`"></label>
			<span class="text-danger" v-if="this.currentField.isRequired">*</span>
			<input type="text" class="form-control" :required="this.currentField.isRequired">
		</div>
		<div class="col-6">
			<label for="lastInput" v-text="`${currentField.label.second} :`"></label>
			<span class="text-danger" v-if="this.currentField.isRequired">*</span>
			<input type="text" class="form-control" :required="this.currentField.isRequired">
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'NameInput',
	props: ['currentField'],
}
</script>