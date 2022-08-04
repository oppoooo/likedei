import Layout from "@/layout";
export default {
  path: "/device",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/device/device"),
      meta: { title: "设备管理", icon: "link" },
      
    },
  ],
};
