import { createApp } from "vue";
import HomePage from "&/home/components/HomePage.vue";
import TheScaffold from "^/components/TheScaffold.vue";
import "@/app";

const app = createApp({
  components: {
    HomePage,
  },
});

const requireComponent = require.context(
  "^/components",
  true,
  /App[A-Z]\w+\.(vue|js)$/
);
requireComponent.keys().forEach((fileName: string) => {
  let appComponentConfig = requireComponent(fileName);
  appComponentConfig = appComponentConfig.default || appComponentConfig;
  const appComponentName =
    appComponentConfig.name ||
    fileName.replace(/^.+\//, "").replace(/\.\w+$/, "");
  app.component(appComponentName, appComponentConfig);
});

app.component("TheScaffold", TheScaffold);
app.mount("#app");
