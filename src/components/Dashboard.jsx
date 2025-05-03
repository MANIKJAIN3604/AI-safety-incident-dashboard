import { useState } from 'react';
import { DashboardContainer, Header, MainContent, Sidebar, SearchBar } from '../styles/StyledComponents';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';
import mockIncidents from '../data/mockIncidents';

// Search icon component
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const Dashboard = () => {
    const [incidents, setIncidents] = useState(mockIncidents);
    const [searchQuery, setSearchQuery] = useState('');

    const addIncident = (newIncident) => {
        setIncidents(prev => [newIncident, ...prev]);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <Header>
                <h1>AI Safety Incident Dashboard</h1>
                <SearchBar>
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search incidents..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </SearchBar>
            </Header>

            <DashboardContainer>
                <MainContent>
                    <IncidentList
                        incidents={incidents}
                        searchQuery={searchQuery}
                    />
                </MainContent>

                <Sidebar>
                    <IncidentForm addIncident={addIncident} />
                </Sidebar>
            </DashboardContainer>
        </>
    );
};

export default Dashboard; 