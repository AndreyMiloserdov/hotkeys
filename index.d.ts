export interface HotkeysEvent {
  key: string
  method: KeyHandler
  mods: number[]
  scope: string
  shortcut: string
}

export interface KeyHandler {
  (keyboardEvent: KeyboardEvent, hotkeysEvent: HotkeysEvent): void | boolean
}

export type Options = {
  scope?: string,
  element?: HTMLElement | null,
  keyup?: boolean | null
  keydown?: boolean | null
  splitKey?: string;
}

interface Hotkeys {
  (key: string | number[], method: KeyHandler): void
  (key: string | number[], scope: string, method: KeyHandler): void
  (key: string | number[], options: Options, method: KeyHandler): void

  shift: boolean
  ctrl: boolean
  alt: boolean
  option: boolean
  control: boolean
  cmd: boolean
  command: boolean

  setScope(scopeName: string): void
  getScope(): string
  deleteScope(scopeName: string): void

  noConflict(): void

  unbind(key: string | number[]): void
  unbind(key: string | number[], scopeName: string): void
  unbind(key: string | number[], scopeName: string, method: KeyHandler): void
  unbind(key: string | number[], method: KeyHandler): void

  isPressed(keyCode: number): boolean
  isPressed(keyCode: string): boolean
  getPressedKeyCodes(): number[]

  filter(event: KeyboardEvent): boolean

  addCustomKeyMap(customKeyMap: Record<string, number>): void
}
// https://github.com/eiriklv/react-masonry-component/issues/57
declare var hotkeys: Hotkeys
export default hotkeys;
