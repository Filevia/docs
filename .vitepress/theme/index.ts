// https://vitepress.dev/guide/custom-theme
import mediumZoom from "medium-zoom";
import "nprogress-v2/dist/index.css"; // 进度条样式
import { NProgress } from "nprogress-v2/dist/index.js"; // 进度条组件
import { EnhanceAppContext, inBrowser, Theme, useRoute } from "vitepress";
import DefaultTheme from "vitepress/theme";
import { h, nextTick, onMounted, watch } from "vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
      mediumZoom(".main img", { background: "var(--vp-c-bg)" });
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
  // Layout: () => {
  //   return h();
  // },
  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // 进度条组件
    if (inBrowser) {
      NProgress.configure({ showSpinner: false });
      router.onBeforeRouteChange = () => {
        NProgress.start(); // 开始进度条
      };
      router.onAfterRouteChange = () => {
        NProgress.done(); // 停止进度条
      };
    }
  },
} satisfies Theme;
