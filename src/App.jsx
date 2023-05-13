import "./app.css";
import Chat from "./components/chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <section className="app">
      <h1>whatsapp clone</h1>
      <div className="app-body">
        {/* sidebar */}
        <Sidebar />
        {/* chat */}
        <Chat />
      </div>
    </section>
  );
}

export default App;
