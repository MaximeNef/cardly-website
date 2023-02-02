import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id='Cardly'>
        UST_CT = []; UST = &quot;
        {"s: Date.now(), addTag: function(tag) {UST_CT.push(tag)}"}
        &quot; ;UST.addEvent = UST.addTag;
      </Script>
      <Script
        src='https://stats.listri.digital/server/ust.min.js?v=4.5.0'
        async
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
