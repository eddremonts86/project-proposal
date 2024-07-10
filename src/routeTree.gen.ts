/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as DocumentationIndexImport } from './routes/documentation/index'
import { Route as DocumentationTablesIndexImport } from './routes/documentation/tables/index'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DocumentationIndexRoute = DocumentationIndexImport.update({
  path: '/documentation/',
  getParentRoute: () => rootRoute,
} as any)

const DocumentationTablesIndexRoute = DocumentationTablesIndexImport.update({
  path: '/documentation/tables/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/documentation/': {
      id: '/documentation/'
      path: '/documentation'
      fullPath: '/documentation'
      preLoaderRoute: typeof DocumentationIndexImport
      parentRoute: typeof rootRoute
    }
    '/documentation/tables/': {
      id: '/documentation/tables/'
      path: '/documentation/tables'
      fullPath: '/documentation/tables'
      preLoaderRoute: typeof DocumentationTablesIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  DocumentationIndexRoute,
  DocumentationTablesIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/documentation/",
        "/documentation/tables/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/documentation/": {
      "filePath": "documentation/index.tsx"
    },
    "/documentation/tables/": {
      "filePath": "documentation/tables/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
