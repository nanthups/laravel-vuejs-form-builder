<template>
	<div class="row">
		<div class="col-6" v-for="(field, index) in fields" :key="index" draggable="true" @dragstart="dragStart(field, $event)" @dragover.prevent @dragenter.prevent>
			<button type="button" class="btn btn-outline-info btn-sm" v-text="field.text"></button>
		</div>
	</div>
</template>

<script type="text/javascript">
import { FormBuilder } from './formbuilder';

export default {
	name: 'Elements',
	props: ['form'],
	data() {
		return {
			fields: FormBuilder.$data.fields,
		};
	},
	methods: {
		dragStart(field, event) {
			event.dataTransfer.dropEffect = "move"
			event.dataTransfer.setData('field', JSON.stringify(field));
		},
	}
}
</script>

<style lang="scss" scoped>
.row {
	.col-6 {
		padding: 4px;
		margin-bottom: 5px;
		button {
			width: 100%;
			font-weight: 600;
			&:hover {
				color: #fff;
			}
		}
	}
}
</style>