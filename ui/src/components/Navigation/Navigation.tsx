import React from 'react';
import { Nav, NavList, NavExpandable, NavItem, Checkbox } from '@patternfly/react-core';

const Navigation: React.FC = () => {
  return (
    <div>
      <Nav>
        <NavList>
          <NavExpandable
            title="string"
            groupId="grp-2"
            // isActive={activeGroup === 'grp-2'}
            isExpanded
          >
            {Array.apply(0, Array(3)).map((x, i) => (
              <NavItem
                preventDefault
                // onClick={}
                groupId="grp-2"
                itemId="own-item-handler"
                // isActive={activeItem === 'own-item-handler'}
                key={i}
              >
                <Checkbox
                  label="Official"
                  aria-label="uncontrolled checkbox example"
                  id="check-6"
                  style={{ color: 'white' }}
                />
              </NavItem>
            ))}
          </NavExpandable>

          <NavExpandable
            title="Categories"
            groupId="grp-2"
            // isActive={activeGroup === 'grp-2'}
            isExpanded
          >
            {Array.apply(0, Array(5)).map((x, i) => (
              <NavItem
                preventDefault
                // onClick={}
                groupId="grp-2"
                itemId="own-item-handler"
                // isActive={activeItem === 'own-item-handler'}
                key={i}
              >
                <Checkbox
                  label="Build Tools"
                  aria-label="uncontrolled checkbox example"
                  id="check-6"
                  style={{ color: 'white' }}
                />
              </NavItem>
            ))}
          </NavExpandable>
        </NavList>
      </Nav>
    </div>
  );
};

export default Navigation;
