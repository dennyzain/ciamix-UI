# Ciamix UI

Ciamix's React component library uses [Base UI](https://base-ui.com) for behavior and an optional theme inspired by [Assetora](https://github.com/kargulstudio/assetora).

> **Web only.** Base UI renders DOM elements through `react-dom`, so it does not run in React Native (iOS/Android). Mobile would need its own native component layer.

## Layout

```
packages/ui/                 @ciamix/ui: the components (Base UI wrappers)
  src/components/<name>.tsx  One file per Base UI component (all 38 of them)
  src/global.css             Global setup Base UI needs (no visual styles)
  src/styles.css             Optional styles for the full component catalog
  src/styles/               Theme tokens and shared style rules
  src/index.ts               Public exports
apps/playground/             Vite app that previews every component
  src/demos/                 Examples covering every component, grouped by kind
```

The playground imports `@ciamix/ui` source directly, so there is no build step for the library.

## Commands

```bash
pnpm install
pnpm dev         # open the playground
pnpm typecheck
pnpm lint
pnpm build       # production build of the playground
```

## How the components are wrapped

Components use [Base UI's composition and behavior](https://base-ui.com/react/overview/quick-start).

- **Single components** (`Button`, `Input`, `Separator`, …) are a wrapper function, like `button.tsx`.
- **Compound components** (`Dialog`, `Select`, `Menu`, …) export an object of parts (`Dialog.Root`, `Dialog.Popup`, …).
  Rendered parts use `data-ciamix` to share styles across components.
- Providers, hooks, handles, and parts such as `Dialog.Root` and `Select.Root` are passed through from Base UI.
- Compound exports check their part names against Base UI during type checking.

For a part's prop types, use `ComponentProps<typeof Dialog.Popup>`. For state and event-detail types,
import them from Base UI directly, for example `import type { Dialog } from '@base-ui/react/dialog'` then `Dialog.Popup.State`.

## Using the theme

```tsx
import '@ciamix/ui/global.css'
import '@ciamix/ui/styles.css'
import { Button } from '@ciamix/ui'

<Button variant="default">Save changes</Button>
```

The default button uses the neutral `control` variant. The `default` variant is blue.
Set `data-ciamix-theme="dark"` on the document root so menus and dialogs inherit the theme through their portals.
Use the `--ci-*` CSS custom properties to change colors, radii, and shadows.
Your own CSS can target the component's `className` and Base UI's state attributes such as `data-open` and `data-invalid`.

## Adding a component

1. Import it from `@base-ui/react/<component>`.
2. Wrap it in `packages/ui/src/components/<component>.tsx`, following an existing file of the same kind.
3. Export it from `src/index.ts` and add a preview in `apps/playground/src/demos/`.
