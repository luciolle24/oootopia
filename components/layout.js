import { Fragment } from "react";
import MainNavBar from "./header/navigation";

function Layout (props) {
    return (
        <Fragment>
            <header>
                <MainNavBar/>
            </header>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default Layout;
