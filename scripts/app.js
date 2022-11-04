'use strict'

const switcher = document.querySelector(`.btn`);

switcher.addEventListener(`click`, function() {
    document.body.classList.toggle(`dark-theme`)

var className = document.body.className;
if(className == "light-theme") {
    this.textContent = "Dark";
}
else{
    TouchList.textContent = "Light";
}
console.log(`cureent classname:` +className);
});

    (function () {
        var options = {
            instagram: "williane.04", // Instagram username
            whatsapp: "+51 (81) 99107-8560", // WhatsApp number
            call_to_action: "Fale Conosco", // Call to action
            button_color: "#FF318E", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "instagram,whatsapp", // Order of buttons
        };
        var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
        })();




