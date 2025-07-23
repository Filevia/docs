import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  title: "Filevia",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Website", link: "https://filevia.cn/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/Filevia/filevia" }],

    editLink: {
      pattern: "https://github.com/Filevia/docs/edit/main/:path",
      text: "Edit this page on GitHub",
    },
  },

  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
    },
    image: {
      // false by default; Set to true to enable lazy loading for all images.
      lazyLoading: true,
    },
  },

  lastUpdated: true,
  cleanUrls: true,
});
