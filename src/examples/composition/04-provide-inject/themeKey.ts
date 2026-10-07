import type { InjectionKey, ComputedRef } from 'vue'

export interface ThemeContext {
  /** Read-only вид на тему: nested Ref в шаблоне НЕ распаковывается — нужен .value */
  mode: ComputedRef<'dark' | 'light'>
  toggle: () => void
}

export const themeKey: InjectionKey<ThemeContext> = Symbol('theme')
