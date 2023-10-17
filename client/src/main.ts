import "./style.css";

import ButtonStrip from "buttonstrip.js";

var bs1 = new ButtonStrip({
  id: 'buttonStrip1',
});

bs1.addButton('Options', true, 'click', function () {
  console.log('Hallo Welt!');
});

bs1.addButton('Logs', false, 'click', function () {
  console.log('Test');
});

bs1.append('#content');
