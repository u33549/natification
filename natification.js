function delay(delayInms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(2);
      }, delayInms);
    });
  }
  
  function alertNatf(color, text) {
    const content = document.querySelectorAll(".content");
    content.forEach(function (content) {
      content.style.opacity = 1;
      content.style.display = "flex";
      content.style.backgroundColor = color;
      content.querySelector(".text").innerText = text;
      setTimeout(function () {
        document.querySelector(".content").style.opacity = 0;
      }, 5000);
    });
  }
  
  document.querySelectorAll(".closebtn").forEach(function (a) {
    a.addEventListener("click", function () {
      document.querySelectorAll(".content").forEach(function (e) {
        e.style.display = "none";
        console.log("aaaaa");
      });
    });
  });
  