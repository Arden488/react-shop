import * as React from 'react';

import './styles.css';

interface ITabProps {
  children: any,
  label: string,
  active?: boolean,
}

class Tab extends React.Component<ITabProps> {
  public render() {
    let classes:string = 'tab';
    if (this.props.active) {
      classes += 'tab_active';
    }

    return (
      <div className={classes}>{this.props.children}</div>
    );
  }
}

export default Tab;
