import styled from "styled-components";
import { Column } from "../../globalStyles";

export const Feature = styled(Column)`
  margin: 2rem 0;
  gap: 1rem;
  padding: 1rem;
  justify-content: space-around;
  align-items: center;
  box-shadow: 9.7px 8.4px 2.7px rgba(0, 0, 0, 0.036),
    16.4px 14.1px 6.9px rgba(0, 0, 0, 0.051),
    22.7px 19.5px 14.2px rgba(0, 0, 0, 0.06),
    36.7px 31.6px 29.2px rgba(0, 0, 0, 0.068),
    130px 112px 80px rgba(0, 0, 0, 0.08);

  > svg {
    padding: 15px;
    border: 2px solid #252187;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }

  > span {
    text-align: center;

    color: #4c5692;
    max-width: 350px;
  }

  @media screen and (max-width: 960px) {
    grid-column: 1 / -1;
  }

  ${Column}
`;
