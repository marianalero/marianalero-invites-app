import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const defaultImage = "https://marianalero.github.io/";
const defaultUrl = "https://marianalero.github.io/";

function setMeta(attribute: "name" | "property", key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  const created = !element;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  const previous = element.getAttribute("content");
  element.setAttribute("content", content);
  return () => {
    if (created) element?.remove();
    else if (previous == null) element?.removeAttribute("content");
    else element.setAttribute("content", previous);
  };
}

export default function Seo({ title, description, image, url }: SeoProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    const restore = [
      () => {
        document.title = previousTitle;
      },
      setMeta("name", "description", description),
      setMeta("property", "og:title", title),
      setMeta("property", "og:description", description),
      setMeta("property", "og:image", image || defaultImage),
      setMeta("property", "og:url", url || defaultUrl),
      setMeta("property", "og:type", "website"),
      setMeta("name", "twitter:title", title),
      setMeta("name", "twitter:description", description),
      setMeta("name", "twitter:image", image || defaultImage),
      setMeta("name", "twitter:card", "summary_large_image"),
    ];
    return () => restore.forEach((fn) => fn());
  }, [title, description, image, url]);

  return null;
}
