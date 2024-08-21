import type { Schema, Attribute } from '@strapi/strapi';

export interface LocationsLocations extends Schema.Component {
  collectionName: 'components_locations_locations';
  info: {
    displayName: 'locations';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    position_homepage: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 4;
        },
        number
      >;
  };
}

export interface HomepagePartnerLogos extends Schema.Component {
  collectionName: 'components_homepage_partner_logos';
  info: {
    displayName: 'partner_logos';
  };
  attributes: {};
}

export interface HomepageHomepageNumbers extends Schema.Component {
  collectionName: 'components_homepage_homepage_numbers';
  info: {
    displayName: 'numbers';
    description: '';
  };
  attributes: {
    number: Attribute.String;
    text: Attribute.String;
  };
}

export interface HomepageFeedbacks extends Schema.Component {
  collectionName: 'components_homepage_feedbacks';
  info: {
    displayName: 'feedbacks';
    icon: 'write';
    description: '';
  };
  attributes: {
    feedback_content: Attribute.Text;
    feedback_person: Attribute.String;
    feedback_company: Attribute.String;
    feedback_photo: Attribute.Media<'images', true>;
  };
}

export interface HeaderHeaderMenu extends Schema.Component {
  collectionName: 'components_header_header_menus';
  info: {
    displayName: 'menu';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String &
      Attribute.CustomField<
        'plugin::slug.slug',
        {
          pattern: 'title';
        }
      >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'locations.locations': LocationsLocations;
      'homepage.partner-logos': HomepagePartnerLogos;
      'homepage.homepage-numbers': HomepageHomepageNumbers;
      'homepage.feedbacks': HomepageFeedbacks;
      'header.header-menu': HeaderHeaderMenu;
    }
  }
}
