import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typography.paragraph1.fontSize};
    font-weight: ${theme.typography.paragraph1.fontWeight};
    line-height: ${theme.typography.paragraph1.lineHeight};
  `}
`;

const paragraph2 = css`
  ${({ theme }) => css`
    font-size: ${theme.typography.paragraph2.fontSize};
    font-weight: ${theme.typography.paragraph2.fontWeight};
    line-height: ${theme.typography.paragraph2.lineHeight};
  `}
`;


const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typography.smallestException.fontSize};
    font-weight: ${theme.typography.smallestException.fontWeight};
    line-height: ${theme.typography.smallestException.lineHeight};
  `}
`;

export const TextStyleVariants = {
  smallestException,
  paragraph1,
  paragraph2,
};

const TextBase = styled.span`
    ${({variant}) => TextStyleVariants[variant]}
`;

const Text = ({tag, variant, children, ...props}) => {
    return (
        <TextBase
            as={tag}
            variant={variant}
            {...props}
        >
            {children}
        </TextBase>
    )
}

Text.defaultProps = {
    tag: 'p',
    variant: 'paragraph1'
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'li', 'a', 'span']),
    variant: PropTypes.oneOf(['paragraph1', 'paragraph2', 'smallestException']),
}

export default Text;