$(document).ready(function() {

  $('.box-item').draggable({
    cursor: 'move',
    helper: "clone"
  });

  $("#container1").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container1");
          var id = $(this).children(".idContenu").val();
          var groupe = $("#container1").children(".active").text();
          add(id,groupe)
        }
      });
    }
  });

  $("#container2").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container2");
          var id = $(this).children(".idContenu").val();
          var groupe = $("#container2").children(".active").text();
          add(id,groupe)
        }
      });
    }
  });

  $("#container3").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container3");
          var id = $(this).children(".idContenu").val();
          var groupe = $("#container3").children(".active").text();
          add(id,groupe)
        }
      });
    }
  });

  $("#container4").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container4");
          var id = $(this).children(".idContenu").val();
          var groupe = $("#container4").children(".active").text();
          add(id,groupe)
        }
      });
    }
  });

  $("#container5").droppable({
    drop: function(event, ui) {
      var itemid = $(event.originalEvent.toElement).attr("itemid");
      $('.box-item').each(function() {
        if ($(this).attr("itemid") === itemid) {
          $(this).appendTo("#container5");
          var id = $(this).children(".idContenu").val();
          var groupe = $("#container5").children(".active").text();
          add(id,groupe)
        }
      });
    }
  });

  function add(id,newGroupe){
    console.log(id,newGroupe)
    $.ajax({
      url: "/add/"+newGroupe+"/"+id
    }).done(function() {
      console.log("élément ajouté")
    });

  }

  $(".remove").click(function () {
    var id = $(this).parent().children(".idContenu").val();
    $(this).parent().fadeOut()
    $.ajax({
      url: "/remove/"+id
    }).done(function() {
      console.log("élément supprimé")
    });
  });


});