import Document, { Head, Main, NextScript } from "next/document";
const SW_INSTALL_SCRIPT = `
if (typeof navigator === "object" && "serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(registration => {
      console.log("service worker registration successful");
    })
    .catch(err => {
      console.warn("service worker registration failed", err.message);
    });
}
`;

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <meta name="Description" content="<Dummy description>" />
          <meta name="theme-color" content="#317EFB" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            type="module"
            dangerouslySetInnerHTML={{ __html: SW_INSTALL_SCRIPT }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
