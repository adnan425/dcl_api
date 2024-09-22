import type { Schema, Attribute } from '@strapi/strapi';

export interface WorkingProcessSteps extends Schema.Component {
  collectionName: 'components_working_process_steps';
  info: {
    displayName: 'Steps';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Text;
    Icon: Attribute.Media<'images'> & Attribute.Required;
  };
}

export interface TestimonialTestimonials extends Schema.Component {
  collectionName: 'components_testimonial_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    Profile: Attribute.Media<'images'>;
    Name: Attribute.String & Attribute.Required;
    Designation: Attribute.String & Attribute.Required;
    Message: Attribute.Text & Attribute.Required;
  };
}

export interface TeamTeam extends Schema.Component {
  collectionName: 'components_team_teams';
  info: {
    displayName: 'Team';
    description: '';
  };
  attributes: {
    Profile: Attribute.Media<'images'> & Attribute.Required;
    Name: Attribute.Text & Attribute.Required;
    Designation: Attribute.String & Attribute.Required;
    Description: Attribute.Text;
  };
}

export interface ServicesServiceItem extends Schema.Component {
  collectionName: 'components_services_service_items';
  info: {
    displayName: 'Service_Item';
    icon: 'apps';
    description: '';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required;
    Description: Attribute.Text & Attribute.Required;
    Images: Attribute.Media<'images', true>;
    Keywords: Attribute.Component<'services.keywords', true>;
  };
}

export interface ServicesKeywords extends Schema.Component {
  collectionName: 'components_services_keywords';
  info: {
    displayName: 'Keywords';
  };
  attributes: {
    keyword: Attribute.String;
  };
}

export interface KeywordsKeywords extends Schema.Component {
  collectionName: 'components_keywords_keywords';
  info: {
    displayName: 'Keywords';
  };
  attributes: {
    Keyword: Attribute.String;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    Heading: Attribute.Text;
    Description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'working-process.steps': WorkingProcessSteps;
      'testimonial.testimonials': TestimonialTestimonials;
      'team.team': TeamTeam;
      'services.service-item': ServicesServiceItem;
      'services.keywords': ServicesKeywords;
      'keywords.keywords': KeywordsKeywords;
      'faq.faq': FaqFaq;
    }
  }
}
