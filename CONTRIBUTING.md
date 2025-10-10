# Contributing to Hardhat's website

Thanks for your interest in contributing to Hardhat's website!

This website is built using [Astro](https://astro.build), and [Starlight](https://starlight.astro.build).

## Editing content

The website's content is located in the [`src/content`](./src/content) directory, and written in Markdown.

You don't need to learn about Starlight to be able to edit the content.

### Adding a new page

In most cases, if you place a new `.md` file in a folder within the [`src/content`](./src/content) directory, it will be automatically added to the website. You can validate if it does by running the website locally and checking if it appears in its section's sidebar.

If it doesn't, you may need to edit the [`src/content.config.ts`](./src/content.config.ts) file to add it to the sidebar. We use [`starlight-sidebar-topics`](https://starlight-sidebar-topics.netlify.app/docs/getting-started/) to manage the different section's/topic's sidebars, so please refer to its documentation for more information.

## Running the website locally

To run the website locally, you'll need to install the dependencies:

```bash
pnpm install
```

Then, you can run the development server:

```bash
pnpm run dev
```
