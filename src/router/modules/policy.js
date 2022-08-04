import Layout from "@/layout";
export default {
  path: "/policy",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/policy/policy"),
      meta: { title: "策略管理", icon: "link" },
      
    },
  ],
};
