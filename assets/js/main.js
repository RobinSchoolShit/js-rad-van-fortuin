let segments = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

for (var i = 0; i <= 9; i++) {
  var segment = document.createElement('div')
  segment.innerHTML = segments[i]
  seggie.appendChild(segment)
}