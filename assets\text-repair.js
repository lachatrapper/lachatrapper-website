/* Repariert fehlerhaft gespeicherte Umlaute in der lokalen Ausgangsdatei. */
(() => {
  const decoder = new TextDecoder("utf-8", { fatal: true });
  const suspicious = /[ÃÂâ]/;

  function repair(value) {
    if (!value || !suspicious.test(value)) return value;
    try {
      return decoder.decode(Uint8Array.from(value, (char) => char.charCodeAt(0)));
    } catch {
      return value;
    }
  }

  function repairPage() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (parent && !["SCRIPT", "STYLE"].includes(parent.tagName)) node.nodeValue = repair(node.nodeValue);
    });
    document.querySelectorAll("[alt], [aria-label], [placeholder], [title]").forEach((element) => {
      ["alt", "aria-label", "placeholder", "title"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) element.setAttribute(attribute, repair(element.getAttribute(attribute)));
      });
    });
    document.title = repair(document.title);
  }

  repairPage();
  addEventListener("hashchange", () => setTimeout(repairPage, 25));
})();
