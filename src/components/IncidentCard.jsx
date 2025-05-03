import { useState } from 'react';
import {
    IncidentCard as StyledCard,
    IncidentCardContent,
    IncidentHeader,
    IncidentTitle,
    SeverityBadge,
    IncidentDate,
    IncidentDescription,
    IncidentMetaData,
    DetailsButton,
    MediaContainer,
    MediaItem,
    MediaPreview,
    MediaCaption,
    FeaturedMedia
} from '../styles/StyledComponents';

// Icons for different media types
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

// Meta icons
const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
    </svg>
);

const StatusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

const IncidentCard = ({ incident }) => {
    const { id, title, severity, reportedDate, description, location, assignedTo, status, media = [] } = incident;

    // Format date to be more readable
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Get featured media (first image if available)
    const featuredMedia = media.find(item => item.type === 'image');

    // Truncate description for card view
    const truncateDescription = (text, maxLength = 120) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    return (
        <StyledCard severity={severity}>
            {featuredMedia && (
                <FeaturedMedia
                    style={{ backgroundImage: `url(${featuredMedia.url})` }}
                >
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', height: '50%' }}></div>
                </FeaturedMedia>
            )}

            <IncidentCardContent>
                <IncidentHeader>
                    <div>
                        <IncidentTitle>{title}</IncidentTitle>
                        <IncidentDate>{formatDate(reportedDate)}</IncidentDate>
                    </div>
                    <SeverityBadge severity={severity}>{severity}</SeverityBadge>
                </IncidentHeader>

                <IncidentDescription>
                    <p>{truncateDescription(description)}</p>
                </IncidentDescription>

                <IncidentMetaData>
                    {location && (
                        <span>
                            <LocationIcon /> {truncateDescription(location, 25)}
                        </span>
                    )}
                    {assignedTo && (
                        <span>
                            <UserIcon /> {assignedTo}
                        </span>
                    )}
                    {status && (
                        <span>
                            <StatusIcon /> {status}
                        </span>
                    )}
                </IncidentMetaData>

                <DetailsButton to={`/incident/${id}`}>
                    View Full Details
                </DetailsButton>
            </IncidentCardContent>
        </StyledCard>
    );
};

export default IncidentCard; 