const mainTag = document.getElementsByTagName("main")[0];
const gradients = [
  { colors: ["#610bfc", "#ff37cc"], angle: 95 },
  { colors: ["#D9A0FF", "#81D8FF", "#94F1ED"], angle: 45 },
  { colors: ["#C29FFD", "#FFB4DC", "#FEF0D1"], angle: 45 },
  { colors: ["#E5FFB4", "#99E2FA"], angle: 140 },
  { colors: ["#29DFFF", "#40FF98"], angle: 308 },
  { colors: ["#FFEB27", "#FF146A"], angle: 60 },
  { colors: ["#7DF9E0", "#FFFDAA"], angle: 63 },
  { colors: ["#FF0FE3", "#FFF672"], angle: 140 },
  { colors: ["#04FFFF", "#FF2CE3"], angle: 128 },
  { colors: ["#FF8E47", "#FF2CED"], angle: 128 },
  { colors: ["#FFC3F0", "#FDF784"], angle: 128 },
];

mainTag.innerHTML = renderGradients(gradients);
document.addEventListener("scroll", checksHeader);

function renderGradient(data) {
  const { colors, angle } = data;
  const previewStyle = `background: linear-gradient(${angle}deg, ${colors.join(
    ","
  )})`;

  return `
<div class="card" style="color: red;">
<div class="card-gradient-preview" style="${previewStyle}"></div>
<div class="card-footer">
  <span>${angle}°</span><span>${colors.join(" ✗ ")}</span>
</div>
<button onclick="copyGradient(this)">Copy</button>
</div>
`;
}

function renderGradients(gradients) {
  return gradients.map(renderGradient).join(" ");
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

function copyGradient(button) {
  const gradientPreview = button.parentElement.firstElementChild;
  const gradientPreviewBackground =
    window.getComputedStyle(gradientPreview).backgroundImage;
  navigator.clipboard.writeText(gradientPreviewBackground);
}

let prevY = window.scrollY;

function checksHeader() {
  const currY = window.scrollY;

  if (currY < prevY) {
    setHeaderVisibility(true);
  } else if (currY > prevY) {
    setHeaderVisibility(false);
  }

  prevY = currY;
}
