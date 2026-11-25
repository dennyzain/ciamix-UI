# Ciamix UI

Ciamix's component library, built on [Base UI](https://base-ui.com): unstyled, accessible React components that we style ourselves.

> **Web only.** Base UI renders DOM elements through `react-dom`, so it does not run in React Native (iOS/Android). Mobile would need its own native component layer.

## Layout

```
packages/ui/          @ciamix/ui: the components (Base UI wrappers)
  src/button.tsx      Button
  src/input.tsx       Input
  src/field.tsx       Field (label, description, error)
  src/global.css      Global setup Base UI needs (no visual styles)
  src/index.ts        Public exports
apps/playground/      Vite app that previews every component
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

## Adding styles

Components have no styles yet. Once the design is decided, style them in `packages/ui/src/*`.
Base UI exposes state through `data-*` attributes (`data-disabled`, `data-focused`, `data-invalid`, …)
and accepts `className` as a string or as a function of component state.

## Adding a component

1. Import it from `@base-ui/react/<component>`.
2. Wrap it in `packages/ui/src/<component>.tsx` like `button.tsx`.
3. Export it from `src/index.ts` and add it to the playground.
