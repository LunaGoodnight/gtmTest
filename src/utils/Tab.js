import { ManyTabLine, TabContainer, TabItem } from "./tabStyle";
import styled from "styled-components";

export const TabBorderBottom = styled.div`
  border-bottom: 1px solid var(--lap-primary-opacity);
  margin-bottom: 1.1rem;
`;

export const Tab = ({
  tab = 0,
  setTab = () => null,
  tabList = [],
  fullWidth = false,
  width,
}) => (
  <TabBorderBottom>
    <TabContainer fullWidth={fullWidth} width={width}>
      {tabList.map(({ name, id }, index) => (
        <TabItem
          key={index}
          id={id}
          onClick={() => setTab(index)}
          active={index === tab}
        >
          {name}
        </TabItem>
      ))}
      <ManyTabLine
        left={(100 / tabList.length) * tab}
        length={100 / tabList.length}
      />
    </TabContainer>
  </TabBorderBottom>
);
