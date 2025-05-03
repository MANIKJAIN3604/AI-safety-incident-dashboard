import { useState } from 'react';
import {
    FormContainer,
    FormTitle,
    FormGroup,
    Label,
    Input,
    TextArea,
    RadioGroup,
    RadioLabel,
    RadioInput,
    Button,
    FileUploadButton,
    AttachedMediaList,
    MediaItem,
    MediaPreview,
    MediaCaption
} from '../styles/StyledComponents';

// Icons for file upload and media types
const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="17 8 12 3 7 8"></polyline>
        <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
);

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

const IncidentForm = ({ addIncident }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        severity: 'Medium'
    });
    const [formErrors, setFormErrors] = useState({});
    const [mediaFiles, setMediaFiles] = useState([]);
    const [mediaCaption, setMediaCaption] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        const newFiles = files.map(file => {
            const fileType = file.type.startsWith('image/')
                ? 'image'
                : file.type.includes('pdf')
                    ? 'pdf'
                    : file.type.includes('video')
                        ? 'video'
                        : 'file';

            // Create a URL for the file preview
            const url = URL.createObjectURL(file);

            return {
                file,
                type: fileType,
                url,
                caption: mediaCaption || file.name
            };
        });

        setMediaFiles(prev => [...prev, ...newFiles]);
        setMediaCaption('');
    };

    const removeMedia = (index) => {
        setMediaFiles(prev => prev.filter((_, i) => i !== index));
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.title.trim()) {
            errors.title = 'Title is required';
        }

        if (!formData.description.trim()) {
            errors.description = 'Description is required';
        }

        if (!formData.severity) {
            errors.severity = 'Severity is required';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // Format the media files for submission
            const media = mediaFiles.map(({ file, type, url, caption }) => ({
                type,
                url,  // In a real app, you would upload the file and get the URL from the server
                caption
            }));

            const newIncident = {
                ...formData,
                id: Date.now(),
                reportedDate: new Date().toISOString().split('T')[0],
                media
            };

            addIncident(newIncident);

            // Reset form
            setFormData({
                title: '',
                description: '',
                severity: 'Medium'
            });
            setMediaFiles([]);
        }
    };

    return (
        <FormContainer>
            <FormTitle>Report New Incident</FormTitle>

            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="title">Title</Label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Brief title of the incident"
                    />
                    {formErrors.title && <div style={{ color: 'var(--color-danger)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{formErrors.title}</div>}
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="description">Description</Label>
                    <TextArea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Provide details about what happened, when, and the potential impact"
                    />
                    {formErrors.description && <div style={{ color: 'var(--color-danger)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{formErrors.description}</div>}
                </FormGroup>

                <FormGroup>
                    <Label>Severity</Label>
                    <RadioGroup>
                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="severity"
                                value="Low"
                                checked={formData.severity === 'Low'}
                                onChange={handleChange}
                            />
                            Low
                        </RadioLabel>

                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="severity"
                                value="Medium"
                                checked={formData.severity === 'Medium'}
                                onChange={handleChange}
                            />
                            Medium
                        </RadioLabel>

                        <RadioLabel>
                            <RadioInput
                                type="radio"
                                name="severity"
                                value="High"
                                checked={formData.severity === 'High'}
                                onChange={handleChange}
                            />
                            High
                        </RadioLabel>
                    </RadioGroup>
                    {formErrors.severity && <div style={{ color: 'var(--color-danger)', fontSize: '0.875rem', marginTop: '0.25rem' }}>{formErrors.severity}</div>}
                </FormGroup>

                <FormGroup>
                    <Label>Attach Media</Label>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <div className="file-input-container">
                            <FileUploadButton as="div">
                                <UploadIcon /> Add Media
                                <input
                                    type="file"
                                    className="file-input"
                                    multiple
                                    accept="image/*,application/pdf,video/*"
                                    onChange={handleFileChange}
                                />
                            </FileUploadButton>
                        </div>

                        <Input
                            type="text"
                            placeholder="Caption for attached media (optional)"
                            value={mediaCaption}
                            onChange={(e) => setMediaCaption(e.target.value)}
                            style={{ flex: 1 }}
                        />
                    </div>

                    {mediaFiles.length > 0 && (
                        <AttachedMediaList>
                            {mediaFiles.map((media, index) => (
                                <MediaItem key={index}>
                                    {media.type === 'image' ? (
                                        <MediaPreview
                                            className="image"
                                            style={{ backgroundImage: `url(${media.url})` }}
                                            onClick={() => removeMedia(index)}
                                        />
                                    ) : media.type === 'pdf' ? (
                                        <MediaPreview
                                            className="pdf"
                                            onClick={() => removeMedia(index)}
                                        >
                                            <FileIcon />
                                        </MediaPreview>
                                    ) : media.type === 'video' ? (
                                        <MediaPreview
                                            className="video"
                                            onClick={() => removeMedia(index)}
                                        >
                                            <VideoIcon />
                                        </MediaPreview>
                                    ) : null}

                                    <MediaCaption>{media.caption}</MediaCaption>
                                </MediaItem>
                            ))}
                        </AttachedMediaList>
                    )}
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)', marginTop: '0.5rem' }}>
                        Click on media to remove it
                    </div>
                </FormGroup>

                <Button type="submit">Submit Report</Button>
            </form>
        </FormContainer>
    );
};

export default IncidentForm; 