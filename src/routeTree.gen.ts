/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthImport } from './routes/_auth'
import { Route as AppImport } from './routes/_app'
import { Route as AuthSignUpImport } from './routes/_auth/sign-up'
import { Route as AuthSignInImport } from './routes/_auth/sign-in'
import { Route as AppDashboardImport } from './routes/_app/dashboard'

// Create/Update Routes

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const AppRoute = AppImport.update({
  id: '/_app',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignUpRoute = AuthSignUpImport.update({
  path: '/sign-up',
  getParentRoute: () => AuthRoute,
} as any)

const AuthSignInRoute = AuthSignInImport.update({
  path: '/sign-in',
  getParentRoute: () => AuthRoute,
} as any)

const AppDashboardRoute = AppDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => AppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_app': {
      preLoaderRoute: typeof AppImport
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_app/dashboard': {
      preLoaderRoute: typeof AppDashboardImport
      parentRoute: typeof AppImport
    }
    '/_auth/sign-in': {
      preLoaderRoute: typeof AuthSignInImport
      parentRoute: typeof AuthImport
    }
    '/_auth/sign-up': {
      preLoaderRoute: typeof AuthSignUpImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  AppRoute.addChildren([AppDashboardRoute]),
  AuthRoute.addChildren([AuthSignInRoute, AuthSignUpRoute]),
])

/* prettier-ignore-end */
