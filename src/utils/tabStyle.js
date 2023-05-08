import styled from "styled-components";

export const ManyTabLine = styled.div`
  height: 2px;
  background: var(--lap-primary);
  width: ${({ length }) => `${length}%`};
  position: absolute;
  left: ${({ left }) => `${left}%`};
  bottom: 0;
  transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  font-size: 0.9rem;
  width: ${(props) =>
    props.fullWidth ? "100%" : props.width ? `${props.width}%` : "auto"};
`;

export const TabItem = styled.div`
  width: 50%;
  padding: 0.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.active ? "var(--lap-primary)" : "inherit")};
`;
