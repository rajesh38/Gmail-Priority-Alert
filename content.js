var searchText = prompt('Enter searchtext');
var inboxMatchRegex = /https:\/\/mail\.google\.com\/mail\/u\/\d+/
if (searchText.length > 0) {
  var unreadMailSelector = '.Cp .zE';
  setInterval(function () {
    if ($(unreadMailSelector).length > 0) {
      var counter = 0
      for (var i = $(unreadMailSelector).length - 1; i >= 0; i--) {
        if ($(unreadMailSelector)[i].innerText.match(new RegExp(searchText, 'i'))) {counter++};
      };
      if (counter > 0) {
        alert(counter + ' new mail(s) containing '+ searchText);
      };
    } else {
      console.log('no new mail')
    };
    var rootLinkMatch = location.href.match(inboxMatchRegex);
    if (rootLinkMatch) {
      var inboxLink = rootLinkMatch + '/#inbox'
    };
    if (inboxLink == location.href) {
      $("a[href = '" + inboxLink + "']")[0].click();
    };
  }, 5000)
};
