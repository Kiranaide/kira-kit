// src/plugins/component-resolver.js
import fs from "fs";
import path from "path";

export function resolveComponent(options) {
  const { dirs = ["./src/components/@kirakit"], extensions = ["jsx", "tsx"] } =
    options;

  const componentsMap = {};

  // Scan directories for components
  dirs.forEach((dir) => {
    const absolutePath = path.resolve(process.cwd(), dir);
    scanDirectory(absolutePath, componentsMap, extensions);
  });

  return {
    type: "component",
    resolve: (name) => {
      if (componentsMap[name]) {
        return { name, from: componentsMap[name] };
      }
    },
  };
}

function scanDirectory(dir, componentsMap, extensions) {
  if (!fs.existsSync(dir)) return;

  const files = fs.readdirSync(dir, { withFileTypes: true });

  files.forEach((file) => {
    const filePath = path.join(dir, file.name);

    if (file.isDirectory()) {
      scanDirectory(filePath, componentsMap, extensions);
      return;
    }

    const ext = path.extname(file.name).substring(1);
    if (!extensions.includes(ext)) return;

    const componentName = path.basename(file.name, `.${ext}`);

    // Skip files that start with lowercase (assume they are not components)
    if (
      componentName[0] === componentName[0].toLowerCase() &&
      componentName[0] !== componentName[0].toUpperCase()
    ) {
      return;
    }

    // Convert path to relative path from src
    const relativePath = path.relative(process.cwd(), filePath);
    const importPath = relativePath.replace(/\.(jsx|tsx)$/, "");

    componentsMap[componentName] = importPath;
  });
}
