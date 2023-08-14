import {Redirect} from "@docusaurus/router";
import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Homepage(): React.JSX.Element {
    return <Redirect to={useBaseUrl("docs/about")}/>
}
