import { ReactElement } from "react";
import LandingNavbar from "../Navbars/LandingNavbar";
import Head from "./Head";

function LandingLayout({children}:{children: ReactElement}) {
	return (
		<Head>
			<LandingNavbar/>
			<main>{children}</main>
		</Head>
	)
}

export default LandingLayout
