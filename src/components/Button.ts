import styled from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'success' | 'error' | 'warning';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  border-radius: ${({ theme }) => theme.radii?.md || '0.375rem'};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  /* Tamaños */
  ${({ size, theme }) => {
        switch (size) {
            case 'sm':
                return `
          padding: ${theme.spacing?.xs || '0.5rem'} ${theme.spacing?.sm || '0.75rem'};
          font-size: ${theme.fontSizes?.sm || '0.875rem'};
        `;
            case 'lg':
                return `
          padding: ${theme.spacing?.md || '1rem'} ${theme.spacing?.lg || '1.5rem'};
          font-size: ${theme.fontSizes?.lg || '1.125rem'};
        `;
            default: // md
                return `
          padding: ${theme.spacing?.sm || '0.75rem'} ${theme.spacing?.md || '1rem'};
          font-size: ${theme.fontSizes?.base || '1rem'};
        `;
        }
    }}

  /* Variantes */
  ${({ variant, theme }) => {
        switch (variant) {
            case 'secondary':
                return `
          background: ${theme.colors?.neutral?.[100] || '#f3f4f6'};
          color: ${theme.colors?.primary?.[700] || '#1d4ed8'};
          &:hover {
            background: ${theme.colors?.neutral?.[200] || '#e5e7eb'};
          }
        `;
            case 'success':
                return `
          background: ${theme.colors?.success || '#22c55e'};
          color: white;
          &:hover {
            background: ${theme.colors?.success && darken(0.1, theme.colors.success) || '#16a34a'};
          }
        `;
            case 'error':
                return `
          background: ${theme.colors?.error || '#ef4444'};
          color: white;
          &:hover {
            background: ${theme.colors?.error && darken(0.1, theme.colors.error) || '#dc2626'};
          }
        `;
            case 'warning':
                return `
          background: ${theme.colors?.warning || '#f59e0b'};
          color: white;
          &:hover {
            background: ${theme.colors?.warning && darken(0.1, theme.colors.warning) || '#d97706'};
          }
        `;
            default: // primary
                return `
          background: ${theme.colors?.primary?.[500] || '#3b82f6'};
          color: white;
          &:hover {
            background: ${theme.colors?.primary?.[600] || '#2563eb'};
            box-shadow: ${theme.shadows?.md || '0 4px 6px rgba(0, 0, 0, 0.1)'};
          }
        `;
        }
    }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
