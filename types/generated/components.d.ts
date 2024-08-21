import type { Schema, Attribute } from '@strapi/strapi';

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
      'services.service-item': ServicesServiceItem;
    }
  }
}
