<template>
  <div class="page-title">
    <magic-text>{{ title }}</magic-text>
		<div v-if="hasRightSlot" class="page-title-right">
			<slot></slot>
		</div>
  </div>
</template>

<script>
	export default {
		props: {
			title: String
		},
		computed: {
			hasRightSlot() {
				return !!this.$slots.default
			}
		}
	}
</script>

<style lang="scss" scoped>
  .page-title {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 69px;
    border-bottom: 1px solid var(--secondary-color);

		.page-title-right {
			margin-left: auto;
		}
  }
</style>
