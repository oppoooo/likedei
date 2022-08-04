import Layout from "@/layout";
export default {
  path: "/personnel",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/personnel/personnel"),
      meta: { title: "人员管理", icon: "link" },
    },
  ],
};
