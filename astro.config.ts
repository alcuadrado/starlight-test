import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";
import partytown from "@astrojs/partytown";
import vercel from "@astrojs/vercel";
import { setGlobalDispatcher, Agent } from "undici";

// We set this up to prefer IPv4 connections to IPv6 connections
// as otherwise the Vercel deployments were failing when trying to access
// the Ghost API
setGlobalDispatcher(new Agent({ connect: { family: 4 } }));

export default defineConfig({
  site: "https://hardhat.org/",
  adapter: vercel({}),
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
      plugins: [
        starlightSidebarTopics([
          {
            label: "Hardhat 3",
            id: "hardhat",
            link: "/docs/getting-started/",
            items: [
              { slug: "docs/getting-started" },
              {
                label: "Learn more",
                autogenerate: {
                  directory: "docs/guides",
                  collapsed: true,
                },
              },
              {
                label: "Migrate to Hardhat 3",
                items: [
                  {
                    label: "From Hardhat 2",
                    link: "http://localhost:4321/docs/migrate-from-hardhat2/",
                  },
                ],
              },
              {
                label: "Reference",
                autogenerate: {
                  directory: "docs/reference",
                  collapsed: true,
                },
              },
            ],
          },
          {
            label: "Migrate from Hardhat 2",
            id: "migrate-from-hardhat2",
            link: "/docs/migrate-from-hardhat2/",
            items: [
              "docs/migrate-from-hardhat2",
              "docs/migrate-from-hardhat2/mocha-tests",
            ],
          },
          {
            label: "Hardhat Ignition",
            id: "ignition",
            link: "/ignition/",
            items: [
              { label: "Overview", slug: "ignition" },
              {
                label: "Guides",
                autogenerate: {
                  directory: "ignition/guides",
                },
              },
            ],
          },
        ]),
      ],
      customCss: ["./src/styles/custom-starlight-theme.css"],
      components: {
        Sidebar: "./src/components/Sidebar.astro",
        Header: "./src/components/Header.astro",
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  trailingSlash: "never",
  redirects: {
    "/test-redirect": {
      status: 302,
      destination: "/docs/reference/example/index.html",
    },
  },
});
