window.onload = function() {

  /* Open Modal */
  const openModal = modal => {
    let modalId = document.querySelector("#" + modal);
    modalId.classList.add("open");
  };

  let triggers = document.querySelectorAll(".thumb-service");

  triggers.forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      let modal = e.currentTarget.dataset.id;
      openModal(modal);
    });
  });

  /* Close Modal */
  const closeModal = element => {
    switch(element.tagName) {
      case "BUTTON":
        element.parentElement.parentElement.classList.remove("open");
        break;
      case "DIV":
        element.classList.remove("open");
        break;
    }
  }
  let closeElements = document.querySelectorAll(".modal-bg, .close-modal");  

  closeElements.forEach(el => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      let clicked = e.currentTarget;
      closeModal(clicked);
    });
  });

  
  
};