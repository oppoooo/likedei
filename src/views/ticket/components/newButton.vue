<template>
  <div>
    <el-button
      class="color"
      type="primary"
      icon="el-icon-circle-plus-outline"
      size="small"
      >新增</el-button
    >
    <el-button
      class="GD"
      type="primary"
      size="small"
      >工单配置</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>

<style scoped>
.color {
  background-color: #ff702b;
  border: none;
  margin-bottom: 20px;
  width: 80px;
}
.GD {
    background-color: #f8f4f0;
    border: unset;
    color: black;
    width: 80px;
}
</style>
