import type { AppProps, AppType } from "next/app";
import { type NextLayout } from "next";

import { api } from "~/utils/api";

import "~/styles/globals.css";

type AppPropsWithLayout = AppProps & {
  Component: NextLayout
}

const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(<Component {...pageProps} />);
};

export default api.withTRPC(MyApp);
