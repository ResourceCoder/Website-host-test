window.onload = function () {
        document.querySelectorAll(".fade-in").forEach(function (elem) {
          elem.classList.add("fade-in");
        });
      };

      window.onload = function () {
        document.querySelectorAll(".fade-in").forEach(function (elem) {
          elem.classList.add("fade-in");
        });
      };

      const images = document.querySelectorAll(".grid img");
      const popup = document.getElementById("popup");
      const popupImg = document.getElementById("popupImg");

      images.forEach((img) => {
        img.addEventListener("click", () => {
          // Add 'clicked' class to the parent container after a short delay
          setTimeout(() => {
            img.parentElement.classList.add("clicked");
          }, 10); // Adjust this delay as needed
          popupImg.src = img.src;
          popup.classList.add("active");
        });
      });

      popup.addEventListener("click", () => {
        popup.classList.remove("active");
        images.forEach((img) => {
          img.parentElement.classList.remove("clicked");
        });
      });