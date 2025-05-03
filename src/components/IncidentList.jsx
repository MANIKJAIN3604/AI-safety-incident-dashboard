import { useState, useMemo } from 'react';
import {
    IncidentListContainer,
    FiltersContainer,
    FilterGroup,
    FilterButton,
    SortSelect,
    EmptyResults
} from '../styles/StyledComponents';
import IncidentCard from './IncidentCard';

const IncidentList = ({ incidents, searchQuery }) => {
    const [severityFilter, setSeverityFilter] = useState('All');
    const [sortOrder, setSortOrder] = useState('newest');

    // Apply filters, sorting, and search to incidents
    const filteredIncidents = useMemo(() => {
        let result = [...incidents];

        // Filter by severity
        if (severityFilter !== 'All') {
            result = result.filter(incident => incident.severity === severityFilter);
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(incident =>
                incident.title.toLowerCase().includes(query) ||
                incident.description.toLowerCase().includes(query)
            );
        }

        // Sort by date
        result.sort((a, b) => {
            const dateA = new Date(a.reportedDate);
            const dateB = new Date(b.reportedDate);

            return sortOrder === 'newest'
                ? dateB - dateA
                : dateA - dateB;
        });

        return result;
    }, [incidents, severityFilter, sortOrder, searchQuery]);

    const handleSeverityFilter = (severity) => {
        setSeverityFilter(severity);
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <>
            <FiltersContainer>
                <FilterGroup>
                    <FilterButton
                        active={severityFilter === 'All'}
                        onClick={() => handleSeverityFilter('All')}
                    >
                        All
                    </FilterButton>
                    <FilterButton
                        active={severityFilter === 'Low'}
                        onClick={() => handleSeverityFilter('Low')}
                    >
                        Low
                    </FilterButton>
                    <FilterButton
                        active={severityFilter === 'Medium'}
                        onClick={() => handleSeverityFilter('Medium')}
                    >
                        Medium
                    </FilterButton>
                    <FilterButton
                        active={severityFilter === 'High'}
                        onClick={() => handleSeverityFilter('High')}
                    >
                        High
                    </FilterButton>
                </FilterGroup>

                <SortSelect value={sortOrder} onChange={handleSortChange}>
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                </SortSelect>
            </FiltersContainer>

            <IncidentListContainer>
                {filteredIncidents.length === 0 ? (
                    <EmptyResults>
                        {searchQuery
                            ? `No incidents found matching "${searchQuery}"`
                            : "No incidents match your filters."
                        }
                    </EmptyResults>
                ) : (
                    filteredIncidents.map(incident => (
                        <IncidentCard
                            key={incident.id}
                            incident={incident}
                        />
                    ))
                )}
            </IncidentListContainer>
        </>
    );
};

export default IncidentList; 