declare module 'vitepress/theme' {
  import { App } from 'vue'

  export interface Theme {
    Layout?: any
    NotFound?: any
    enhanceApp?: (ctx: { app: App; router: any; siteData: any }) => void
  }

  const DefaultTheme: Theme
  export default DefaultTheme
}

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
