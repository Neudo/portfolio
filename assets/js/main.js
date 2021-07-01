const contact = document.querySelector(".right a");

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  console.log(clientHeight);

  if (clientHeight + scrollTop >= scrollHeight - clientHeight - 20) {
    contact.classList.add("black");
    contact.classList.remove("white");
  } else if (clientHeight + scrollTop <= scrollHeight - clientHeight + 20) {
    contact.classList.add("white");
    contact.classList.remove("black");
  }
});
