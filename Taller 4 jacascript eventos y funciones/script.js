const btn = document.querySelector('button');
btn.onclick = function() {
    displaymessege('Yahoo a new messege');
}

function displaymessege(msgText, msgType) {
    const html = document.querySelector('html');

    const panel = document.createElement('div');
    panel.setAttribute('class', 'msgbox');
    html.appendchild(panel);

    const msg = document.createElement('p');
    msg.textContent = msgText;
    panel.appendChild(msg);

    const closeBtn = document.createElement('button');
   
    closeBtn.textContent = 'x';
    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }

   if (msgType === 'Warnig') {
       msg .style.backgroundImage = 'url(images/warnig.png)';
       panel.style.backgroundColor ='red';
   } else if (msgType ==='chat') {
       msg.style.backgroundColor = 'url(images/chat.png)';
       panel.style.backgroundColor = 'agua';
   } else {
       msg.style.paddingLeft = '20px';
   }

     

    
}

//displaymessege();