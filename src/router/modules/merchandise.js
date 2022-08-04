import Layout from "@/layout";
export default {
  path: "/merchandise",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/merchandise/merchandise"),
      meta: { title: "商品管理", icon: "link" },
    },
  ],
};
