// eslint.config.mjs
import pluginVue from "eslint-plugin-vue";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import { globalIgnores } from "eslint/config";

export default defineConfigWithVueTs(
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  {
    rules: {
      "vue/multi-word-component-names": 0,
    },
  },
  globalIgnores(['**/**.d.ts'])
);
