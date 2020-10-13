import React from 'react';
import { Nav, NavList, NavExpandable, Checkbox, Button } from '@patternfly/react-core';

const dummy = () => {
  console.log('clear categories');
  return;
};  

const x: React.ReactNode = (
  <div>
    Support Tiers
    <Button variant="primary" onClick={dummy} style={{ marginLeft: '1em' }}>
      {' '}
      clear
    </Button>
  </div>
);

const Navigation: React.FC = () => {
  return (
    <div>
      <Nav>
        <NavList>
          <NavExpandable
            title={x as string}
            groupId="grp-2"
            // isActive={activeGroup === 'grp-2'}
            isExpanded
          >
            {Array.apply(0, Array(3)).map((x, i) => (
              <ul>
                <Checkbox
                  label="Official"
                  aria-label="uncontrolled checkbox example"
                  id={`${i}+'official'`}
                  style={{ color: 'white' }}
                />
              </ul>
            ))}
          </NavExpandable>

          <NavExpandable
            title={x as string}
            groupId="grp-2"
            // isActive={activeGroup === 'grp-2'}
            isExpanded
          >
            {Array.apply(0, Array(5)).map((x, i) => (
              <ul>
                <Checkbox
                  label="Build Tools"
                  aria-label="uncontrolled checkbox example"
                  id={`${i}+'category'`}
                  style={{ color: 'white' }}
                />
              </ul>
            ))}
          </NavExpandable>
        </NavList>
      </Nav>
    </div>
  );
};

export default Navigation;
