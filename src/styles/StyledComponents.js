import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Layout Components
export const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const Header = styled.header`
  background-color: var(--color-header);
  backdrop-filter: blur(8px);
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(106, 61, 232, 0.2);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  h1 {
    color: var(--color-header-text);
    font-size: 1.75rem;
    font-weight: 700;
    background: linear-gradient(90deg, #fff, #c7a6ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const SearchBar = styled.div`
  position: relative;
  width: 100%;
  flex: 1;
  max-width: 500px;
  margin: 0;
  
  input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    border-radius: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    transition: var(--transition);
    height: 44px;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }
    
    &:focus {
      background-color: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 0 2px rgba(67, 97, 238, 0.3);
      border-color: var(--color-primary);
    }
  }
  
  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const AddButton = styled(Link)`
  background-color: var(--color-primary);
  color: white;
  padding: 0 1.5rem;
  border-radius: 2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: var(--transition);
  white-space: nowrap;
  height: 44px;
  margin: 0;
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    background-color: var(--color-secondary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

export const MainContent = styled.main`
  width: 100%;
`;

export const PageContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: rgba(26, 16, 36, 0.8);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(106, 61, 232, 0.15);
  color: var(--color-text);
`;

export const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const FloatingActionButton = styled(Link)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  transition: var(--transition);
  z-index: 90;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  &:hover {
    background-color: var(--color-secondary);
    transform: translateY(-4px);
  }
`;

// Incident List Components
export const IncidentListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  background-color: rgba(26, 16, 36, 0.7);
  border-radius: var(--border-radius);
  backdrop-filter: blur(8px);
  position: sticky;
  top: 5.5rem;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(106, 61, 232, 0.15);
  margin-bottom: 1rem;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const FilterButton = styled.button`
  background-color: ${props => props.active ? 'var(--color-primary)' : 'rgba(106, 61, 232, 0.1)'};
  color: ${props => props.active ? '#fff' : 'rgba(255, 255, 255, 0.8)'};
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  border: 1px solid ${props => props.active ? 'var(--color-primary)' : 'rgba(106, 61, 232, 0.1)'};
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-secondary)' : 'rgba(106, 61, 232, 0.2)'};
  }
`;

export const SortSelect = styled.select`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  border: 1px solid rgba(106, 61, 232, 0.15);
  background-color: rgba(26, 16, 36, 0.7);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  
  option {
    background-color: #2a1a3a;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export const IncidentCard = styled.div`
  background-color: ${props => {
    switch (props.severity) {
      case 'Low': return 'rgba(52, 211, 153, 0.15)';
      case 'Medium': return 'rgba(251, 191, 36, 0.15)';
      case 'High': return 'rgba(239, 68, 68, 0.15)';
      case 'Critical': return 'rgba(220, 38, 38, 0.25)';
      default: return 'rgba(255, 255, 255, 0.07)';
    }
  }};
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid ${props => {
    switch (props.severity) {
      case 'Low': return 'rgba(52, 211, 153, 0.3)';
      case 'Medium': return 'rgba(251, 191, 36, 0.3)';
      case 'High': return 'rgba(239, 68, 68, 0.3)';
      case 'Critical': return 'rgba(220, 38, 38, 0.4)';
      default: return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    background-color: ${props => {
      switch (props.severity) {
        case 'Low': return 'rgba(52, 211, 153, 0.2)';
        case 'Medium': return 'rgba(251, 191, 36, 0.2)';
        case 'High': return 'rgba(239, 68, 68, 0.2)';
        case 'Critical': return 'rgba(220, 38, 38, 0.3)';
        default: return 'rgba(255, 255, 255, 0.1)';
      }
    }};
  }
`;

export const IncidentCardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const IncidentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const IncidentTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-right: 1rem;
  color: #fff;
`;

export const SeverityBadge = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  background-color: ${props => {
    switch (props.severity) {
      case 'Low': return 'var(--color-low)';
      case 'Medium': return 'var(--color-medium)';
      case 'High': return 'var(--color-high)';
      default: return 'var(--color-text-light)';
    }
  }};
  color: white;
`;

export const IncidentDate = styled.span`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
`;

export const IncidentDescription = styled.div`
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.95rem;
  line-height: 1.5;
  
  p {
    margin-bottom: 0.5rem;
  }
`;

export const IncidentMetaData = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

export const DetailsButton = styled(Link)`
  color: var(--color-primary);
  font-weight: 500;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: auto;
  
  &:hover {
    color: var(--color-secondary);
    text-decoration: underline;
  }
`;

// Media Components
export const MediaContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const MediaItem = styled.div`
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  
  &:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-md);
  }
`;

export const MediaPreview = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &.image {
    background-size: cover;
    background-position: center;
  }
  
  &.pdf, &.video {
    font-size: 2.5rem;
    color: var(--color-primary);
  }
`;

export const MediaCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FeaturedMedia = styled.div`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const DetailMedia = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: var(--border-radius);
  margin: 1.5rem 0;
`;

// Detail Page Components
export const DetailContainer = styled.div`
  background-color: ${props => {
    switch (props.severity) {
      case 'Low': return 'rgba(52, 211, 153, 0.12)';
      case 'Medium': return 'rgba(251, 191, 36, 0.12)';
      case 'High': return 'rgba(239, 68, 68, 0.12)';
      case 'Critical': return 'rgba(220, 38, 38, 0.18)';
      default: return 'rgba(26, 16, 36, 0.5)';
    }
  }};
  border: 1px solid ${props => {
    switch (props.severity) {
      case 'Low': return 'rgba(52, 211, 153, 0.3)';
      case 'Medium': return 'rgba(251, 191, 36, 0.3)';
      case 'High': return 'rgba(239, 68, 68, 0.3)';
      case 'Critical': return 'rgba(220, 38, 38, 0.4)';
      default: return 'rgba(106, 61, 232, 0.25)';
    }
  }};
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.95);
`;

export const DetailSection = styled.div`
  margin-bottom: 2rem;
`;

export const DetailSectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-secondary);
  font-weight: 600;
  text-shadow: 0 0 10px rgba(140, 82, 255, 0.3);
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailItem = styled.div`
  margin-bottom: 1rem;
  
  h3 {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-text-light);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.95);
  }
`;

// Form Components
export const FormContainer = styled.div`
  background-color: rgba(26, 16, 36, 0.8);
  backdrop-filter: blur(10px);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-md);
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
  border: 1px solid rgba(106, 61, 232, 0.15);
  color: var(--color-text);
`;

export const FormTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--color-secondary);
  font-weight: 600;
  text-shadow: 0 0 10px rgba(140, 82, 255, 0.3);
`;

export const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--color-text-light);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background-color: rgba(16, 8, 24, 0.5);
  color: var(--color-text);
  
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(106, 61, 232, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  resize: vertical;
  background-color: rgba(16, 8, 24, 0.5);
  color: var(--color-text);
  
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 2px rgba(106, 61, 232, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  color: var(--color-text);
`;

export const RadioInput = styled.input`
  cursor: pointer;
  accent-color: var(--color-primary);
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--color-secondary);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background-color: var(--color-text-light);
    cursor: not-allowed;
  }
`;

export const FileUploadButton = styled(Button)`
  background-color: rgba(16, 8, 24, 0.5);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: rgba(106, 61, 232, 0.2);
  }
`;

export const AttachedMediaList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

export const EmptyResults = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(26, 16, 36, 0.5);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-sm);
  padding: 3rem 2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(106, 61, 232, 0.1);
`;