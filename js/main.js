// function animate() {}
// let mouse_id = document.getElementById("mouse-down");
// mouse_id.addEventListener("click", function () {
//   console.log("click mi");
//   var nave = document.getElementById("services-id");
//   var id = setInterval(frame, 10);
//   var final = nave.offsetTop;
//   var start = mouse_id.offsetTop;
//   function frame() {
//     if (start == final) {
//       clearInterval(id);
//     } else {
//       start++;
//       console.log(start);
//       nave.style.top = start + "px";
//     }
//   }
// });
$(function () {
  localtion = $("#services-id").offset().top;
  //   console.log(localtion);
  $("#mouse-down").click(function () {
    $("body,html").animate({ scrollTop: localtion - 150 });
  });
});
