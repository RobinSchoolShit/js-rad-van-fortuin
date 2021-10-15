let segments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < segments.length; i++) {
  // console.log(segments[i]);
  var segment = document.createElement("div");
  segment.innerHTML = segments[i];
  document.body.appendChild(segment);
  segment.classList.add("segmentClass");
}
