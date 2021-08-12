function initFootnotes() {
  console.log("Initializing footnotes...");

  document.querySelectorAll("[data-footnote]").forEach((footnotePointer) => {
    const footnoteID = footnotePointer.dataset.footnote;
    const refID = footnoteID + "-ref";

    console.log("Footnote: ", footnoteID);

    // Find the footnote with the ID in the pointer
    const footnote = document.getElementById(footnoteID);

    // Prepare the footnote pointer with Popup.
    footnotePointer.innerHTML = `
        <div class="tooltip">
          <a href="#${footnoteID}" id="${refID}">${footnotePointer.innerHTML}</a>
          <span class="tooltiptext">${footnote.innerHTML}</span>
        </div>
      `;

    // Add a link back to the reference
    const refLink = document.createElement("a");
    refLink.href = "#" + refID;
    refLink.appendChild(document.createTextNode("^"));
    footnote.appendChild(refLink);
  });
}

initFootnotes();
