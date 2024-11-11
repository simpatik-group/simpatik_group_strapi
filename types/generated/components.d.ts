import type { Schema, Struct } from '@strapi/strapi';

export interface CareerVacancies extends Struct.ComponentSchema {
  collectionName: 'components_career_vacancies';
  info: {
    description: '';
    displayName: 'vacancies';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface HeaderHeaderMenu extends Struct.ComponentSchema {
  collectionName: 'components_header_header_menus';
  info: {
    description: '';
    displayName: 'menu';
    icon: 'layer';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface HomepageFeedbacks extends Struct.ComponentSchema {
  collectionName: 'components_homepage_feedbacks';
  info: {
    description: '';
    displayName: 'feedbacks';
    icon: 'write';
  };
  attributes: {
    feedback_company: Schema.Attribute.String;
    feedback_content: Schema.Attribute.Text;
    feedback_person: Schema.Attribute.String;
    feedback_photo: Schema.Attribute.Media<'images', true>;
  };
}

export interface HomepageHomepageNumbers extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_numbers';
  info: {
    description: '';
    displayName: 'numbers';
  };
  attributes: {
    number: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface HomepagePartnerLogos extends Struct.ComponentSchema {
  collectionName: 'components_homepage_partner_logos';
  info: {
    displayName: 'partner_logos';
  };
  attributes: {};
}

export interface LifeAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_life_advantages';
  info: {
    displayName: 'advantages';
  };
  attributes: {
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface LocationsLocations extends Struct.ComponentSchema {
  collectionName: 'components_locations_locations';
  info: {
    description: '';
    displayName: 'locations';
  };
  attributes: {
    position_homepage: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface TeamDepartament extends Struct.ComponentSchema {
  collectionName: 'components_team_departaments';
  info: {
    description: '';
    displayName: 'departament';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'career.vacancies': CareerVacancies;
      'header.header-menu': HeaderHeaderMenu;
      'homepage.feedbacks': HomepageFeedbacks;
      'homepage.homepage-numbers': HomepageHomepageNumbers;
      'homepage.partner-logos': HomepagePartnerLogos;
      'life.advantages': LifeAdvantages;
      'locations.locations': LocationsLocations;
      'team.departament': TeamDepartament;
    }
  }
}
