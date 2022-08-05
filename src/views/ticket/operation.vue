<template>
  <div class="operation">
    <operationHeade></operationHeade>

    <div class="operaTable">
      <newButton></newButton>
      <template>
        <el-table :data="GDlist" style="width: 100%">
          <el-table-column type="index" label="序号"> </el-table-column>
          <el-table-column prop="taskCode" label="工单编号"> </el-table-column>
          <el-table-column prop="innerCode" label="设备编号"> </el-table-column
          ><el-table-column prop="taskType.typeName" label="工单类型">
          </el-table-column
          ><el-table-column
            prop="createType"
            label="工单方式"
            :formatter="Type"
          >
          </el-table-column
          ><el-table-column
            prop="taskStatus"
            :formatter="Status"
            label="工单状态"
          >
          </el-table-column>
          >
          <el-table-column prop="userName" label="运营人员"> </el-table-column>
          <el-table-column prop="createTime" label="创建日期">
          </el-table-column>
          ><el-table-column prop="name" label="操作">
            <a>查看详情</a>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
import operationHeade from "./components/index.vue";
import { getTicketList } from "@/api/table";
import newButton from "./components/newButton.vue";
export default {
  components: {
    operationHeade,
    newButton,
  },
  data() {
    return {
      GDlist: [],
    };
  },

  created() {
    this.getGDList();
  },

  methods: {
    // 工单信息
    async getGDList() {
      const res = await getTicketList();
      console.log(res);
      this.GDlist = res.data.currentPageRecords;
      console.log(this.GDlist);
    },
    // 工单方式
    Type(row, column, cellValue) {
      if (cellValue === 0) {
        return "自动";
      } else {
        return "手动";
      }
    },
    // 工单状态
    Status(row, column, cellValue) {
      if (cellValue === 1) {
        return "待办";
      }
      if (cellValue === 2) {
        return "进行";
      }
      if (cellValue === 3) {
        return "取消";
      }
      if (cellValue === 4) {
        return "完成";
      }
    },
  },
};
</script>

<style scoped>
.operation {
  padding: 10px;
}
.operaTable {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 15px 19px 17px;
}
</style>
