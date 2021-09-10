//isotope filter
var $grid=$(".grid").isotope({
  itemSelector:'grid-item',
  layoutMode: 'fitRows'
});

//filter items
$(".button-group").on("click","button",function(){
  var filterValue =$(this).attr("data-filter");
  $grid.isotope({filter:filterValue});
})

