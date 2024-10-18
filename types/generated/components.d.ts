import type { Struct, Schema } from '@strapi/strapi';

export interface TeamDepartament extends Struct.ComponentSchema {
  collectionName: 'components_team_departaments';
  info: {
    displayName: 'departament';
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LocationsLocations extends Struct.ComponentSchema {
  collectionName: 'components_locations_locations';
  info: {
    displayName: 'locations';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    text: Schema.Attribute.String;
    position_homepage: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 4;
        },
        number
      >;
  };
}

export interface LifeAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_life_advantages';
  info: {
    displayName: 'advantages';
  };
  attributes: {
    title: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface HomepagePartnerLogos extends Struct.ComponentSchema {
  collectionName: 'components_homepage_partner_logos';
  info: {
    displayName: 'partner_logos';
  };
  attributes: {};
}

export interface HomepageHomepageNumbers extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_numbers';
  info: {
    displayName: 'numbers';
    description: '';
  };
  attributes: {
    number: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface HomepageFeedbacks extends Struct.ComponentSchema {
  collectionName: 'components_homepage_feedbacks';
  info: {
    displayName: 'feedbacks';
    icon: 'write';
    description: '';
  };
  attributes: {
    feedback_content: Schema.Attribute.Text;
    feedback_person: Schema.Attribute.String;
    feedback_company: Schema.Attribute.String;
    feedback_photo: Schema.Attribute.Media<'images', true>;
  };
}

export interface HeaderHeaderMenu extends Struct.ComponentSchema {
  collectionName: 'components_header_header_menus';
  info: {
    displayName: 'menu';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface CareerVacancies extends Struct.ComponentSchema {
  collectionName: 'components_career_vacancies';
  info: {
    displayName: 'vacancies';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'team.departament': TeamDepartament;
      'locations.locations': LocationsLocations;
      'life.advantages': LifeAdvantages;
      'homepage.partner-logos': HomepagePartnerLogos;
      'homepage.homepage-numbers': HomepageHomepageNumbers;
      'homepage.feedbacks': HomepageFeedbacks;
      'header.header-menu': HeaderHeaderMenu;
      'career.vacancies': CareerVacancies;
    }
  }
}
