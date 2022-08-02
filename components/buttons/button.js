import classes from "./button.module.css"

function SpecOpsButton(props) {
    return (<button className={classes.specopsbutton} role="button">{props.children}</button>)
}

export default SpecOpsButton;
