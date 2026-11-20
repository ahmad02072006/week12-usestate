import ToggleDetail from './components/ToggleDetail';
import TaskList from './components/TaskList';
import ScoreBoard from './components/ScoreBoard';
import './App.css';

export default function App() {
  return (
    <main className="app-shell">
      <ToggleDetail />
      <TaskList />
      <ScoreBoard />
    </main>
  );
}