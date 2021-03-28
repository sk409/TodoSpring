<template>
  <div id="the-scaffold">
    <slot name="header">
      <header id="header"></header>
    </slot>
    <div class="d-flex">
      <slot name="sidebar">
        <aside id="sidebar"></aside>
      </slot>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheScaffold",
};
</script>

<style lang="scss" scoped>
@use "~@/variables" as v;

$header-height: 44px;

#header {
  align-items: center;
  background-color: v.$primary-color;
  display: flex;
  height: $header-height;
  justify-content: center;
  z-index: 200;
}

#sidebar {
  background-color: #fafafa;
  font-size: 13px;
  height: calc(100vh - #{$header-height});
  overflow: hidden;
  padding-left: 35px;
  padding-top: 30px;
  width: 200px;
}
</style>
