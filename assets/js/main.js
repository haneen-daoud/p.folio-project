window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');

    // Change the scroll limit based on your design
    var scrollLimit = 100;

    if (window.scrollY > scrollLimit) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var backToTopButton = document.getElementById('back-to-top');

    // Change the scroll limit based on your design
    var scrollLimit = 100;

    if (window.scrollY > scrollLimit) {
      navbar.classList.add('scrolled');
      backToTopButton.style.display = 'block';
    } else {
      navbar.classList.remove('scrolled');
      backToTopButton.style.display = 'none';
    }
  });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleTheme(theme) {
    var lightThemeButton = document.querySelector('.theme-toggle.light');
    var darkThemeButton = document.querySelector('.theme-toggle.dark');
    var body = document.body;

    if (theme === 'light') {
      body.style.backgroundColor = '#949290'; // Light theme color
      lightThemeButton.classList.add('active-theme');
      darkThemeButton.classList.remove('active-theme');
    } else if (theme === 'dark') {
      body.style.backgroundColor = '#81bbc5'; // Dark theme color
      a.style.color('white')
      package.style.color('white')
      darkThemeButton.classList.add('active-theme');
      lightThemeButton.classList.remove('active-theme');
    }
  }
  function toggleDropdown() {
    var dropdown = document.getElementById('themeDropdown');
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
  }

  function setTheme(color) {
    var body = document.body;
    body.style.backgroundColor = color;
    // Add any additional styling or logic as needed

    // Hide the dropdown after selecting a theme
    var dropdown = document.getElementById('themeDropdown');
    dropdown.style.display = 'none';
  }