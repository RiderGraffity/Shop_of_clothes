function togglePanel() {
  const panel = document.getElementById("sidePanel");
  const panelPosition = panel.style.left;
  if (panelPosition === "-285px" || panelPosition === "") {
    panel.style.left = "0";
  } else  {
    panel.style.left = "-285px";
  }
  if (panelPosition === "100vw + 350px" || panelPosition === "") {
      panel.style.left = "0";
    } else {
      panel.style.left = "100vw + 350px";
    }
} 


