import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  min-height: 100%;
`;

export const AboutCompany = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.theme.spacing(4)};
  width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
    width: 50%;
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    width: 50%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
    flex-direction: column;
    max-width: 45%;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
    max-width: 45%;
  }
`;

export const CompanyName = styled.span`
  text-align: center;
  font-size: 2.5rem;
  color: ${props => props.theme.palette.secondary.main};

  @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
    font-size: 5rem;
  }
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    font-size: 5rem;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 12px 0 rgba(255, 255, 255, 0.7);
  margin-right: ${props => props.theme.spacing(4)};
  height: 50px;
  width: 50px;

  @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
    box-shadow: 0 0 24px 0 rgba(255, 255, 255, 0.7);
    margin-right: 0;
    margin-bottom: ${props => props.theme.spacing(4)};
    height: 200px;
    width: 200px;
  }

  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    box-shadow: 0 0 24px 0 rgba(255, 255, 255, 0.5);
    margin-right: 0;
    margin-bottom: ${props => props.theme.spacing(5)};
    height: 300px;
    width: 300px;
  }
`;

export const ProsCons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  h3 {
    text-align: center;
    @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
      text-align: left;
    }
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      text-align: left;
    }
  }

  & > div {
    width: 100%;
    @media (min-width: ${props => props.theme.breakpoints.md}) and (orientation: portrait) {
      width: 45%;
    }
    @media (min-width: ${props => props.theme.breakpoints.lg}) {
      width: 45%;
    }
  }
`;
