# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

-----------------------------------------------------------------------------------------------------------------------

# SCSS Style Project

This project uses SCSS to manage color variables with a grayscale and white palette.

## Color Palette

The following is the color palette used in the project, defined in `ads-variables.scss`, along with its usage in the design system:

| Variable Name                     | Color    | Hex Code   | Usage                                               |
|------------------------------------|----------|------------|-----------------------------------------------------|
| `$--ads-colors-white`              | White    | `#ffffff`  | Default page background                             |
| `$--ads-colors-gray-10`            | Gray 10  | `#f4f4f4`  | Primary container background; Secondary page background |
| `$--ads-colors-gray-20`            | Gray 20  | `#e0e0e0`  | Subtle border; Tertiary background color;"Light" variant elements |
| `$--ads-colors-gray-40`            | Gray 40  | `#a8a8a8`  | Placeholder text                                    |
| `$--ads-colors-gray-50`            | Gray 50  | `#8d8d8d`  | Element medium contrast; Medium contrast border     |
| `$--ads-colors-gray-60`            | Gray 60  | `#6f6f6f`  | Tertiary text; Help text                            |
| `$--ads-colors-gray-70`            | Gray 70  | `#525252`  | Secondary icons                                     |
| `$--ads-colors-gray-80`            | Gray 80  | `#393939`  | Secondary interactive color; Secondary button        |
| `$--ads-colors-gray-100`           | Gray 100 | `#161616`  | lement contrast; High contrast border; Emphasis elements |

These colors are available as SCSS variables and can be referenced in any SCSS file with the `$--ads-colors-` prefix.

## Example Usage

To use these colors in your SCSS file:

```scss
.element {
  background-color: $--ads-colors-gray-10;
  color: $--ads-colors-white;
}
