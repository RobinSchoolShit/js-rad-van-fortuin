let segments = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
];

for (let i = 0; i < segments.length; i++) {
  // console.log(segments[i]);
  var segment = document.createElement("div");
  segment.innerHTML = segments[i];
  document.getElementById("container").appendChild(segment);
  segment.classList.add("segmentClass");
  segment.style.transform = "rotate(" + (360 / segments.length) * i + "deg)";
}

function rotateClick() {
  rot = Math.round(Math.random() * 1440);
  document.getElementById("container").style.transform =
    "rotate(" + rot + "deg)";
}

