import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { Header, DashboardContainer } from './styles/StyledComponents';
import HomePage from './pages/HomePage';
import IncidentDetailPage from './pages/IncidentDetailPage';
import NewIncidentPage from './pages/NewIncidentPage';
import mockIncidents from './data/mockIncidents';

function App() {
  const [incidents, setIncidents] = useState(mockIncidents);

  const addIncident = (newIncident) => {
    setIncidents(prev => [newIncident, ...prev]);
  };

  return (
    <Router>
      <GlobalStyles />
      <Header>
        <h1>AI Safety Incident Dashboard</h1>
      </Header>

      <DashboardContainer>
        <Routes>
          <Route path="/" element={<HomePage incidents={incidents} />} />
          <Route path="/incident/:id" element={<IncidentDetailPage incidents={incidents} />} />
          <Route path="/new-incident" element={<NewIncidentPage addIncident={addIncident} />} />
        </Routes>
      </DashboardContainer>
    </Router>
  );
}

export default App;
