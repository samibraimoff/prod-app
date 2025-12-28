import "@testing-library/jest-dom";

console.log("setup-tests loaded");
beforeEach(() => {
  const existing = document.getElementById("modal-root");
  if (!existing) {
    const portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(portalRoot);
  }
});

afterEach(() => {
  document.getElementById("modal-root")?.remove();
});