import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import { HeroLayout5Collection } from "./ui-components";
import { AmpligramCollection } from "./ui-components";

Amplify.configure(awsconfig);
<ThemeProvider theme={studioTheme}>
  <HeroLayout5Collection />
  <AmpligramCollection />
</ThemeProvider>;