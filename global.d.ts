/**
 * TypeScript で window 直下にいろいろ生やしたりグローバル変数を定義する
 * https://dev.classmethod.jp/articles/typings-of-window-object/
 */
import {Browser, Page} from 'puppeteer'

declare global {
  let browser: Browser;
  let page: Page;
}
