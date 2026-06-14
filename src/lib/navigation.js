const dispatchLocationChange = () => {
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function navigateTo(target, options = {}) {
  const { replace = false, scrollToTop = true } = options

  if (typeof window === 'undefined') return

  const url = new URL(target, window.location.origin)
  if (url.origin !== window.location.origin) {
    window.location.assign(url.toString())
    return
  }

  const nextLocation = `${url.pathname}${url.search}${url.hash}`
  window.history[replace ? 'replaceState' : 'pushState']({}, '', nextLocation)
  dispatchLocationChange()

  if (scrollToTop && !url.hash) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export function scrollToSection(sectionId, options = {}) {
  const { behavior = 'smooth', offset = 160 } = options

  if (typeof window === 'undefined' || !sectionId) return false

  const element = document.getElementById(sectionId)
  if (!element) return false

  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - offset)
  window.scrollTo({ top, behavior })
  return true
}

export function navigateToHomeSection(sectionId, options = {}) {
  const { offset = 160 } = options

  if (typeof window === 'undefined') return

  if (!sectionId) {
    navigateTo('/')
    return
  }

  if (window.location.pathname === '/') {
    window.history.replaceState({}, '', `/#${sectionId}`)
    dispatchLocationChange()
    window.requestAnimationFrame(() => {
      scrollToSection(sectionId, { offset })
    })
    return
  }

  navigateTo(`/#${sectionId}`, { scrollToTop: false })
}
