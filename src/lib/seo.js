import { useEffect } from 'react'

const DEFAULT_TITLE = 'TatraGrail'
const DEFAULT_DESCRIPTION = 'TatraGrail - katalog produktow, informacje o wysylce, regulamin i kontakt.'

const ensureMetaTag = (name) => {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }

  return tag;
};

export function useSeo({ title, description }) {
  useEffect(() => {
    const previousTitle = document.title;
    const previousDescription = ensureMetaTag('description').getAttribute('content');

    document.title = title || DEFAULT_TITLE;
    ensureMetaTag('description').setAttribute('content', description || DEFAULT_DESCRIPTION);

    return () => {
      document.title = previousTitle || DEFAULT_TITLE;
      ensureMetaTag('description').setAttribute('content', previousDescription || DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
