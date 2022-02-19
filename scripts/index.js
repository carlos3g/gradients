const gradientsContainer = document.getElementById("gradients");
const gradients = [
  { colors: ["#90218c", "#009b90"], angle: 135 },
  { colors: ["#00abee", "#f8f8ba"], angle: 135 },
  { colors: ["#2e266e", "#7b2189"], angle: 135 },
  { colors: ["#f298e7", "#a4f8f8"], angle: 135 },
  { colors: ["#d481ff", "#06f0df"], angle: 135 },
  { colors: ["#303395", "#27efef"], angle: 135 },
  { colors: ["#ee20d6", "#0a2fb6"], angle: 135 },
  { colors: ["#b03075", "#4416ba"], angle: 135 },
  { colors: ["#5e2563", "#65789b"], angle: 135 },
  { colors: ["#380152", "#9903E3"], angle: 135 },
  { colors: ["#000000", "#0A1852"], angle: 135 },
  { colors: ["#4158D0", "#C850C0", "#FFCC70"], angle: 135 },
  { colors: ["#08AEEA", "#2AF598"], angle: 135 },
  { colors: ["#03001E", "#7303C0", "#EC38BC"], angle: 135 },
  { colors: ["#330867", "#30CFD0"], angle: 135 },
  { colors: ["#610bfc", "#ff37cc"], angle: 95 },
  { colors: ["#D9A0FF", "#81D8FF", "#94F1ED"], angle: 135 },
  { colors: ["#C29FFD", "#FFB4DC", "#FEF0D1"], angle: 135 },
  { colors: ["#E5FFB4", "#99E2FA"], angle: 140 },
  { colors: ["#29DFFF", "#40FF98"], angle: 308 },
  { colors: ["#FFEB27", "#FF146A"], angle: 60 },
  { colors: ["#7DF9E0", "#FFFDAA"], angle: 63 },
  { colors: ["#FF0FE3", "#FFF672"], angle: 140 },
  { colors: ["#04FFFF", "#FF2CE3"], angle: 128 },
  { colors: ["#FF8E47", "#FF2CED"], angle: 128 },
  { colors: ["#FFC3F0", "#FDF784"], angle: 128 },
];

function renderGradient(data) {
  const { colors, angle } = data;
  const gradient = `linear-gradient(${angle}deg, ${colors.join(",")})`;
  const html = `
  <div class="card">
    <div class="card-gradient-preview" style="background: ${gradient};"></div>
    <div class="card-footer">
      <span>${angle}°</span><span>${colors.join(" ✗ ")}</span>
    </div>
    <button onclick="copyGradient(this)">Copy</button>
  </div>
  `;

  return html;
}

function renderGradients(gradients) {
  return gradients.map(renderGradient).join(" ");
}

function copyGradient(button) {
  const gradientPreview = button.parentElement.firstElementChild;
  const styles = window.getComputedStyle(gradientPreview);
  const bgImage = styles.backgroundImage;
  navigator.clipboard.writeText(bgImage);
}

function setHeaderVisibility(value) {
  const header = document.getElementsByTagName("header")[0];
  const headerStyles = window.getComputedStyle(header);

  if (!value) {
    header.style.transform = `translateY(-${headerStyles.height})`;
    return;
  }

  header.style.transform = "translateY(0)";
}

function checksHeader() {
  let prevY = window.scrollY;

  return () => {
    const currY = window.scrollY;

    if (currY < prevY) {
      setHeaderVisibility(true);
    } else if (currY > prevY) {
      setHeaderVisibility(false);
    }

    prevY = currY;
  };
}

gradientsContainer.innerHTML = renderGradients(gradients);
document.addEventListener("scroll", checksHeader());
