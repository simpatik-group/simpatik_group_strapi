import type { Schema, Struct } from '@strapi/strapi';

export interface AboutUsSections extends Struct.ComponentSchema {
  collectionName: 'components_about_us_sections';
  info: {
    description: '';
    displayName: 'sections';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files', true>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    title_shadow: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareerVacancies extends Struct.ComponentSchema {
  collectionName: 'components_career_vacancies';
  info: {
    description: '';
    displayName: 'vacancies';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface CommonMenu extends Struct.ComponentSchema {
  collectionName: 'components_common_menus';
  info: {
    description: '';
    displayName: 'menu';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface CommonSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_common_social_links';
  info: {
    displayName: 'social_links';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageFags extends Struct.ComponentSchema {
  collectionName: 'components_homepage_fags';
  info: {
    displayName: 'fags';
  };
  attributes: {
    fag_question: Schema.Attribute.String & Schema.Attribute.Required;
    faq_answer: Schema.Attribute.Text & Schema.Attribute.Required;
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
    feedback_company: Schema.Attribute.String & Schema.Attribute.Required;
    feedback_content: Schema.Attribute.Text & Schema.Attribute.Required;
    feedback_person: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageHomepageNumbers extends Struct.ComponentSchema {
  collectionName: 'components_homepage_homepage_numbers';
  info: {
    description: '';
    displayName: 'numbers';
  };
  attributes: {
    number: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
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
    description: '';
    displayName: 'advantages';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    text: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String;
  };
}

export interface TeamDepartament extends Struct.ComponentSchema {
  collectionName: 'components_team_departaments';
  info: {
    description: '';
    displayName: 'department';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-us.sections': AboutUsSections;
      'career.vacancies': CareerVacancies;
      'common.menu': CommonMenu;
      'common.social-links': CommonSocialLinks;
      'homepage.fags': HomepageFags;
      'homepage.feedbacks': HomepageFeedbacks;
      'homepage.homepage-numbers': HomepageHomepageNumbers;
      'homepage.partner-logos': HomepagePartnerLogos;
      'life.advantages': LifeAdvantages;
      'locations.locations': LocationsLocations;
      'team.departament': TeamDepartament;
    }
  }
}
