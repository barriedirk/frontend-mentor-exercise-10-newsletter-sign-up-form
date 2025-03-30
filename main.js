(function () {
  const $ = (selector) => document.querySelector(selector);

  const $mainContent = $("#main-content");
  const $sectionThanks = $("#newsletter__thanks");
  const $form = $("#newsletter__form");
  const $input = $("#newsletterEmail");
  const $buttonDismiss = $("#newsletter__dismiss");
  const $spanError = $("#newsletter__error");
  const $subscriptionEmail = $(".subscription__email");

  $input.addEventListener("keyup", (_) => {
    $spanError.innerText = "";
    $form.classList.remove("error");
  });

  $input.addEventListener("focus", (evt) => {
    evt.target.select();
  });

  $form.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const email = Object.fromEntries(formData)["newsletter__email"];

    const emailValidator = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValidator.test(email)) {
      $spanError.innerText = "Please provide a valid email address";
      $form.classList.add("error");
      $input.focus();

      return;
    }

    $subscriptionEmail.innerText = email;
    $mainContent.classList.add("hidden");
    $sectionThanks.classList.remove("hidden");

    $input.value = "";
  });

  $buttonDismiss.addEventListener("click", (evt) => {
    evt.preventDefault();

    $sectionThanks.classList.add("hidden");
    $mainContent.classList.remove("hidden");

    $input.focus();
  });

  $input.focus();
})();
