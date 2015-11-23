require("./lib/social");
require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

//reasonably simple touch detection
if ("ontouchstart" in window) {
  document.body.classList.add("touch-enabled");
}

var $ = require("jquery");
var dot = require("./lib/dot");
var detailTemplate = dot.compile(require("./_detail.html"));

var students = {};
studentData.forEach(s => students[s.name] = s);

var $slider = $(".slider");
var $details = $(".details");

$slider.on("click", ".student img", function() {
  var $this = $(this);
  $slider.find(".activated").removeClass("activated");
  $this.closest(".student").addClass("activated");
  var name = this.getAttribute("data-student");
  var student = students[name];
  $details.html(detailTemplate(student));
  $details.addClass("has-content");
});

// $slider.find(".student:first img").click();

var blocks = Array.prototype.slice.call(document.querySelectorAll(".student"));
var viewport = document.querySelector(".slide-container");

$slider.on("click", ".pan", function() {
  var goRight = this.classList.contains("right");
  var { width } = viewport.getBoundingClientRect();
  var scroll = viewport.scrollLeft;
  var distance = goRight ? width * .8 : width * -.8;
  $(viewport).animate({ scrollLeft: viewport.scrollLeft + distance });
});