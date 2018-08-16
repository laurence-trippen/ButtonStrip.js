# ButtonStrip.js
A JavaScript library to create easily a strip of buttons.


<style>
    @import url('https://fonts.googleapis.com/css?family=Khula:400,700');
    .button-strip {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 340px;
        height: 55px;
        border: 2px solid #1496BD;
        border-radius: 3px;
        display: flex;
    }
    .strip-button {
        background-color: white;
        color: #1496BD;
        width: 50%;
        height: 100%;
        text-align: center;
        vertical-align: middle;
        line-height: 65px;
        transition: background-color .4s linear, color .2s linear;
        cursor: pointer;
    }
    .strip-button span {
        color: inherit;
    }
    .strip-button-text {
        font-family: 'Khula', sans-serif;
        font-weight: 400;
        font-size: 22px;
        color: #1496BD;
        margin: 0px;
        padding: 0px;
    }
    .active-strip-button {
        background-color: #1496BD;
        color: white;
    }
</style>
<script>
function ButtonStrip(options) {
    this.id = options.id;
    this.buttons = [];
}

ButtonStrip.prototype.addButton = function(pName, pActive, pType, pCallback) {
    this.buttons.push({
        name: pName,
        active: pActive,
        event: {
            type: pType,
            callback: pCallback
        }
    });
}

ButtonStrip.prototype.append = function(element) {
    var rootDiv = document.createElement('div');
    rootDiv.classList.add('button-strip');
    rootDiv.id = this.id;

    for (var i = 0; i < this.buttons.length; i++) {
        var self = this;
        var button = this.buttons[i];

        var innerSpan = document.createElement('span');
        innerSpan.classList.add('strip-button-text');
        innerSpan.innerHTML = button.name;

        var buttonDiv = document.createElement('div');
        buttonDiv.classList.add('strip-button');
        var stripButtonClassIterator = 'strip-button-' + i.toString();
        buttonDiv.classList.add(stripButtonClassIterator);
        if (button.active) {
            buttonDiv.classList.add('active-strip-button');
            this.activeSelector = '#' + this.id + ' .' + stripButtonClassIterator;
        }
        buttonDiv.appendChild(innerSpan);
        buttonDiv.addEventListener(button.event.type, button.event.callback);
        buttonDiv.addEventListener('click', function(){
            document.querySelector(self.activeSelector).classList.remove('active-strip-button');
            document.querySelector('#' + self.id + ' .' + this.classList[1]).classList.add('active-strip-button');
            self.activeSelector = '#' + self.id + ' .' + this.classList[1];
        });

        rootDiv.appendChild(buttonDiv);
    }
    
    document.querySelector(element).appendChild(rootDiv);
}
</script>
<script>
    var bs1 = new ButtonStrip({
        id: 'buttonStrip1'
    });
    bs1.addButton('Options', true, 'click', function(){
        console.log('Hallo Welt!');
    });
    bs1.addButton('Logs', false, 'click', function(){
        console.log('Test');
    });
    bs1.append('#content');
</script>
<div id="content"></div>
