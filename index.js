var modal = document.getElementById("share-icon-container");
var element = document.getElementById("share-icon");
var isOpen = false;
element.onclick = function () {
  if (isOpen === false) {
    modal.classList.remove("hide");
    modal.classList.add("share-container");
    isOpen = true;
  } else {
    modal.classList.add("hide");
    modal.classList.remove("share-container");
    isOpen = false;
  }
};
