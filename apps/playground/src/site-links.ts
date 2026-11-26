const base = import.meta.env.BASE_URL

export const homeUrl = base
export const catalogUrl = `${base}components/`
export const docsUrl = `${catalogUrl}#docs`
export const repositoryUrl = 'https://github.com/dennyzain/ciamix-UI'

export function componentAnchor(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}
