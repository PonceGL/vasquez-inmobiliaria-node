const ChangeColorTheme = () => {
  const darkTheme = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  };

  const lightTheme = () => {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  };

  const handleColorTheme = () => {
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      lightTheme();
    } else if (
      document.documentElement.getAttribute("data-theme") === "light"
    ) {
      darkTheme();
    } else {
      darkTheme();
    }
  };

  const detectColorScheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      darkTheme();
    } else if (localStorage.getItem("theme") === "light") {
      lightTheme();
    } else if (localStorage.getItem("theme") === null) {
      detectColorScheme();
    }
  };

  return {
    handleColorTheme,
    detectColorScheme,
  };
};

export default ChangeColorTheme;
