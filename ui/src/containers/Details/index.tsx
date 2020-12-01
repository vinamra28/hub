import React from 'react';
import { useMst } from '../../store/root';
import { useObserver } from 'mobx-react';
import { Spinner } from '@patternfly/react-core';
import { useParams } from 'react-router-dom';

const Details: React.FC = () => {
  const { resources } = useMst();
  const { name } = useParams();

  return useObserver(() =>
    resources.resources.size === 0 ? (
      <Spinner className="hub-spinner" />
    ) : (
      <React.Fragment>
        <span>Add Resources detail here {resources.resources.get(name).name}</span>
      </React.Fragment>
    )
  );
};
export default Details;
