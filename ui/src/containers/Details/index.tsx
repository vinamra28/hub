import React from 'react';
import { useObserver } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { Spinner } from '@patternfly/react-core';
import { useMst } from '../../store/root';
import BasicDetails from '../BasicDetails';
import Description from './Description';

const Details: React.FC = () => {
  const { resources } = useMst();
  const { name } = useParams();

  const updateVersions = () => {
    resources.versionInfo(name);
    resources.readme(name);
  };

  return useObserver(() =>
    resources.resources.size === 0 ? (
      <Spinner className="hub-spinner" />
    ) : (
      <React.Fragment>
        {updateVersions()}
        <BasicDetails />
        <Description name={name} />
      </React.Fragment>
    )
  );
};
export default Details;
