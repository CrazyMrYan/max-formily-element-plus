import Prism from 'prismjs'
import escapeHtml from 'escape-html'
// 简化版本，不使用动态加载
const prism = Prism

function wrap(code, lang) {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  return `<pre v-pre class="language-${lang}"><code>${code}</code></pre>`
}

function getLangCodeFromExtension(extension) {
  const extensionMap = {
    vue: 'markup',
    html: 'markup',
    md: 'markdown',
    rb: 'ruby',
    ts: 'typescript',
    py: 'python',
    sh: 'bash',
    yml: 'yaml',
    styl: 'stylus',
    kt: 'kotlin',
    rs: 'rust',
  }

  return extensionMap[extension] || extension
}

export default function (str, lang) {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  const rawLang = lang

  lang = getLangCodeFromExtension(lang)

  if (!prism.languages[lang]) {
    console.warn(
      `[vitepress] Syntax highlight for language "${lang}" is not supported.`
    )
  }
  if (prism.languages[lang] && str) {
    try {
      const code = prism.highlight(str, prism.languages[lang], lang)
      return wrap(code, rawLang)
    } catch (e) {
      console.warn(`Highlight error for language ${lang}:`, e)
    }
  }
  return wrap(str, 'text')
}
