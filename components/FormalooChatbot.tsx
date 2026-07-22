import Script from "next/script";

/**
 * Formaloo Chatbot Widget.
 *
 * Het eerste script (type="text/props") wordt door de browser niet
 * uitgevoerd; het dient enkel als configuratie-container die de externe
 * loader (script.js) via zijn id uitleest. De loader zelf wordt met
 * next/script lui geladen zodat hij de eerste paginaweergave niet vertraagt.
 */
export default function FormalooChatbot() {
  return (
    <>
      {/* Formaloo Chatbot Widget */}
      <script
        id="formaloo-chatbot-script"
        type="text/props"
        data-widget-form="formaloo-widget"
        data-prop-slug="BCS94sFJ"
        data-prop-type="chatbot"
        data-prop-position="right"
        data-prop-once_per_user="false"
        dir="ltr"
        style={{ fontSize: "13px", lineHeight: "normal" }}
      />
      <Script
        id="formaloo-chatbot-loader"
        src="https://chatbot.formaloo.me/script.js"
        strategy="lazyOnload"
      />
      {/* End Formaloo Chatbot Widget */}
    </>
  );
}
