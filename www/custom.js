// Monkey patch hui-view to remove overflow and show borders
customElements.whenDefined("hui-view").then( () => {
const HuiView = customElements.get("hui-view").prototype;
const oldRenderStyles = HuiView.renderStyles;
HuiView.renderStyles = function() {
  let original = oldRenderStyles();
  original.strings = [original.strings[0] + `
  <style>
    .column {
      overflow-y: visible;
    }
  </style>
  `];
  return original;
}
});