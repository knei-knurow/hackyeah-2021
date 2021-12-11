import App from './App.svelte'

declare global {
  interface ObjectConstructor {
    keys<T>(o: T): (keyof T)[]
  }
}

const app = new App({
  target: document.getElementById('app'),
})

export default app
