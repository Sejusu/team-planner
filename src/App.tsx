import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <h2>Welcome to TeamPlanner</h2>
          <p>Manage your projects and tasks efficiently.</p>
        </section>
      </main>
    </div>
  )
}

export default App