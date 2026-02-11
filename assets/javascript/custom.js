 const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });

        // side bar burger
       document.addEventListener("DOMContentLoaded", function () {
            const sidebarBurger = document.getElementById("sidebarburger");
            const sidebar = document.querySelector(".sidebar");

            function checkWidth() {
                if (window.innerWidth <= 768) {
                    sidebarBurger.style.removeProperty("display");
                    sidebar.classList.remove("open"); // mobile pe default band
                } else {
                    sidebarBurger.style.display = "none";
                    sidebar.classList.add("open"); // desktop pe hamesha open
                    // sidebar.classList.add("open"); // desktop pe hamesha open
                }
            }

            checkWidth();
            window.addEventListener("resize", checkWidth);

            sidebarBurger.addEventListener("click", function () {
                sidebar.classList.toggle("open");  // bas itna
            });
        });