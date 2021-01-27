import styled from 'styled-components';

export const Header = styled.h2`
  background-color: ${props => props.theme.palette.primary.main};
  border-radius: 20px 4px 10px 3px;
  color: ${props => props.theme.palette.background.main};
  display: inline-block;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(3)};
  margin: 0;
  transform: skew(-10deg);
  font-family: 'Amatic SC', cursive;
  font-size: 2rem;
  font-weight: 700;

  @media (min-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
    padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  }
`;
