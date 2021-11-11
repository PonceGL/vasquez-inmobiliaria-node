(function () {
  const menuNav = document.getElementById("menu-nav");
  const openButton = document.getElementById("open-button");
  let isOpen = false;

  // Menu
  const handleOpenMenu = () => {
    isOpen = !isOpen;
    if (window.innerWidth < 750) {
      if (isOpen) {
        menuNav.style.left = "0";
        openButton.className = "close-button";
      } else {
        menuNav.style.left = "-100%";
        openButton.className = "open-button";
      }
    }
  };

  openButton.addEventListener("click", handleOpenMenu);
})();
