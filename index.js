function togglePanel() {
  let panel = document.getElementById("sidePanel");
  let panelPosition = panel.style.right;
  if (panelPosition === "-285px" || panelPosition === "") {
    panel.style.right = "0";
  } else  {
    panel.style.right = "-285px";
  }
  if (panelPosition === "-350px" || panelPosition === "") {
      panel.style.right = "0";
    } else {
      panel.style.right = "-350px";
    }
} 


