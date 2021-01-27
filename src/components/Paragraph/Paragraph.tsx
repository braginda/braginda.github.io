import styled from 'styled-components';

export const Paragraph = styled.p`
  color: ${props => props.theme.palette.secondary.main};
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing(4)};
  text-indent: ${props => props.theme.spacing(4)};
  text-shadow: 0 0 2px ${props => props.theme.palette.secondary.main};
`;
