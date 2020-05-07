<template>
  <div :class="cls">
    <div
      class="MarkerList__header"
      @click="active = !active"
    >
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
  data () {
    return {
      active: false
    }
  },
  computed: {
    cls () {
      return {
        MarkerList: true,
        MarkerList_active: this.active
      }
    }
  },
  methods: {
    onClick (event) {
      this.active = false
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
  background-color: white;
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

@media (max-width: 768px) {
  .MarkerList {
    width: 100%;
    height: 70%;
    position: absolute;
    bottom: 0;
    transform: translateY(calc( 100% - 58px ));
    transition: transform .3s;
    z-index: 1000000;

    &_active {
      transform: translateY(0);
    }
  }

  .MarkerList__header {
    text-align: center;
  }
}
</style>
