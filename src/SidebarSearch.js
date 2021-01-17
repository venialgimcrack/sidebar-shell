// TODO transition for the text input when "expanded" changes
function SidebarSearch (props) {
    return props.expanded ? (
            <div>
                <input type="text" className="search" />
            </div>
        ) : (
            <div>Search</div>
        )
}

export default SidebarSearch;
