import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import { Card, CardText } from 'material-ui/Card';
const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const ProgressLoader = (props) => (
  <div style={style.container}>
    <CardText style={{ position: 'relative' }}>
      <RefreshIndicator
        size={70}
        left={-20}
        top={10}
        status={'loading'}
        style={{ marginLeft: '50%' }}
        color="red"
        percentage={100}
      />
    </CardText>
    {/* <CircularProgress thickness={10} style={style.refresh}>
      {props && props.message ? props.message : 'Loading...'}
    </CircularProgress> */}
  </div>
);

export default ProgressLoader;