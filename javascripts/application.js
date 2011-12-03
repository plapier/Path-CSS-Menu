$("div.open-button").toggle(
  function () {
    $('div.circle-container').removeClass("collapsed").addClass("expanded");
    $('div.button').removeClass("collapsed").addClass("expanded");
  },
  function () {
    $('div.circle-container').removeClass("expanded").addClass("collapsed");
    $('div.button').removeClass("expanded").addClass("collapsed");
  }
);
