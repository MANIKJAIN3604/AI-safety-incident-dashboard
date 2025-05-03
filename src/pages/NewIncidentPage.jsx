import { useNavigate } from 'react-router-dom';
import { PageContainer, BackButton } from '../styles/StyledComponents';
import IncidentForm from '../components/IncidentForm';

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const NewIncidentPage = ({ addIncident }) => {
    const navigate = useNavigate();

    const handleAddIncident = (newIncident) => {
        addIncident(newIncident);
        navigate('/');
    };

    return (
        <PageContainer>
            <BackButton to="/">
                <BackIcon /> Back to Dashboard
            </BackButton>

            <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary)' }}>
                Report New Incident
            </h1>

            <IncidentForm addIncident={handleAddIncident} />
        </PageContainer>
    );
};

export default NewIncidentPage; 