"use strict";

window.addEventListener("load", function () {
  console.log("page is fully loaded");
  var navbar = document.querySelector("#navbar");
  var footer = document.querySelector("#footer");

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      navbar.style.top = "0";
      footer.style.bottom = "0";
    } else {
      navbar.style.top = "-100px";
      footer.style.bottom = "-100px";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  function clickEvent() {
    document.querySelector("body").classList.toggle("clicked");
  }

  document.getElementById("open").addEventListener("click", clickEvent);
});