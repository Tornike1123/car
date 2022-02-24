let Cars = [
  {
    id: 1,
    name: "FORD",
    model: ["MUSTANG", "F-150", "ESCAPE"],
  },
  {
    id: 2,
    name: "BMW",
    model: ["F-10", "F-30", "X6"],
  },
  {
    id: 3,
    name: "TOYOYA",
    model: ["CAMRY", "PRADO", "PRIUS"],
  },
  {
    id: 4,
    name: "MERCEDES",
    model: ["G class", "S class", "GL"],
  },
];

Cars.forEach(car => {
  $("#make").append(`<option value="${car.id}"> ${car.name}</option>`);
});
$("#make").change(function (e) {
  e.preventDefault();
   
  $('#model').empty();

  let id = $(this).val();

  let Models = Cars.find(el =>{
    return el.id == id;
  })
   
  Models.model.forEach(mod =>{

    $('#model').append(`<option value="${mod}"> ${mod}</option>`);
  })
   

});
