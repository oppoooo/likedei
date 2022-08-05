import Layout from "@/layout";
export const asyncRoutes = [
  // 工单管理
  {
    path: "/ticket",
    component: Layout,
    name: "ticket",
    meta: { title: "工单管理", icon: "" },
    children: [
      {
        path: "operation",
        name: "operation",
        component: () => import("@/views/ticket/operation"),
        meta: { title: "运营工单" },
      },
      {
        path: "O&M",
        name: "O&M",
        component: () => import("@/views/ticket/O&M"),
        meta: { title: "运维工单" },
      },
    ],
  },
  // 点位管理
  {
    path: "/Point",
    component: Layout,
    name: "Point",
    meta: { title: "点位管理" },
    children: [
      {
        path: "location",
        name: "location",
        component: () => import("@/views/Point/location"),
        meta: { title: "区域管理" },
      },
      {
        path: "pointManagement",
        name: "pointManagement",
        component: () => import("@/views/Point/pointManagement"),
        meta: { title: "点位管理" },
      },
      {
        path: "partner",
        name: "partner",
        component: () => import("@/views/Point/partner"),
        meta: { title: "合作商管理" },
      },
    ],
  },
  // // 设备管理
  {
    path: "/device",
    component: Layout,
    name: "device",
    meta: { title: "设备管理" },
    children: [
      {
        path: "deviceManagement",
        name: "deviceManagement",
        component: () => import("@/views/device/deviceManagement"),
        meta: { title: "设备管理" },
      },
      {
        path: "DeviceStatus",
        name: "DeviceStatus",
        component: () => import("@/views/device/DeviceStatus"),
        meta: { title: "设备状态" },
      },
      {
        path: "DeviceType",
        name: "DeviceType",
        component: () => import("@/views/device/DeviceType"),
        meta: { title: "设备类型管理" },
      },
    ],
  },
  // // 人员管理
  {
    path: "/personnel",
    component: Layout,
    name: "personnel",
    meta: { title: "人员管理" },
    children: [
      {
        path: "personnelList",
        name: "personnelList",
        component: () => import("@/views/personnel/personnelList"),
        meta: { title: "人员列表" },
      },
      {
        path: "ErgonomicsStatistics",
        name: "ErgonomicsStatistics",
        component: () => import("@/views/personnel/ErgonomicsStatistics"),
        meta: { title: "人效统计" },
      },
      {
        path: "workload",
        name: "workload",
        component: () => import("@/views/personnel/workload"),
        meta: { title: "工作量列表" },
      },
    ],
  },
  // // 商品管理
  {
    path: "/merchandise",
    component: Layout,
    name: "merchandise",
    meta: { title: "商品管理" },
    children: [
      {
        path: "merchandiseManagement",
        name: "merchandiseManagement",
        component: () => import("@/views/merchandise/merchandiseManagement"),
        meta: { title: "商品管理" },
      },
      {
        path: "merchandiseType",
        name: "merchandiseType",
        component: () => import("@/views/merchandise/merchandiseType"),
        meta: { title: "商品类型" },
      },
    ],
  },
  // 策略管理
  {
    path: "/policy",
    component: Layout,
    children: [
      {
        path: "policy",
        name: "policy",
        component: () => import("@/views/policy/policy"),
        meta: { title: "策略管理" },
      },
    ],
  },
  // 订单管理
  {
    path: "/order",
    component: Layout,
    children: [
      {
        path: "order",
        name: "order",
        component: () => import("@/views/order/order"),
        meta: { title: "订单管理" },
      },
    ],
  },
  // 对账统计
  {
    path: "/reconciliation",
    component: Layout,
    children: [
      {
        path: "reconciliation",
        name: "reconciliation",
        component: () => import("@/views/reconciliation/reconciliation"),
        meta: { title: "对账统计" },
      },
    ],
  },
];

export default asyncRoutes;
