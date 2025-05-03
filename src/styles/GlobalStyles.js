import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  :root {
    --color-primary: #3b82f6;
    --color-secondary: #60a5fa;
    --color-background: #f8f9fa;
    --color-surface: #ffffff;
    --color-text: #f8f9fa;
    --color-text-light: #e5e7eb;
    --color-border: #4b5563;
    --color-success: #34d399;
    --color-warning: #fbbf24;
    --color-danger: #ef4444;
    --color-low: #34d399;
    --color-medium: #fbbf24;
    --color-high: #ef4444;
    --border-radius: 8px;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
    --transition: all 0.2s ease-in-out;
    --color-header: #172554;
    --color-header-text: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--color-text);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #0f172a;
    background-image: 
      radial-gradient(circle at 20% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 40%),
      radial-gradient(circle at 80% 75%, rgba(96, 165, 250, 0.15) 0%, transparent 40%),
      linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    background-attachment: fixed;
    min-height: 100vh;
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    transition: var(--transition);

    &:focus {
      outline: none;
    }
  }

  input, textarea, select {
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    padding: 0.5rem;
    transition: var(--transition);

    &:focus {
      outline: none;
      border-color: var(--color-primary);
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
  
  .file-input-container {
    position: relative;
    overflow: hidden;
    display: inline-block;
  }
  
  .file-input {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export default GlobalStyles; 