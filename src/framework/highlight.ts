/**
 * Мини-подсветка синтаксиса для Vue/TS кода.
 * Один проход по экранированному тексту — без вложенных замен,
 * чтобы подсветка строк и комментариев не «съедала» остальное.
 */

const escapeHtml = (code: string): string =>
  code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const KEYWORDS = [
  'const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'do', 'switch',
  'case', 'break', 'continue', 'import', 'from', 'export', 'default', 'async', 'await',
  'new', 'class', 'extends', 'implements', 'type', 'interface', 'enum', 'as', 'of', 'in',
  'typeof', 'instanceof', 'void', 'null', 'undefined', 'true', 'false', 'this', 'try',
  'catch', 'finally', 'throw', 'static', 'readonly', 'public', 'private', 'protected',
  'satisfies', 'keyof', 'infer', 'declare', 'namespace', 'yield', 'delete', 'with',
  'defineProps', 'defineEmits', 'defineModel', 'defineExpose', 'defineOptions',
  'ref', 'reactive', 'computed', 'watch', 'watchEffect', 'shallowRef', 'shallowReactive',
  'readonly', 'toRef', 'toRefs', 'toValue', 'unref', 'triggerRef', 'nextTick',
  'onMounted', 'onBeforeMount', 'onUnmounted', 'onBeforeUnmount', 'onUpdated',
  'provide', 'inject', 'createApp', 'h', 'markRaw', 'useTemplateRef',
]

const TOKEN_RE = new RegExp(
  [
    '(?<comment>//[^\\n]*|/\\*[\\s\\S]*?\\*/|&lt;!--[\\s\\S]*?--&gt;)',
    "(?<string>'(?:[^'\\\\\\n]|\\\\.)*'|\"(?:[^\"\\\\\\n]|\\\\.)*\"|`(?:[^`\\\\]|\\\\.)*`)",
    '(?<interp>\\{\\{[^}]*\\}\\})',
    '(?<tag>&lt;\\/?[A-Za-z][\\w.-]*|&lt;\\/?[A-Za-z-]+)',
    '(?<keyword>\\b(?:' + KEYWORDS.join('|') + ')\\b)',
    '(?<number>\\b\\d+(?:\\.\\d+)?\\b)',
    '(?<fn>\\b[A-Za-z_$][\\w$]*(?=\\())',
  ].join('|'),
  'g',
)

const CLASS_BY_GROUP: Record<string, string> = {
  comment: 'tk-comment',
  string: 'tk-string',
  interp: 'tk-interp',
  tag: 'tk-tag',
  keyword: 'tk-keyword',
  number: 'tk-number',
  fn: 'tk-fn',
}

/** Возвращает HTML со спанами-токенами. Код уже экранирован. */
export function highlight(code: string): string {
  const escaped = escapeHtml(code)
  let out = ''
  let last = 0

  TOKEN_RE.lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = TOKEN_RE.exec(escaped)) !== null) {
    out += escaped.slice(last, match.index)
    const groups = match.groups ?? {}
    const cls =
      Object.entries(groups).find(([, value]) => value !== undefined)?.[0] ?? ''
    const class_ = CLASS_BY_GROUP[cls]
    out += class_ ? `<span class="${class_}">${match[0]}</span>` : match[0]
    last = match.index + match[0].length
  }
  out += escaped.slice(last)
  return out
}
