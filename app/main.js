const textarea = document.querySelector("textarea");
const output = document.querySelector(".output");
const cs_status = document.querySelector(".cs i");
const ch_count = document.querySelector(".ch i");
const wo_count = document.querySelector(".wo i");
const text_con_btn = document.querySelectorAll(".right button");
const cpt_clipboard_btn = document.querySelector(".cpt_clipboard");
const all_clear = document.querySelector(".clear");
const reload = document.querySelector(".reload");
// all selector end -------------------------------------------------

// input field to output value ------------
output.innerHTML = textarea.value.trim();
textarea.addEventListener("input", function () {
  const input_value = this.value;
  output.innerHTML = input_value;

  // word and characters counter --------
  ch_count.innerHTML = input_value.trim().length;
  const words = input_value.trim().split(/\s+/);
  wo_count.innerHTML = words.length;
});

// text converter start ------------------
text_con_btn.forEach((item, index) => {
  item.onclick = () => {
    if (item.value == "capitalize") {
      let text_to_word = textarea.value.split(" ");
      for (let i = 0; i < text_to_word.length; i++) {
        text_to_word[i] = text_to_word[i].charAt(0).toUpperCase() + text_to_word[i].toLowerCase().slice(1);
      }
      output.innerText = text_to_word.join(" ");
    } else if (item.value == "uppercase") {
      output.innerText = textarea.value.toUpperCase();
    } else if (item.value == "lowercase") {
      output.innerText = textarea.value.toLowerCase();
    }
  };
});
// text converter end ------------------

// cursor status start ---------
textarea.onfocus = () => {
  cs_status.innerHTML = `Focus...`;
  cs_status.style.color = "green";
};
textarea.onblur = () => {
  cs_status.innerText = "Blour...";
  cs_status.style.color = "green";
};
// cursor status end ---------

// click to copy ----------
cpt_clipboard_btn.onclick = () => {
  const text_for_copy = output.innerText.trim();
  if (text_for_copy) {
    navigator.clipboard.writeText(text_for_copy).then(() => {
      cpt_clipboard_btn.innerText = `Text copied to clipboard!`;
    });
  }
};

// clear all data ---------
all_clear.onclick = () => {
  textarea.value = "";
  output.innerText = "";
  wo_count.innerText = 0;
};

// reload browser ----

reload.onclick = () => {
  location.reload();
};

let red = 'red'
