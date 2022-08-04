import Layout from "@/layout";
export default {
  path: "/Point",
  component: Layout,
  children: [
    {
      path: "",
      component: () => import("@/views/Point"),
      meta: { title: "点位管理", icon: "link" },
    },
  ],
};
