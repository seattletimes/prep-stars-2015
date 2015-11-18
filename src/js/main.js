require("./lib/social");
require("./lib/ads");
// var track = require("./lib/tracking");

require("component-responsive-frame/child");

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