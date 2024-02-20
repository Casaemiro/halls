import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-29YB4QMLZY"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-29YB4QMLZY');`,
          }}
        />
        <script></script>
      </Head>
      <title>halls</title>

      <link rel="icon" href="/logo.png" />
      <body className="bg-blue-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
