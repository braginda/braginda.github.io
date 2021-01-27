import styled from 'styled-components';

interface ParagraphProps {
  noIndent?: boolean;
}

export const Paragraph = styled.p<ParagraphProps>`
  color: ${props => props.theme.palette.secondary.main};
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing(4)};
  text-indent: ${props => (!props.noIndent ? props.theme.spacing(4) : 0)};
  text-shadow: 0 0 2px ${props => props.theme.palette.secondary.main};
`;
