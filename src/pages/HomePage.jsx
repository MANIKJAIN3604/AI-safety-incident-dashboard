import { useState } from 'react';
import { SearchBar, SearchContainer, AddButton } from '../styles/StyledComponents';
import IncidentList from '../components/IncidentList';

// Icons
const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
);

const HomePage = ({ incidents }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <div style={{ marginBottom: '2rem', padding: '0' }}>
                <SearchContainer>
                    <SearchBar>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search incidents..."
                            value={searchQuery}
                            onChange={handleSearch}
                        />
                    </SearchBar>
                    <AddButton to="/new-incident">
                        <PlusIcon /> New Incident
                    </AddButton>
                </SearchContainer>
            </div>

            <IncidentList incidents={incidents} searchQuery={searchQuery} />
        </>
    );
};

export default HomePage; 