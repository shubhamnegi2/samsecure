// ============ ingredient category add edit ==========
// add new category btn click
$(document).on("click", ".addNewCategoryBtn", function () {
  $(".addCategoryModelWrapper").css({
    display: "flex",
  });
  $(".addCategoryModelWrapper .addCategoryModel").animate({ top: 50 });
});

//   close add category model
$(document).on("click", ".closeAddCategoryModel", function () {
  $(".addCategoryModelWrapper").hide();
  $(".addCategoryModelWrapper .addCategoryModel").animate({ top: -50 });
});

// edit category btn click

$(document).on("click", ".editNewCategoryBtn", function () {
  $(".editCategoryModelWrapper").css({
    display: "flex",
  });
  $(".editCategoryModelWrapper .editCategoryModel").animate({ top: 50 });
});

//   close edit category model
$(document).on("click", ".closeEditCategoryModel", function () {
  $(".editCategoryModelWrapper").hide();
  $(".editCategoryModelWrapper .addCategoryModel").animate({ top: -50 });
});
// delete category
$(document).on("click", ".deleteCategory", function () {
  $(this).closest("tr").children("td").children("input").prop("disabled", true);
  $(this).closest("tr").children(".deleteCategory").hide();
  $(this).closest("tr").children(".undoDeleteCat").show();
});
// undo deleted category
$(document).on("click", ".undoDeleteCat", function () {
  $(this)
    .closest("tr")
    .children("td")
    .children("input")
    .prop("disabled", false);
  $(this).closest("tr").children(".undoDeleteCat").hide();
  $(this).closest("tr").children(".deleteCategory").show();
});

// ============  ingredient  add edit ==========

// add ingredient btn click
$(document).on("click", ".addIngredientModelBtn", function () {
  $(".addIngredientModelWrapper").css({
    display: "flex",
  });
  $(".addIngredientModelWrapper .addIngredientModel").animate({
    top: 50,
  });
});
// delete added ingredient
$(document).on("click", ".deleteAddedIngredient", function () {
  $(this).closest("div").remove();
});

//   add more ingredients
$(document).on("click", ".addMoreIngredientBtn", function (e) {
  e.preventDefault();
  let category = $("#selectedIngCatList option:selected").val();
  console.log(category);
  $(this)
    .closest("form")
    .children(".btns")
    .before(
      `<div class="form-group mt-3 text-left"> <label for="category">Ingredient : </label> <input type="text" name="" id=""> <input type="text" value="${category}" disabled=""> <i class="fa-solid fa-trash deleteAddedIngredient"></i> </div>`
    );
});
//   close add ingredient model
$(document).on("click", ".closeaddIngredientModelWrapper", function () {
  $(".addIngredientModelWrapper").hide();
  $(".addIngredientModelWrapper .addIngredientModel").animate({
    top: -50,
  });
});

// edit ingredient btn click
$(document).on("click", ".closeEditIngredientModel", function () {
  $(".editIngredientModelWrapper").hide();
  $(".editIngredientModelWrapper .editIngredientModel").animate({
    top: -50,
  });
});
//   close edit ingredient model
$(document).on("click", ".editIngredientModelBtn", function () {
  $(".editIngredientModelWrapper").css({
    display: "flex",
  });
  $(".editIngredientModelWrapper .editIngredientModel").animate({
    top: 50,
  });
});
// delete ingredients
$(document).on("click", ".deleteIngCategory", function () {
  $(this).closest("tr").children("td").children("input").prop("disabled", true);
  $(this).closest("tr").children(".deleteIngCategory").hide();
  $(this).closest("tr").children(".undoDelete").show();
});
//undo delete ingredients
$(document).on("click", ".undoDelete", function () {
  $(this)
    .closest("tr")
    .children("td")
    .children("input")
    .prop("disabled", false);
  $(this).closest("tr").children(".undoDelete").hide();
  $(this).closest("tr").children(".deleteIngCategory").show();
});
