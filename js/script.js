document.addEventListener("DOMContentLoaded", () => {
  const text = "“9 A.M – 5 P.M Responsibility. 5 P.M – 9 A.M Creativity.”";
  const target = document.getElementById("quote");

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      if (text[i] === "<") {
        const end = text.indexOf(">", i);
        target.innerHTML += text.slice(i, end + 1);
        i = end + 1;
      } else {
        target.innerHTML += text[i];
        i++;
      }
      setTimeout(typeWriter, 40);
    }
  }

  typeWriter();


  function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").textContent = now.toLocaleDateString('en-US', options);
    document.getElementById("time").textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  setInterval(updateDateTime, 1000);
  updateDateTime();
});

    const title = document.querySelector(".exhibition .toggle-title");
    const wrapper = document.querySelector(".exhibition .content-wrapper");

    title.addEventListener("click", () => {
      wrapper.classList.toggle("open");
      title.textContent = wrapper.classList.contains("open") ? "LESS" : "MORE";
    });