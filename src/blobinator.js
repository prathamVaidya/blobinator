/*

  Code: Pratham Vaidya
  Description: Blobinator is a library to create animated blobs easily

*/

$(document).ready(function () {
  var styles = `
  .blobinator {
    width: 100%;
     height: 100%;
    position: absolute;
    top:0;
    bottom: 0;
    overflow: hidden;
   }
   .blobinator svg {
    position: absolute;
    width: 300px;
    opacity: 0.6;
   }
   
  `;

  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  var blobs = [
    "M44.2,-71.2C54.3,-62.2,57.5,-45,58.7,-30.3C59.9,-15.7,59,-3.7,60.5,11C61.9,25.7,65.7,43,58.9,51.3C52.1,59.5,34.6,58.8,18.7,63.2C2.9,67.7,-11.3,77.2,-26.2,78C-41.1,78.7,-56.6,70.6,-67.1,58.3C-77.6,45.9,-82.9,29.3,-81.3,14.2C-79.6,-1,-70.9,-14.7,-61.4,-24.9C-51.9,-35.1,-41.5,-41.8,-31.1,-50.7C-20.8,-59.6,-10.4,-70.7,3.3,-75.9C17,-81,34,-80.2,44.2,-71.2Z",

    "M41.7,-71.5C50.2,-59.4,50.8,-41.4,53.3,-26.9C55.9,-12.5,60.6,-1.6,64.6,13.2C68.6,28,72,46.7,63.5,53.3C55.1,59.8,34.7,54.3,17.5,59.3C0.3,64.2,-13.8,79.5,-22.8,77.1C-31.8,74.7,-35.7,54.5,-42.1,40.3C-48.5,26.1,-57.5,17.8,-65.5,5.4C-73.5,-7,-80.7,-23.6,-74.9,-33.4C-69.2,-43.3,-50.5,-46.4,-35.9,-55.7C-21.2,-65.1,-10.6,-80.6,3,-85.2C16.6,-89.9,33.1,-83.6,41.7,-71.5Z",

    "M39.5,-62.7C52.9,-52.9,66.6,-44.8,69.9,-33.2C73.2,-21.6,66.1,-6.6,63.4,8.7C60.6,24,62.1,39.6,56,50.8C49.9,62.1,36.1,69,21.7,72.6C7.4,76.1,-7.5,76.3,-19.2,70.5C-30.9,64.8,-39.4,53.1,-45.8,41.8C-52.3,30.6,-56.8,19.7,-57.5,8.8C-58.3,-2,-55.2,-12.9,-50.5,-23C-45.8,-33.1,-39.5,-42.5,-30.9,-54.4C-22.2,-66.3,-11.1,-80.8,1,-82.4C13.1,-83.9,26.1,-72.5,39.5,-62.7Z",

    "M30.8,-54.4C39.1,-42.7,44.2,-32.6,53,-21.7C61.7,-10.9,74.2,0.8,75.9,13.2C77.7,25.6,68.8,38.7,58.5,50.7C48.2,62.7,36.5,73.5,23,76.9C9.4,80.3,-5.9,76.3,-17.1,68.4C-28.2,60.4,-35.2,48.5,-42,37.9C-48.8,27.4,-55.3,18.1,-57.1,8C-58.9,-2.2,-56,-13.2,-53.8,-27.3C-51.6,-41.3,-50,-58.4,-41.2,-69.7C-32.3,-81.1,-16.2,-86.7,-2.4,-83C11.3,-79.2,22.6,-66,30.8,-54.4Z",

    "M28.6,-52.2C36.3,-39.5,41.5,-30.4,44.9,-21.1C48.3,-11.7,49.9,-2.2,51,9.1C52.1,20.3,52.6,33.2,48.5,47.2C44.4,61.2,35.6,76.4,24.4,76.9C13.1,77.4,-0.7,63.3,-12.1,54.1C-23.5,44.8,-32.6,40.4,-41.9,33.9C-51.2,27.4,-60.8,18.8,-63.8,8.2C-66.8,-2.3,-63.2,-14.8,-60.4,-30.4C-57.7,-46,-55.7,-64.9,-45.8,-76.6C-35.9,-88.4,-17.9,-93.1,-3.8,-87.2C10.4,-81.4,20.8,-65,28.6,-52.2Z",

    "M40.4,-63.6C50.1,-56.5,54.4,-41.7,58.9,-28C63.3,-14.4,68.1,-1.9,69.8,12.5C71.6,26.9,70.3,43.4,62.6,56.6C54.9,69.9,40.6,79.9,26.1,80.2C11.6,80.5,-3.3,71,-18.4,65.3C-33.5,59.6,-48.9,57.7,-58.4,49.2C-67.8,40.7,-71.3,25.8,-72.5,11C-73.7,-3.7,-72.5,-18.1,-65,-27.7C-57.5,-37.2,-43.7,-41.9,-31.8,-47.9C-19.9,-54,-10,-61.5,2.7,-65.7C15.3,-69.8,30.6,-70.6,40.4,-63.6Z",

    "M46,-74C57.6,-64.1,63.7,-48,67,-32.9C70.4,-17.8,70.9,-3.8,66.3,7.6C61.7,19.1,52,27.9,44.7,41.7C37.3,55.5,32.3,74.3,20.7,83.7C9,93.2,-9.2,93.4,-24.8,87.5C-40.4,81.5,-53.3,69.5,-58.2,55.2C-63,41,-59.9,24.6,-60.7,9.6C-61.6,-5.4,-66.5,-19,-63.6,-30.6C-60.8,-42.3,-50.2,-51.9,-38.3,-61.7C-26.4,-71.5,-13.2,-81.5,2,-84.6C17.2,-87.7,34.3,-83.9,46,-74Z",

    "M40.3,-62.8C49.6,-56.7,52.9,-41.1,56.2,-27.5C59.5,-13.9,62.9,-2.2,61.3,8.8C59.6,19.7,53,30,45.9,41.9C38.9,53.8,31.3,67.5,19.7,74.1C8.1,80.7,-7.7,80.3,-22.6,76.2C-37.4,72.1,-51.4,64.4,-61.7,53.1C-72,41.8,-78.8,27.1,-76.8,13.5C-74.9,0,-64.3,-12.2,-58.3,-27.2C-52.4,-42.2,-51.1,-59.8,-42.1,-66.2C-33.2,-72.5,-16.6,-67.6,-0.6,-66.7C15.5,-65.8,30.9,-69,40.3,-62.8Z",

    "M42.3,-66.9C51.7,-59.7,54,-42.7,61.1,-27.8C68.2,-12.8,80.1,0.2,80.2,12.8C80.3,25.3,68.7,37.4,56.3,45.2C43.9,53.1,30.8,56.7,18,59.7C5.2,62.8,-7.3,65.2,-17.3,61.2C-27.3,57.3,-34.7,46.9,-46.5,37.8C-58.3,28.7,-74.6,20.9,-82.5,8C-90.4,-4.9,-89.9,-22.9,-80.5,-33.9C-71,-44.9,-52.6,-49,-37.7,-53.7C-22.7,-58.4,-11.4,-63.6,2.5,-67.6C16.4,-71.5,32.9,-74.1,42.3,-66.9Z",

    "M31.1,-45.5C43.2,-40.5,58,-36.9,61.9,-28.3C65.7,-19.7,58.7,-6.1,58.5,9.8C58.4,25.8,65.3,44.2,60.1,54.4C54.9,64.7,37.6,66.8,23.4,63.7C9.2,60.6,-1.9,52.3,-10,44.9C-18.1,37.6,-23.4,31.2,-32.1,25.4C-40.8,19.6,-52.9,14.5,-54.5,7.5C-56.1,0.4,-47.2,-8.5,-42.3,-19.3C-37.3,-30.1,-36.4,-42.7,-30.1,-50.3C-23.7,-57.9,-11.8,-60.4,-1.2,-58.6C9.5,-56.7,18.9,-50.5,31.1,-45.5Z",
  ];

  var svg = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="">
  <path fill="" d="" transform="translate(100 100)"></path>
</svg>`;

  $(".blobinator").each(function () {
    $(this).parent().css("position", "relative");

    var totalBlobs = $(this).data("total");
    var colors = $(this).data("color");

    if (!colors) {
      colors = "#000";
    }

    colors = colors.split(" ");
    var animationTime = $(this).data("animation-duration");
    var blobContainer = this;

    var maxWidth = $(blobContainer).width();
    var maxHeight = $(blobContainer).height();
    var usedWidth = maxWidth;
    var minBlobSize = 100;
    var maxBlobSize = 500;

    for (let i = 0; i < totalBlobs; i++) {
      var element = $(svg).clone();
      element
        .find("path")
        .attr("d", blobs[Math.floor(Math.random() * blobs.length)]);
      element
        .find("path")
        .attr("fill", colors[Math.floor(Math.random() * colors.length)]);
      $(blobContainer).append(element);

      // decides width of blob

      // console.log("Used Width = " + usedWidth);
      if (usedWidth > 0 && usedWidth < maxBlobSize) {
        // when used Width is left and under limits -> make medium blobs under used width and max limits

        var width =
          Math.floor(Math.random() * (usedWidth - minBlobSize)) + minBlobSize;
        // console.log("Case 1 Width = " + width);
      } else if (usedWidth <= 0) {
        // when no user width is left -> make tiny blobs
        var width = Math.floor(Math.random() * minBlobSize) + minBlobSize; // gets random width
        // console.log("Case 2 Width = " + width);
      } else {
        // when container is too large -> make full size blobs
        var width =
          Math.floor(Math.random() * (maxBlobSize - minBlobSize)) + minBlobSize; // gets random width
        // console.log("Case 3 Width = " + width);
      }

      usedWidth = usedWidth - width;

      // get random X coordinate within width of container
      var positionX = Math.floor(Math.random() * (maxHeight - width));

      // get random Y coordinate within width of container
      var positionY = Math.floor(Math.random() * (maxWidth - width));

      $(element).css("width", width + "px");
      $(element).css("top", positionX + "px");
      $(element).css("left", positionY + "px");

      // move and animate blobs
      move(element, animationTime);
    }
  });

  function move(e, animationTime = 15) {
    var container = $(e).parent();
    var maxWidth = $(container).width();
    var maxHeight = $(container).height();

    var width = $(e).width();

    var positionX = Math.floor(Math.random() * (maxHeight - width));

    // get random Y coordinate within width of container
    var positionY = Math.floor(Math.random() * (maxWidth - width));

    $(e).animate(
      {
        top: positionX,
        left: positionY,
      },
      animationTime * 1000,
      function () {
        move(e, animationTime);
      }
    );
  }

  function blobAtPosition(x, y) {
    // to do
    $(".blob-container")
      .find("svg")
      .each(function (i, element) {
        var position = $(element).position();
        console.log(position);
        console.log(x + ", " + y);
        if (
          Math.round(position.top) == Math.round(x) ||
          Math.round(position.left) == Math.round(y)
        ) {
          return true;
        }
      });

    return false;
  }
});
