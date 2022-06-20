export default [
  {
    name: "access-denied",
    path: "/401",
    component: () => import("@/views/globals/401.vue"),
  },
];
