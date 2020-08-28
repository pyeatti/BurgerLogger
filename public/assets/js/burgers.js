$(function () {
  $(".devoured").on("click", function (event) {
    let id = $(this).data("id");
    let newburger = $(this).data("newburger");
    console.log(newburger);
    let newBurgerState = {
      devoured: newburger,
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState,
    }).then(function () {
      console.log("changed burger to", newburger);

      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");

      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted burger", id);

      location.reload();
    });
  });
});
