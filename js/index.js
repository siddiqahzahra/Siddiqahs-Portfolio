$(document).on("ready", function () {

  function scrollToAnchor(aid) {
    const destination = $("a[name='" + aid + "']");
    $('html,body').animate({
      scrollTop: destination.offset().top
    }, 'slow');
  }

  $(document).on('click', '.smooth-link', function () {
    scrollToAnchor('demo');
  });
});