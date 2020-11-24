import React from 'react';
import { useMst } from '../../store/root';
import { useParams } from 'react-router-dom';

const Details: React.FC = (props: any) => {
  const { resources } = useMst();

  const { catalog } = useParams();
  console.log(catalog);

  console.log(props.location.state.id);
  console.log(resources.resources.get(String(props.location.state.id)).latestVersion.rawURL);
  return (
    <React.Fragment>
      <span>Add Resources detail here</span>
    </React.Fragment>
  );
};
export default Details;
