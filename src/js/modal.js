(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    mod: document.querySelector("[data]"),
    mo: document.querySelector("[dat]"),
    m: document.querySelector("[da]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    refs.mod.classList.toggle("is");
    refs.mo.classList.toggle("is");
    refs.m.classList.toggle("is");
  }
})();

