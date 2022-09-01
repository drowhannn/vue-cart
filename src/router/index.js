import { createRouter, createWebHistory } from "vue-router";
import AllItems from "../views/AllItems.vue";
import ItemDetail from "../views/ItemDetail.vue";

const routes = [
  {
    path: "/",
    name: "all items",
    component: AllItems,
  },
  {
    path: "/:id",
    name: "item detail page",
    component: ItemDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
