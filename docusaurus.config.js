// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import dotenv from "dotenv";

dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  title: "DEGENX Documentation",
  tagline: "Learn about the DEGENX Ecosystem today!",
  favicon: "img/favicon2.ico",

  // Set the production url of your site here
  url: `${process.env.DEGENX_DOCS_URL}`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "DEGENTOKENTEAM", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/DEGENTOKENTEAM/docs/edit/main/",
        },
        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card3.png",
      navbar: {
        title: "DEGENX Documentation",
        logo: {
          alt: "DEGENX Logo",
          src: "/img/degenx_blue_single.svg",
          srcDark: "/img/degenx_cyan_single.svg",
        },
        items: [],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "DEGENX",
            items: [
              {
                label: "Tokenomics",
                to: "degenx-ecosystem/Dgnx%20Token/tokenomics",
              },
              {
                label: "Contracts & Audits",
                to: "/degenx-ecosystem/contracts-and-audits",
              },
              {
                label: "Roadmap",
                to: "/degenx-ecosystem/Roadmap",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/DegenXportal",
              },
              {
                label: "Discord",
                href: "https://discord.gg/BMaVtEVkgC",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/DegenEcosystem",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "CoinMarketCap",
                href: "https://coinmarketcap.com/currencies/degenx",
              },
              {
                label: "CoinGecko",
                href: "https://www.coingecko.com/en/coins/degenx",
              },
              {
                label: "GitHub",
                href: "https://github.com/DEGENTOKENTEAM",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DEGENX`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
