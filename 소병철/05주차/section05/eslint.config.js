import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    // 규칙을 만들면 된다.
    rules: {
      "no-unused-vars": "off", // 실제로 사용되지 않는 변수를 오류로 알려주는 옵션
      "react/prop-types": "off", // 실습 중에 오히려 불편할 수 있는 옵션
    },
  },
]);
