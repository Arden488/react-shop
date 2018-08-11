import * as React from 'react';

interface ITabsProps {
  children: any,
}

class Tabs extends React.Component<ITabsProps> {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Tabs;
