<template>
	<div class="row">
		<div class="col-12">
			<label>Signature Pad</label>
			<canvas id="signature" ref="canvas" v-on:mouseup="saveSignature()" width="500" height="250"></canvas>
		</div>
		<div class="col">
			<button type="button" class="btn btn-success btn-sm" v-on:click="changeColor()">Change Color</button>
			<button type="button" class="btn btn-primary btn-sm" v-on:click="clearSignature()">Clear Signature</button>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	name: 'SinaturePad',
	props: ['signatureFor'],
	data() {
		return {
			pad: null,
			signature: "null"
		}
	},
	mounted() {
		const canvas = this.$refs.canvas;
		this.pad = new SignaturePad(canvas, {
			backgroundColor: 'rgb(236 244 249)'
		});
		this.pad.name = this.signatureFor
		let ctx = canvas.getContext("2d");
		let signature = new Image();
		signature.onload = function() {
			ctx.drawImage(signature, 0, 0);
		};
		signature.src = '';
	},
	methods: {
		saveSignature() {
			this.signature = this.pad.toDataURL()
		},
		changeColor() {
			let r = Math.round(Math.random() * 255);
			let g = Math.round(Math.random() * 255);
			let b = Math.round(Math.random() * 255);
			let color = `rgb(${r}, ${g}, ${b})`;
			this.pad.penColor = color;
		},
		clearSignature() {
			this.pad.clear()
			this.signature = null
		}
	}
}
</script>

<style lang="scss" scoped >
canvas {
	&:hover {
		cursor: pointer;
	}
}
label {
	top: -17px;
	margin: 8px;
	color: black;
	font-size: 10px;
	padding: 3px 5px;
	position: absolute;
	background: #ecf5ff;
}
</style>