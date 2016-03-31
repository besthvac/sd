$("p").each(function() {
    var rep = $(this).text();
    rep = rep.replace(/\(?([0-9]{3})\)?[- ]([0-9]{3})[- ]([0-9]{4})/, '($1)-$2-$3');
    $(this).text(rep);
});
