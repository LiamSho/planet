export const transitionViewIfSupported = (updateCb: () => any) => {
  if (window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) {
    updateCb()
    return
  }
  // @ts-ignore
  if (document.startViewTransition) {
    // @ts-ignore
    document.startViewTransition(updateCb)
  } else {
    updateCb()
  }
}
