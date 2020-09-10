<template>
	<div class="card">
		<div class="card-body">

			<!-- stepwizard -->
			<template>
				<div class="stepwizard">
					<div class="stepwizard-row">
						<div class="stepwizard-step">
							<a type="button" class="bg-primary"> 1 </a>
							<p> Page 1 </p>
						</div>
					</div>
				</div>
			</template>
			<!-- /stepwizard -->

			<!-- fieldset -->
			<fieldset>
				<legend class="text-uppercase"> Form </legend>
				<div class="form-row">
					<template v-for="(field, index) in form">
						<div v-if="field['fieldType'] == 'SingleLineInput'" :key="index" class="form-group" :class="[`col-${field.span}`]">
							<label v-text="`${field.label} :`"></label>
							<span class="text-danger" v-if="field.isRequired">*</span>
							<input type="text" class="form-control" v-model="formData[field.field]" v-bind="attributesBinding(field)" :required="field.isRequired">
							<small class="form-text text-danger" v-text="`${field.label} error message.`"></small>
						</div>
						<div v-if="field['fieldType'] == 'MultiLineInput'" :key="index" class="form-group" :class="[`col-${field.span}`]">
							<label v-text="`${field.label} :`"></label>
							<span class="text-danger" v-if="field.isRequired">*</span>
							<textarea type="text" class="form-control" v-model="formData[field.field]" v-bind="attributesBinding(field)" :required="field.isRequired"></textarea>
							<small class="form-text text-danger" v-text="`${field.label} error message.`"></small>
						</div>
						<div v-if="field['fieldType'] == 'NameInput'" :key="index" :class="[`col-${field.span}`]">
							<div class="form-row">
								<div class="form-group col-md-6">
									<label for="firstInput" v-text="`${field.label.first} :`"></label>
									<span class="text-danger" v-if="field.isRequired">*</span>
									<input type="text" class="form-control" v-model="formData[field.field]" :required="field.isRequired">
									<small class="form-text text-danger" v-text="`${field.label} error message.`"></small>
								</div>
								<div class="form-group col-md-6">
									<label for="lastInput" v-text="`${field.label.second} :`"></label>
									<span class="text-danger" v-if="field.isRequired">*</span>
									<input type="text" class="form-control" v-model="formData[field.field]" :required="field.isRequired">
									<small class="form-text text-danger" v-text="`${field.label} error message.`"></small>
								</div>
							</div>
						</div>
						<div v-if="field['fieldType'] == 'NumberInput'" :key="index" class="form-group" :class="[`col-${field.span}`]">
							<label v-text="`${field.label} :`"></label>
							<span class="text-danger" v-if="field.isRequired">*</span>
							<input type="number" class="form-control" v-model="formData[field.field]" v-bind="attributesBinding(field)" :required="field.isRequired">
							<small class="form-text text-danger" v-text="`${field.label} error message.`"></small>
						</div>
					</template>
				</div>
			</fieldset>
			<!-- /fieldset -->

			<p v-if="Object.keys(formData).length > 0" class="text-danger" v-text="formData"></p>

		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'FormView',
	props: ['form'],
	data() {
		return {
			formData: {}
		}
	},
	methods: {
		attributesBinding(field) {
			var attr = {};

			if (field.isPlaceholderVisible) {
				attr['placeholder'] = field.placeholder;
			}

			return attr;
		}
	}
}
</script>

<style lang="scss" scoped>
.stepwizard {
	width: 100%;
	display: table;
	margin-top: 12px;
	position: relative;
	.stepwizard-row {
		display: table-row;
		.stepwizard-step {
			display: table-cell;
			text-align: center;
			position: relative;
			a {
				color: #fff;
				width: 30px;
				height: 30px;
				padding: 6px 0;
				font-size: 12px;
				font-weight: 600;
				border-radius: 15px;
			}
			p {
				margin-top: 10px;
				font-weight: 600;
			}
		}
		&:before {
			top: 14px;
			bottom: 0;
			content: "";
			width: 100%;
			height: 1px;
			position: absolute;
			background-color: #ccc;
		}
	}
}

fieldset {
	border-radius: 4px;
	margin: 0 0 1.5em 0;
	padding: 0 1.4em 1.4em 1.4em;
	border: 2px dashed rgb(52 144 220);
	legend {
		width:auto;
		padding:0 10px;
		font-size: 1.2em;
		text-align: left;
		font-weight: bold;
		border-bottom:none;
	}
}
</style>