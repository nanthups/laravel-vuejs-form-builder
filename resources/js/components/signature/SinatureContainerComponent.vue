<template>
	<div>
		<sinature-pad-component></sinature-pad-component>
	</div>
</template>

<script type="text/javascript">
	import SinaturePadComponent from './SinaturePadComponent.vue'
	export default {
		components: {
			SinaturePadComponent
		},
		data() {
			return {
				cS: null
			}
		},
		methods: {
			saveSignature: function(data) {
				this.cS = data
			}
		}
	}
</script>