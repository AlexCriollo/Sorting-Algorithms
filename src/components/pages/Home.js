import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import DataSet from './DataSet'
import AlgorithmTabs from './AlgorithmTabs';

const Home =()=> {
  return (
    <Fragment>
        <Container maxWidth="md">
            <DataSet />
            <AlgorithmTabs/>
        </Container>
    </Fragment>
  );
}

export default Home;