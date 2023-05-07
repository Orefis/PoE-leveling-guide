function skresl(element) {
    if (element.style.textDecoration === "line-through") {
        element.style.textDecoration = "none";
        element.style.color = "#9e9e9e";
      } else {
        element.style.textDecoration = "line-through";
        element.style.color = "#474747";
      }
  }