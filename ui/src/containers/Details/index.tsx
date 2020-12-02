import React from 'react';
import { useMst } from '../../store/root';
import { useObserver } from 'mobx-react';
import { Spinner } from '@patternfly/react-core';
import { useParams } from 'react-router-dom';
import HeaderCard from '../HeaderCard';

const Details: React.FC = () => {
  const { resources } = useMst();
  const { name } = useParams();

  const updateVersions = () => {
    resources.versionInfo(name);
  };
  return useObserver(() =>
    resources.resources.size === 0 ? (
      <Spinner className="hub-spinner" />
    ) : (
      <React.Fragment>
        {updateVersions()}
        <HeaderCard />
      </React.Fragment>
    )
  );
};
export default Details;
