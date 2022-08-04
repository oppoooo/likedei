import Layout from "@/layout";
export default {
  path: "/ticket",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/ticket"),
      meta: { title: "工单管理", icon: "link" },
    },
  ],
};
