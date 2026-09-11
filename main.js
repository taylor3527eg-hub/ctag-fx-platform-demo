const modal = document.getElementById("param-modal");
const modalText = document.getElementById("param-modal-text");
const closeButton = document.getElementById("param-modal-close");
const copyButton = document.getElementById("copy-param-button");
const allParameterData = window.parameterData || parameterData;

document.querySelectorAll(".param-button").forEach((button) => {
  button.addEventListener("click", () => {
    const paramId = button.dataset.paramId;
    const params = allParameterData[paramId];

    if (params) {
      modalText.textContent = JSON.stringify(params, null, 2);
    } else {
      modalText.textContent = "Parameters will be added here.";
    }

    modal.classList.add("show");
  });
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("show");
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(modalText.textContent);
    copyButton.textContent = "Copied!";

    setTimeout(() => {
      copyButton.textContent = "Copy code";
    }, 1200);
  } catch (error) {
    copyButton.textContent = "Copy failed";

    setTimeout(() => {
      copyButton.textContent = "Copy code";
    }, 1200);
  }
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});
