$(document).ready(function() {

  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");
  var opened = document.getElementsByClassName("in-view");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

function bottomUp(el)
  {
     var rect = el.getBoundingClientRect();
     return (
      rect.bottom > (window.innerHeight || document.documentElement.clientHeight) 
      );  
  }
  
   function collectBack() {
    for (var j = 0; j < opened.length; j++) {
      if (bottomUp(opened[j])) 
      {
        opened[j].classList.remove("in-view");
        /*opened[j].css("visibility", "0");*/
      }
    }
  } 
  

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
   window.addEventListener("scroll", collectBack);
  window.addEventListener("load", collectBack);
  window.addEventListener("resize", collectBack);

});