import TasksProvider from "./common/providers/TasksProvider";
import TaskManager from "./components/TaskManager";

function App() {
  return (
    <TasksProvider>
      <TaskManager />
    </TasksProvider>
  );
}

export default App;
