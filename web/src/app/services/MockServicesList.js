import React from 'react'
import Search from '../util/Search'
import PageActions from '../util/PageActions'
import SpeedDial from '../util/SpeedDial'
import { VpnKey as ServiceIcon, Label as LabelIcon } from '@material-ui/icons'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import Chip from '@material-ui/core/Chip'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import { Chance } from 'chance'
import { ListItemSecondaryAction } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
const c = new Chance()

export default function MockServicesList(props) {
  let services1 = []
  let services2 = []
  let services3 = []
  let services4 = []

  const labelKey1 = 'Measurement'
  const labelKey2 = 'Platform Engineering'
  const labelKey3 = 'ENI/ENO'

  for (let i = 0; i < 5; i++) {
    services1.push({
      name: c.word({ capitalize: true }) + ' ' + c.word({ capitalize: true }),
      description: c.sentence(),
      label: {
        key: labelKey1,
        value: c.word({
          length: c.integer({ min: 4, max: 7 }),
          capitalize: true,
        }),
      },
    })
  }
  for (let i = 0; i < 3; i++) {
    services2.push({
      name: c.word({ capitalize: true }) + ' ' + c.word({ capitalize: true }),
      description: c.sentence(),
      label: {
        key: labelKey2,
        value: c.word({
          length: c.integer({ min: 4, max: 7 }),
          capitalize: true,
        }),
      },
    })
  }
  for (let i = 0; i < 4; i++) {
    services3.push({
      name: c.word({ capitalize: true }) + ' ' + c.word({ capitalize: true }),
      description: c.sentence(),
      label: {
        key: labelKey3,
        value: c.word({
          length: c.integer({ min: 4, max: 7 }),
          capitalize: true,
        }),
      },
    })
  }
  for (let i = 0; i < 5; i++) {
    services4.push({
      name: c.word({ capitalize: true }) + ' ' + c.word({ capitalize: true }),
      description: c.sentence(),
      label: null,
    })
  }

  return (
    <React.Fragment>
      <PageActions>
        <Search />
      </PageActions>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant='outlined' style={{ marginRight: '1.25em' }}>
            <ServiceIcon style={{ marginRight: '0.5em' }} />
            All Services
          </Button>
          <Button variant='contained'>
            <LabelIcon style={{ marginRight: '0.5em' }} />
            Label Groups
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography
            component='h2'
            color='textSecondary'
            variant='h5'
            style={{ marginBottom: '0.25em' }}
          >
            {labelKey1}
          </Typography>
          <Card>
            <List>
              {services1.map(service => (
                <ListItem button>
                  <ListItemText
                    primary={service.name}
                    secondary={service.description}
                  />
                  {service.label && (
                    <ListItemSecondaryAction>
                      <Chip
                        avatar={
                          <Avatar>
                            <LabelIcon />
                          </Avatar>
                        }
                        label={service.label.value}
                      />
                    </ListItemSecondaryAction>
                  )}
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography
            component='h2'
            color='textSecondary'
            variant='h5'
            style={{ marginBottom: '0.25em' }}
          >
            {labelKey2}
          </Typography>
          <Card>
            <List>
              {services2.map(service => (
                <ListItem button>
                  <ListItemText
                    primary={service.name}
                    secondary={service.description}
                  />
                  {service.label && (
                    <ListItemSecondaryAction>
                      <Chip
                        avatar={
                          <Avatar>
                            <LabelIcon />
                          </Avatar>
                        }
                        label={service.label.value}
                      />
                    </ListItemSecondaryAction>
                  )}
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography
            component='h2'
            color='textSecondary'
            variant='h5'
            style={{ marginBottom: '0.25em' }}
          >
            {labelKey3}
          </Typography>
          <Card>
            <List>
              {services3.map(service => (
                <ListItem button>
                  <ListItemText
                    primary={service.name}
                    secondary={service.description}
                  />
                  {service.label && (
                    <ListItemSecondaryAction>
                      <Chip
                        avatar={
                          <Avatar>
                            <LabelIcon />
                          </Avatar>
                        }
                        label={service.label.value}
                      />
                    </ListItemSecondaryAction>
                  )}
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography
            component='h2'
            color='textSecondary'
            variant='h5'
            style={{ marginBottom: '0.25em' }}
          >
            No Labels
          </Typography>
          <Card>
            <List>
              {services4.map(service => (
                <ListItem button>
                  <ListItemText
                    primary={service.name}
                    secondary={service.description}
                  />
                  {service.label && (
                    <ListItemSecondaryAction>
                      <Chip
                        avatar={
                          <Avatar>
                            <LabelIcon />
                          </Avatar>
                        }
                        label={service.label.value}
                      />
                    </ListItemSecondaryAction>
                  )}
                </ListItem>
              ))}
            </List>
          </Card>
        </Grid>
      </Grid>

      <SpeedDial
        label='service'
        actions={[
          {
            icon: <ServiceIcon />,
            onClick: () => {},
            label: 'Create Service',
          },
          {
            icon: <LabelIcon />,
            onClick: () => {},
            label: 'Create Label Group',
          },
        ]}
      />
    </React.Fragment>
  )
}