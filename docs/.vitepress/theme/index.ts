import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { ElIcon } from 'element-plus'
import DumiPreviewer from '../components/dumi-previewer.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('dumi-previewer', DumiPreviewer)
    app.component('ElIcon', ElIcon)
    app.use(ElementPlus, { size: 'default' })
  },
}
