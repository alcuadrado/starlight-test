import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://hardhat.org",
  integrations: [
    starlight({
      title: "Hardhat 3",
      favicon: "/favicon.ico",
      logo: {
        light: "./src/assets/hardhat-logo-light.svg",
        dark: "./src/assets/hardhat-logo-dark.svg",
        replacesTitle: true,
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/NomicFoundation/hardhat",
        },
        {
          icon: "x.com",
          label: "X",
          href: "https://x.com/HardhatHQ",
        },
        {
          icon: "discord",
          label: "Discord",
          href: "https://hardhat.org/discord",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
            { slug: "guides/foo" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
          collapsed: true,
        },
      ],
      customCss: ["./src/styles/custom-starlight-theme.css"],
    }),
  ],
});
