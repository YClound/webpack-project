import React from 'react';
import loadable from "@loadable/component";

function asyncComponent(component) {
  const LoadableComponent = loadable(component, {
    fallback: <div>1111111111</div>
  });

  return class extends React.Component {
    render() {
      return <LoadableComponent />;
    }
  }
}

export default asyncComponent;