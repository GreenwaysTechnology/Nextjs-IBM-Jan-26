
export default function PanelLayout(props) {
    const isAdmin = true 

    return <div id="PanelLayout">
        {props.children}
        {/* Render admin or user conditionally based on condition */}
        {isAdmin ? props.admin : props.user}
    </div>
}