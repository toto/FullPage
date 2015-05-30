/*
	httpsecure.js
	
	Written by toto. 
	
	Source hosted on Github at https://github.com/toto/FullPage
	License: CC BY-SA-NC 3.0, See README.md for more information.
*/

function $(q, root, single) {
    if (root && typeof root == 'string') { root = $(root, null, true); }
    root = root || document;
    if (q[0]=='#') { return root.getElementById(q.substr(1)); }
    else if (q[0]=='/' || (q[0]=='.' && q[1]=='/')) {
        if (single) { return document.evaluate(q, root, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue; }
        return document.evaluate(q, root, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    }
    else if (q[0]=='.') { return root.getElementsByClassName(q.substr(1)); }
    return root.getElementsByTagName(q);
}

function appendAllZeit(){
    var links = $("//a[contains(@href,'zeit.de')]");
    for (var i=0; i < links.snapshotLength; i++) {
      // ignore already extended links as well as blog links
      if (links.snapshotItem(i).href.indexOf('/komplettansicht') == -1 &&
          links.snapshotItem(i).href.indexOf('blog.zeit.de') == -1 &&
		  !links.snapshotItem(i).href.match(/\/(seite\-\d|weitere)/)) 
      {
        links.snapshotItem(i).href = links.snapshotItem(i).href + "/komplettansicht";        
      }

    }
}

document.addEventListener(
  'load',
  function() {
    appendAllZeit();
  },
  true
);