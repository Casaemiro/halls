import { Html, Head, Main, NextScript } from "next/document";
import { useRouter } from "next/router";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property={`og:title`} content={`Akoneh`} />
        <meta
          property={`og:description`}
          content={`Follow this link to see more about Akoneh. The ultimate app for event organizers! With akoneh, you can easily search and find halls for any type of event, from weddings to corporate meetings. Our user-friendly interface allows you to browse through a comprehensive list of halls across the country, complete with photos, capacity information, and pricing. Say goodbye to endless Google searches and phone calls - akoneh streamlines the process, making it a breeze to find the perfect venue for your event.`}
        />
        <meta property="og:type" content="Akoneh" />
        <meta
          property="og:image"
          content={`https://firebasestorage.googleapis.com/v0/b/fir-tut-aa447.appspot.com/o/hall.jpg?alt=media&token=72541c59-590f-4e84-af32-183a5f3e060d`}
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
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
      <body className="bg-blue-100 min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
