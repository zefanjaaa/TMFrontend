// import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/

// export default {
//   plugins: [react()],
//   rollupOptions: {
//     external: ["react", "react-router", "react-router-dom"],
//     output: {
//       globals: {
//         react: "React",
//       },
//     },
//   },
// };

export default {
  plugins: [react()],
  rollupOptions: {
    external: ["react", "react-router", "react-router-dom"],
    output: {
      globals: {
        react: "React",
      },
      root: path.resolve(__dirname, "frontend"),
      build: {
        outDir: "../dist",
      },
    },
  },
};
