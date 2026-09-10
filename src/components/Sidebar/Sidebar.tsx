import './Sidebar.css'

function Sidebar() {
  return (
    <aside>
        <h2>TeamPlanner</h2>
        <nav>
            <a href="/">Dashboard</a>
            <a href="/projects">Projects</a>
        </nav>
    </aside>
  );
}

export default Sidebar;