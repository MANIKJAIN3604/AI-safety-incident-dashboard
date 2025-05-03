import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    PageContainer,
    BackButton,
    SeverityBadge,
    DetailMedia,
    MediaContainer,
    MediaItem,
    MediaPreview,
    MediaCaption,
    DetailSection,
    DetailSectionTitle,
    DetailGrid,
    DetailItem,
    DetailContainer
} from '../styles/StyledComponents';

// Icons for different media types and metadata
const FileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
    </svg>
);

const VideoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
    </svg>
);

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
        case 'resolved':
            return '#34d399';
        case 'under investigation':
        case 'in progress':
            return '#fbbf24';
        case 'pending':
            return '#9ca3af';
        default:
            return '#9ca3af';
    }
};

const IncidentDetailPage = ({ incidents }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [incident, setIncident] = useState(null);

    useEffect(() => {
        const foundIncident = incidents.find(inc => inc.id === parseInt(id));

        if (foundIncident) {
            setIncident(foundIncident);
        } else {
            // If incident not found, redirect to home
            navigate('/');
        }
    }, [id, incidents, navigate]);

    if (!incident) {
        return (
            <PageContainer>
                <p>Loading...</p>
            </PageContainer>
        );
    }

    // Format date to be more readable
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Get featured media (first image if available)
    const featuredMedia = incident.media?.find(item => item.type === 'image');

    // Get other media (not the featured one)
    const otherMedia = featuredMedia
        ? incident.media?.filter(item => item !== featuredMedia)
        : incident.media || [];

    return (
        <PageContainer>
            <BackButton to="/">
                <BackIcon /> Back to Dashboard
            </BackButton>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700' }}>{incident.title}</h1>
                <SeverityBadge severity={incident.severity}>{incident.severity}</SeverityBadge>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <p style={{ color: 'var(--color-text-light)' }}>
                    Reported on {formatDate(incident.reportedDate)}
                </p>
                {incident.status && (
                    <div style={{
                        backgroundColor: getStatusColor(incident.status),
                        color: 'white',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                    }}>
                        {incident.status}
                    </div>
                )}
            </div>

            {featuredMedia && (
                <DetailMedia style={{ backgroundImage: `url(${featuredMedia.url})` }}>
                    <MediaCaption>{featuredMedia.caption}</MediaCaption>
                </DetailMedia>
            )}

            <DetailContainer severity={incident.severity}>
                <DetailSection>
                    <div style={{ fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                        <p>{incident.description}</p>
                    </div>
                </DetailSection>

                <DetailSection>
                    <DetailSectionTitle>Incident Details</DetailSectionTitle>
                    <DetailGrid>
                        {incident.location && (
                            <DetailItem>
                                <h3>Location</h3>
                                <p>{incident.location}</p>
                            </DetailItem>
                        )}

                        {incident.assignedTo && (
                            <DetailItem>
                                <h3>Assigned To</h3>
                                <p>{incident.assignedTo}</p>
                            </DetailItem>
                        )}

                        {incident.model && (
                            <DetailItem>
                                <h3>AI Model</h3>
                                <p>{incident.model}</p>
                            </DetailItem>
                        )}

                        {incident.category && (
                            <DetailItem>
                                <h3>Category</h3>
                                <p>{incident.category}</p>
                            </DetailItem>
                        )}

                        {incident.impactLevel && (
                            <DetailItem>
                                <h3>Impact Level</h3>
                                <p>{incident.impactLevel}</p>
                            </DetailItem>
                        )}

                        {incident.resolution && (
                            <DetailItem>
                                <h3>Resolution</h3>
                                <p>{incident.resolution}</p>
                            </DetailItem>
                        )}
                    </DetailGrid>
                </DetailSection>

                {otherMedia.length > 0 && (
                    <DetailSection>
                        <DetailSectionTitle>Related Media</DetailSectionTitle>
                        <MediaContainer>
                            {otherMedia.map((media, index) => (
                                <MediaItem key={index}>
                                    {media.type === 'image' && (
                                        <MediaPreview
                                            className="image"
                                            style={{ backgroundImage: `url(${media.url})` }}
                                        />
                                    )}
                                    {media.type === 'pdf' && (
                                        <MediaPreview className="pdf">
                                            <FileIcon />
                                        </MediaPreview>
                                    )}
                                    {media.type === 'video' && (
                                        <MediaPreview className="video">
                                            <VideoIcon />
                                        </MediaPreview>
                                    )}
                                    {media.caption && <MediaCaption>{media.caption}</MediaCaption>}
                                </MediaItem>
                            ))}
                        </MediaContainer>
                    </DetailSection>
                )}
            </DetailContainer>
        </PageContainer>
    );
};

export default IncidentDetailPage; 