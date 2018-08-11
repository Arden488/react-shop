import * as React from 'react';

interface ITabProps {
  children: any,
  label: string,
}

const Tab: React.SFC<ITabProps> = (props: any) => (
  <div>{props.children}</div>
);

export default Tab;
