import '../css/sb-admin-2.css'
import '../css/custom.css'

import { UserProvider } from '@auth0/nextjs-auth0';

import 'react-bootstrap-typeahead/css/Typeahead.css';

import Head from "next/head";

// https://medium.com/@fabianterh/fixing-flashing-huge-font-awesome-icons-on-a-gatsby-static-site-787e1cfb3a18
// https://github.com/FortAwesome/react-fontawesome/issues/234
import { config } from '@fortawesome/fontawesome-svg-core' // 👈
import '@fortawesome/fontawesome-svg-core/styles.css' // 👈
config.autoAddCss = false // 👈

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
       <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </UserProvider>
  );
}
