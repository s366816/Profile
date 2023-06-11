document.addEventListener("DOMContentLoaded", function() {
    var cards = document.getElementsByClassName("card");
    var modal = document.getElementById("myModal");
    var modalText = document.getElementById("modal-text");
  
    var openModal = function() {
      var infoText = this.querySelector("p");
      modalText.innerText = infoText.innerText;
      modal.style.display = "block";
    };
  
    for(var i = 0; i < cards.length; i++) {
      cards[i].addEventListener("click", openModal);
      cards[i].addEventListener("touchend", openModal);
    }
  
    var closeModal = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    window.addEventListener("click", closeModal);
    window.addEventListener("touchend", closeModal);
  });
  