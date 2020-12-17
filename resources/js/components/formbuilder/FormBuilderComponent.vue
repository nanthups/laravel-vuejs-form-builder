<template>
	<!-- row -->
	<div class="row">

		<!-- elements -->
		<div class="col-12 col-md-3 mb-2">
			<div class="card sticky-top" v-on:click="() => { activeField = [] }">
				<div class="card-header bg-primary text-white text-center font-weight-bold"> Basic Fields </div>
				<div class="card-body">
					<elements :form="form"></elements>
				</div>
			</div>
		</div>
		<!-- /elements -->

		<!-- element fields -->
		<div class="col-12 col-md-6 mb-2">

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

			<div class="card">
				<div class="card-body">
					<div class="row justify-content-center" v-if="form.length === 0">
						<h4 class="m-2 text-muted text-uppercase font-weight-bold"> Drop elements below </h4>
					</div>
					<div class="form-row drag-area" :class="[{ 'ghost-class' : ghostClass }]" v-on:dblclick="() => { activeField = [] }" v-on:drop="onDropElement($event)" v-on:dragover.prevent v-on:dragenter="() => { ghostClass = true }" v-on:dragleave="() => { ghostClass = false }">
						<template v-for="(field, index) in form">
							<div class="form-group" :class="[`col-${field.span}`, { 'active': field === activeField }]" v-on:click="editFieldProperties(field)" :key="index">
								<span class="form-selected-label" v-text="field.text"></span>
								<div draggable="true" class="draggable" v-on:dragstart="dragStart(index, $event)" v-on:dragend="dragEnd" v-on:drop="dragFinish(index)" v-on:dragover.prevent v-on:dragenter.prevent>
									<compnent :is="field.fieldType" :currentField="field"></compnent>
								</div>
								<div class="btn-group form-action-list">
									<button type="button" class="btn btn-info btn-sm" v-on:click="cloneField(index, field)">
										<i class="fa fa-clone"></i>
										<span> Clone </span>
									</button>
									<button type="button" class="btn btn-info btn-sm" v-on:click="removeField(index)">
										<i class="fa fa-trash-o"></i>
										<span> Remove </span>
									</button>
								</div>
							</div>
						</template>
					</div>
				</div>
			</div>
		</div>
		<!-- /element fields -->

		<!-- fields properties -->
		<div class="col-12 col-md-3 mb-2">
			<div class="card sticky-top">
				<div class="card-header bg-primary text-white text-center font-weight-bold"> Field Properties </div>
				<div class="card-body">
					<properties v-if="Object.keys(activeField).length > 0" :activeField="activeField"></properties>
					<span v-else> No Field Selected </span>
				</div>
			</div> 
		</div>
		<!-- /fields properties -->

	</div>
	<!-- /row -->
</template>

<script type="text/javascript">
import { FormBuilder } from './form-elements/formbuilder';

export default {
	name: 'FormBuilder',
	props: ['form'],
	data() {
		return {
			dragging: -1,
			activeField: [],
			ghostClass: false
		}
	},
	components: FormBuilder.$options.components,
	methods: {
		onDropElement (event) {
			const field = event.dataTransfer.getData('field');
			if (field) {
				this.form.push(JSON.parse(field));
			}
			this.ghostClass = false;
		},
		dragStart(which, event) {
			this.dragging = which;
			event.dataTransfer.dropEffect = 'move'
		},
		dragEnd(event) {
			this.dragging = -1;
		},
		dragFinish(to) {
			if (to === -1) {
				this.form.splice(this.dragging, 1);
			} else {
				this.form.splice(to, 0, this.form.splice(this.dragging, 1)[0]);
			}
		},
		editFieldProperties(field) {
			this.activeField = field;
		},
		cloneField(index, field) {
			var cloned = _.cloneDeep(field);
			this.form.splice(index, 0, cloned);
		},
		removeField(index) {
			this.$delete(this.form, index);
			this.activeField = [];
		},
	}
}
</script>

<style lang="scss" scoped>
.sticky-top {
	top: 15vh;
	z-index: 1020;
	position: sticky;
}

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

.drag-area {
	padding: 20px 8px 40px 8px;
	min-height: calc(30vh);
	background-color: #f2f2f2;
	.form-group {
		padding: 10px;
		position: relative;
		margin-bottom: auto;
		border: 1px solid transparent;
		.form-selected-label {
			top: -18px;
			right: 16px;
			color: black;
			display: none;
			font-size: 10px;
			padding: 3px 5px;
			position: absolute;
			background: #ecf5ff;
		}
		.draggable {
			cursor: move;
			padding: 10px;
			border-radius: 0.2em;
			background-color: #f2f2f2;
			border: 1px solid #dcd9d9;
		}
		.form-action-list {
			right: 0;
			z-index: 9;
			margin-top: 16px;
			position: absolute;
			visibility: hidden;
			border-radius: 2px;
		}
		&:hover {
			cursor: pointer;
		}
		&.active {
			border-radius: 2px;
			border-color: #409eff;
			background: #ecf5ff;
			.form-action-list {
				visibility: visible;
			}
			.form-selected-label {
				display: inline-block;
			}
		}
	}
}
.ghost-class {
	&:before {
		left: 50%;
		color: #3A8EE6;
		font-size: 10px;
		padding: 0 10px;
		line-height: 15px;
		position: absolute;
		border-radius: 10px;
		background-color: #ECF5FF;
		transform: translateX(-50%);
		content: "Drag the field here";
		border-bottom: 2px solid #3A8EE6;
	}
}
</style>