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

export interface TeamDepartament extends Schema.Component {
  collectionName: 'components_team_departaments';
  info: {
    displayName: 'departament';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface LifeAdvantages extends Schema.Component {
  collectionName: 'components_life_advantages';
  info: {
    displayName: 'advantages';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
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
    url: Attribute.String;
  };
}

export interface CareerVacancies extends Schema.Component {
  collectionName: 'components_career_vacancies';
  info: {
    displayName: 'vacancies';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'locations.locations': LocationsLocations;
      'team.departament': TeamDepartament;
      'life.advantages': LifeAdvantages;
      'homepage.partner-logos': HomepagePartnerLogos;
      'homepage.homepage-numbers': HomepageHomepageNumbers;
      'homepage.feedbacks': HomepageFeedbacks;
      'header.header-menu': HeaderHeaderMenu;
      'career.vacancies': CareerVacancies;
    }
  }
}
