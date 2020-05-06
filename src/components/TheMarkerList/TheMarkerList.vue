<template>
  <div class="MarkerList">
    <div class="MarkerList__header">
      Маркеры
    </div>
    <div class="MarkerList__items">
      <MarkerListItem
        v-for="(item, index) in items"
        :key="index"
        v-bind="item"
        @click.native="onClick(item)"
      />
    </div>
  </div>
</template>

<script>
import MarkerListItem from './MarkerListItem'

export default {
  name: 'TheMarkerList',
  components: { MarkerListItem },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onClick (event) {
      return this.$emit('click', event)
    }
  }
}
</script>

<style scoped lang="scss">
.MarkerList {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.MarkerList__header {
  background-color: $blue;
  color: white;
  font-size: 1.25rem;
  padding: $gap * 2;
}

.MarkerList__items {
  overflow-y: auto;
}
</style>
