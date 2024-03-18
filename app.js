$("#submitButton").on("click", function(){
    var username = $("#username").val();
    var commentText = $("#comment").val();
    var newComment = $("<div id='postedComment'>").prepend(
        $("<div>").addClass("commentHeader").append(
            $("<p id='postedUser'>").text(username),
            $("<div>").addClass("buttonsContainer").append(
                $("<p id='editButton'>").text("Edit"),
                $("<p id='deleteButton'>").text("Delete"))),
        $("<h1 id='substance'>").text(commentText),
    );
    if(username === "" || commentText === "") {
        return;
    };
    $(".commentSection").prepend(newComment);
    $("#username").val("");
    $("#comment").val("");
    $(".commentSection").css("display", "inline-block");
});

$(".commentSection").on("click", "#editButton", function(){
    var editingBox = $(this).parents()[2];
    var input = $("<input id='editBox' placeholder='Edit Comment' type='text'>")
    $(editingBox).append(
        $("<div>").addClass("editContainer").append(
            $(input),
            $("<p id='editSubmit'>").text("Submit")
        )
    );

});

$(document).on("click", "#editSubmit", function(){
    var editedText = $("#editBox").val()
    var box = $("#editSubmit").parent();
    var h1 = $(box).prev();
    $(".editContainer").remove();
    $(h1).remove();
    $("#postedComment").append(
        $("<h1 id='substance'>").text(editedText)
    );
});

$(".commentSection").on('click', '#deleteButton', function(){
    var commentBox = $(this).parents()[2];
    $(commentBox).remove();
});