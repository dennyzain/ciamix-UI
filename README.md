# Ciamix UI

Ciamix's component library, built on [Base UI](https://base-ui.com): unstyled, accessible React components that we style ourselves.

> **Web only.** Base UI renders DOM elements through `react-dom`, so it does not run in React Native (iOS/Android). Mobile would need its own native component layer.

## Layout

```
packages/ui/                 @ciamix/ui: the components (Base UI wrappers)
  src/components/<name>.tsx  One file per Base UI component (all 38 of them)
  src/global.css             Global setup Base UI needs (no visual styles)
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

Every component keeps Base UI's API, so the [Base UI docs](https://base-ui.com/react/overview/quick-start) apply as-is.

- **Single components** (`Button`, `Input`, `Separator`, …) are a wrapper function, like `button.tsx`.
- **Compound components** (`Dialog`, `Select`, `Menu`, …) export an object of parts (`Dialog.Root`, `Dialog.Popup`, …).
  Each part that renders an element has its own wrapper function in the file, ready for styles.
- **Some parts are passed through from Base UI unchanged**: parts that render no element of their own
  (`Dialog.Root`, `Toast.Provider`), parts that are generic over their value type (`Select.Root`, `Radio.Root`,
  `Toggle`, `Form`, triggers with a `Payload`), and hooks or handles (`Toast.useToastManager`, `Dialog.createHandle`).
  Wrapping those would lose their typing, so style them with `className` where they are used.
- Each file ends with `satisfies Record<keyof typeof Base…, unknown>`, so typecheck fails if a Base UI upgrade adds a part we don't export.

For a part's prop types, use `ComponentProps<typeof Dialog.Popup>`. For state and event-detail types,
import them from Base UI directly, for example `import type { Dialog } from '@base-ui/react/dialog'` then `Dialog.Popup.State`.

## Adding styles

The library is unstyled. The playground uses a few local styles to make controls visible and interactive.
Once the design is decided, style the library in `packages/ui/src/components/*`.
Base UI exposes state through `data-*` attributes (`data-disabled`, `data-open`, `data-invalid`, …)
and accepts `className` as a string or as a function of component state.

## Adding a component

1. Import it from `@base-ui/react/<component>`.
2. Wrap it in `packages/ui/src/components/<component>.tsx`, following an existing file of the same kind.
3. Export it from `src/index.ts` and add a preview in `apps/playground/src/demos/`.
