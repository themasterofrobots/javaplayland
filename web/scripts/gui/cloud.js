// Generated by CoffeeScript 1.8.0

/*
    Constructor for cloud
  @param dim: window (page) dimensions for initializing the cloud's width and height
  @param par: array of text to display in the cloud
    @param obj: container the cloud is in
    @param x: x offset for placing cloud
    @param y: y offset for placing cloud
    @param tscale: sizing the text
    @param ng: string used to go to the next game if it is not "none" - sets up the next game button, etc.
  @param man: gameManager instance
 */

(function(){
  window.objCloud = function(dim, par, obj, x, y, tscale, ng, man) {

  var modal = document.createElement("div");
  $(modal).attr({
        "class":"modal fade",
        "id":"cloudModal",
        "tabindex":"-1",
        "role":"dialog",
        "aria-labelledby":"myModalLabel",
        "aria-hidden":"true",
        "data-backdrop":"static",
    });

  var modalDialog = document.createElement("div");
  $(modalDialog).attr({
        "class":"modal-dialog",
  });

  var modalContent = document.createElement("div");
  $(modalContent).attr({
        "class":"modal-content",
  });

  // footer of the modal
  var modalFooter = document.createElement("div");
  $(modalFooter).attr({
        "class":"modal-footer",
  });

  //adds the close button to the footer

  var closeButton = document.createElement("button");
  $(closeButton).attr({
        "type":"button",
        "class":"btn btn-default",
        "data-dismiss":"modal",
	});

  var closeButton = document.createElement("input");
  $(closeButton).attr({
		"id":"closeButton",
        "type":"image",
        "class":"btn btn-default",
        "data-dismiss":"modal",
		"src":"img/check30.png",
		"width":"60",
		"height":"48",

  });
  $(closeButton).append("Close");
  $(closeButton).click(function(){
      return $("#cloudModal").remove();
  });

  // if there is a next game, add next game button
  if (ng !== "none") {
  var nextGameButton = document.createElement("button");
    $(nextGameButton).attr({
          "type":"button",
          "class":"btn btn-default",
          "data-dismiss":"modal",
    });
    $(nextGameButton).append("Next Game!");
    $(nextGameButton).click(function(){
        man.finishGame();
        codeland.startGame(ng);
        return $("#cloudModal").remove();
    });
  }

  $(modalFooter).append(nextGameButton);
  $(modalFooter).append(closeButton);


  // body of the modal
  var modalBody = document.createElement("div");
  $(modalBody).attr({
        "class":"modal-body",
  });

  // prints out all instructions from the par array
  for(var i = 0; i<par.length; i++){
    $(modalBody).append(par[i]);
    $(modalBody).append("<br>");
  }



  $(modalContent).append(modalBody);
  $(modalContent).append(modalFooter);

  $(modalDialog).append(modalContent);
  $(modal).append(modalDialog);

  $(obj).append(modal);

  $("#cloudModal").modal("show");


 };
}).call(this);