$(".devourBtn").on("click", function(event) {
    var id = this.data('id');
    console.log(id)
    var devoured= 1
    event.preventDefault()
    

    $.ajax('/api/burgers/:id = '+ id ,{
      type :'PUT',
      data: devoured
    }).then(()=>{
      console.log('Burger has been devoured');
        // location.reload();
    })
})



  $(".submitBtn").on("click", (event)=>{
    event.preventDefault();

    var newBurger ={
      burger_name: $('#burgerName').val().trim(),
      devoured: 0
    };

    $.ajax('/api/burgers', {
      type: 'POST', 
      data: newBurger
    }).then(function(){
      console.log("New burger named "+ newBurger)
        location.reload();
    });
  });