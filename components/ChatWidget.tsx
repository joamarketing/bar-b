import Script from "next/script";

/**
 * Dmigo chat-widget.
 *
 * De widget wordt lui geladen via next/script zodat hij de eerste
 * paginaweergave niet vertraagt. De knop verschijnt rechtsonderaan zodra
 * de externe widget geïnitialiseerd is.
 */
export default function ChatWidget() {
  return (
    <Script
      id="dmigo-chat-widget"
      src="https://app.dmigo.be/v1/chat-widget/F5IS6hTLBBgYL7LFb2pH?agent=hJYfGZike7XnDr2HmzfH"
      strategy="lazyOnload"
    />
  );
}
