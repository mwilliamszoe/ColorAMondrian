var paint = "white";
$(".colors").on("click", function() {
  paint = $(this).css("background-color");
});

$(".cell").on("click", function() {
  $(this).css({ backgroundColor: `${paint}` });
});
