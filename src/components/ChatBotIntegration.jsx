import React, { useEffect } from 'react';


function ChatBotIntegration() {
    useEffect(() => {
      (function (d, t) {
        var v = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        v.onload = function () {
          window.voiceflow.chat.load({
            verify: { projectID: '6549d0d5b2ab3d0008cfea17' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production',
          });
        };
        v.src = 'https://cdn.voiceflow.com/widget/bundle.mjs';
        v.type = 'text/javascript';
        s.parentNode.insertBefore(v, s);
      })(document, 'script');
    }, []);}

export default ChatBotIntegration;