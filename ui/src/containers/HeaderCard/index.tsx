import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  Grid,
  GridItem,
  Text,
  TextVariants,
  Badge,
  CardActions,
  Button,
  Dropdown,
  DropdownToggle,
  Modal,
  TextContent,
  ClipboardCopy,
  ClipboardCopyVariant,
  DropdownItem,
  Spinner
} from '@patternfly/react-core';
import { BuildIcon, UserIcon, GithubIcon, StarIcon } from '@patternfly/react-icons';
import { useMst } from '../../store/root';
import { useObserver } from 'mobx-react';
import { useParams } from 'react-router-dom';
import { IResource } from '../../store/resource';
import { ITag } from '../../store/category';
import Rating from '../Rating';
import './HeaderCard.css';
import { assert } from '../../store/utils';

const HeaderCard: React.FC = () => {
  const { resources } = useMst();
  const { name } = useParams();

  const resource: IResource = resources.resources.get(name);
  const dropdownItems = resource.versions.map((value) => (
    <DropdownItem
      id={String(value.id)}
      key={value.id}
      onClick={(e) => {
        const version = resources.versions.get(e.currentTarget.id);
        assert(version);
        resources.setDisplayVersion(name, version);
      }}
    >
      {value.version === resource.latestVersion.version
        ? `${value.version} (latest)`
        : value.version}
    </DropdownItem>
  ));

  const [isOpen, set] = useState(false);
  const onToggle = (isOpen: React.SetStateAction<boolean>) => set(isOpen);
  const onSelect = () => set(!isOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return useObserver(() =>
    resource?.versions.length === 0 ? (
      <Spinner />
    ) : (
      <Grid
        style={{
          margin: '-2em'
        }}
      >
        <GridItem>
          <Card>
            <CardHeader style={{ width: '90%' }}>
              <Grid hasGutter style={{ paddingTop: '2em' }}>
                <GridItem span={2} rowSpan={7}>
                  <BuildIcon size="xl" color="#484848" className="hub-details-build-icon" />
                </GridItem>

                <GridItem span={2}>
                  <Text component={TextVariants.h2} style={{ fontSize: '2em' }}>
                    {resource.displayName === '' ? resource.name : resource.displayName}
                  </Text>
                </GridItem>
                <GridItem span={8}>
                  <UserIcon size="lg" />
                </GridItem>

                <GridItem span={10}>
                  <GithubIcon size="md" />
                  <a
                    href={resource.displayVersion.webURL.substring(
                      0,
                      resource.displayVersion.webURL.lastIndexOf('/') + 1
                    )}
                    target="_"
                    className="hub-details-hyperlink"
                  >
                    Open {resource.name} in Github
                  </a>
                </GridItem>

                <GridItem span={10} style={{ textAlign: 'justify', maxWidth: '70em' }}>
                  {resource.displayVersion.description.substring(
                    0,
                    resource.displayVersion.description.indexOf('\n')
                  ) || resource.displayVersion.description}
                </GridItem>

                <GridItem span={10} style={{ textAlign: 'justify', maxWidth: '70em' }}>
                  {resource.displayVersion.description.indexOf('\n') !== -1
                    ? resource.displayVersion.description
                        .substring(resource.displayVersion.description.indexOf('\n') + 1)
                        .trim()
                    : ''}
                </GridItem>

                <GridItem span={10}>
                  {resource.tags.map((tag: ITag) => (
                    <Badge key={`badge-${tag.id}`} className="hub-tags">
                      {tag.name}
                    </Badge>
                  ))}
                </GridItem>
              </Grid>

              <CardActions style={{ paddingTop: '2em', width: '10%' }}>
                <Grid hasGutter>
                  <GridItem span={2}>
                    <StarIcon style={{ left: '2em', position: 'relative' }} />
                  </GridItem>

                  <GridItem span={2}>
                    <Text>{resource.rating}</Text>
                  </GridItem>

                  <GridItem span={12}>
                    <Rating />
                  </GridItem>

                  <GridItem>
                    <Button
                      variant="primary"
                      className="hub-details-button"
                      onClick={() => setIsModalOpen(!isModalOpen)}
                    >
                      Install
                    </Button>
                  </GridItem>

                  <GridItem>
                    <Dropdown
                      toggle={
                        <DropdownToggle onToggle={onToggle} style={{ width: '8.5em' }}>
                          {resource.displayVersion.id === resource.latestVersion.id
                            ? `${resource.displayVersion.version} (latest)`
                            : `${resource.displayVersion.version}`}
                        </DropdownToggle>
                      }
                      dropdownItems={dropdownItems}
                      onSelect={onSelect}
                      isOpen={isOpen}
                    />
                  </GridItem>
                </Grid>
              </CardActions>
            </CardHeader>
          </Card>
        </GridItem>

        <Modal
          width={'60%'}
          title={resource.name}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(!isModalOpen)}
        >
          <hr />
          <div>
            <TextContent>
              <Text component={TextVariants.h2} className="modaltext">
                Install on Kubernetes
              </Text>
              <Text> Tasks </Text>
              <ClipboardCopy isReadOnly variant={ClipboardCopyVariant.expansion}>
                {`kubectl apply -f ${resource.displayVersion.rawURL}`}
              </ClipboardCopy>
            </TextContent>
            <br />
          </div>
        </Modal>
      </Grid>
    )
  );
};

export default HeaderCard;
