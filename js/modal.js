(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", togleModal);
    refs.closeModalBtn.addEventListener("click", togleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  }();
