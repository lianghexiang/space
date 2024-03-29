import { g as defineComponent, h as r, j as ref, k as shallowRef, l as computed, v, m as onMounted, n as h, C, _ as __vitePreload } from "./app-c2e03701.js";
const style = "";
const vuePlayground = "";
const V = (e) => JSON.parse(decodeURIComponent(e));
var w = defineComponent({ name: "VuePlayground", props: { title: { type: String, default: "" }, files: { type: String, required: true }, settings: { type: String, default: "{}" } }, setup(e) {
  const u = r(), l = ref(true), o = shallowRef(), a = shallowRef(), n = computed(() => v({}, u, V(e.settings))), i = async () => {
    const { ReplStore: s, Repl: p } = await __vitePreload(() => import("./vue-repl-7902fb9a.js"), true ? ["assets/vue-repl-7902fb9a.js","assets/app-c2e03701.js"] : void 0);
    o.value = p, a.value = new s({ serializedState: decodeURIComponent(e.files) }), n.value.vueVersion && await a.value.setVueVersion(n.value.vueVersion);
  };
  return onMounted(async () => {
    await i(), l.value = false;
  }), () => [h("div", { class: "vue-playground-wrapper" }, [e.title ? h("div", { class: "header" }, decodeURIComponent(e.title)) : null, h("div", { class: "repl-container" }, [l.value ? h(C, { class: "preview-loading", height: 192 }) : null, o.value ? h(o.value, { store: a.value, autoResize: true, ...n.value, layout: "horizontal" }) : null])])];
} });
export {
  w as default
};
