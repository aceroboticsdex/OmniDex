const bibtexButton = document.querySelector("#bibtex-button");
const bibtexCode = document.querySelector("#bibtex-code");
const bibtexStatus = document.querySelector("#bibtex-status");

bibtexButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(bibtexCode.textContent);
    bibtexStatus.textContent = "Copied";
  } catch {
    bibtexStatus.textContent = "Shown";
  }
});
