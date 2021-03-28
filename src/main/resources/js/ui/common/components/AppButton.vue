<template>
  <button :class="classes" class="app-button" type="button">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "AppButton",
  props: {
    text: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const classes = computed(() => {
      const appearanceClasses = [];
      const appearanceAttributes = { text: "text-button" };
      for (let key in appearanceAttributes) {
        if (!props[key]) {
          continue;
        }
        appearanceClasses.push(appearanceAttributes[key]);
      }
      if (appearanceClasses.length === 0) {
        appearanceClasses.push("default-button");
      }
      return appearanceClasses;
    });

    return {
      classes,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "~@/variables" as v;

.app-button {
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 13px;
  margin: 0;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
}

.app-button.default-button {
  background-color: v.$primary-color;
  color: #fff;
  display: inline-block;
  font-weight: 700;
  line-height: 17px;
  padding: 6px 12px 7px;
  text-align: center;
}

.app-button.text-button {
  background-color: transparent;
  color: #555;
  padding: 2px 5px;
}

.app-button.text-button:hover {
  text-decoration: underline;
}
</style>
