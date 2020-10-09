// FUNCTION TO COPY SPECIFIED TEXT TO CLIPBOARD
function copyTextToClipboard(text) {
    let textArea = document.createElement("textarea");
    let st = textArea.style;

    st.position = "fixed";
    st.top = 0;
    st.left = 0;
    st.width = "2em";
    st.height = "2em";
    st.padding = 0;
    st.border = "none";
    st.outline = "none";
    st.boxShadow = "none";
    st.background = "transparent";

    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
        let successful = document.execCommand("copy");
        let message = successful ? "Link copied!" : "Unable to copy";
        console.log(message);

    } catch (err) {
        console.log("Unable to copy");
    }

    document.body.removeChild(textArea);
}

let button = document.getElementById("copy-text-btn");

button.addEventListener("click", function(event){
   event.preventDefault();
   let link = event.target.categ.getAttribute('data-link');
   copyTextToClipboard(link);
});

/* <button id="copy-text-btn" class="copy-text-btn" data-link="http://mydummyurl.com">Copy Invitation Link</button> */
