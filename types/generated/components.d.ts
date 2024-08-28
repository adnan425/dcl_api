import type { Schema, Attribute } from '@strapi/strapi';

export interface TeamTeam extends Schema.Component {
  collectionName: 'components_team_teams';
  info: {
    displayName: 'Team';
  };
  attributes: {
    Profile: Attribute.Media<'images'> & Attribute.Required;
    Name: Attribute.Text & Attribute.Required;
    Designation: Attribute.String & Attribute.Required;
  };
}

export interface ServicesServiceItem extends Schema.Component {
  collectionName: 'components_services_service_items';
  info: {
    displayName: 'Service_Item';
    icon: 'apps';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'team.team': TeamTeam;
      'services.service-item': ServicesServiceItem;
    }
  }
}
