import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/zh/blog',
    component: ComponentCreator('/zh/blog', 'cc2'),
    exact: true
  },
  {
    path: '/zh/blog/archive',
    component: ComponentCreator('/zh/blog/archive', '078'),
    exact: true
  },
  {
    path: '/zh/blog/tags',
    component: ComponentCreator('/zh/blog/tags', '185'),
    exact: true
  },
  {
    path: '/zh/blog/tags/open-source',
    component: ComponentCreator('/zh/blog/tags/open-source', '3ec'),
    exact: true
  },
  {
    path: '/zh/blog/tags/quic',
    component: ComponentCreator('/zh/blog/tags/quic', 'e04'),
    exact: true
  },
  {
    path: '/zh/blog/tags/rust',
    component: ComponentCreator('/zh/blog/tags/rust', '09a'),
    exact: true
  },
  {
    path: '/zh/blog/tags/tquic',
    component: ComponentCreator('/zh/blog/tags/tquic', 'd9e'),
    exact: true
  },
  {
    path: '/zh/blog/tquic-open-source',
    component: ComponentCreator('/zh/blog/tquic-open-source', '233'),
    exact: true
  },
  {
    path: '/zh/markdown-page',
    component: ComponentCreator('/zh/markdown-page', 'fc1'),
    exact: true
  },
  {
    path: '/zh/search',
    component: ComponentCreator('/zh/search', '481'),
    exact: true
  },
  {
    path: '/zh/docs',
    component: ComponentCreator('/zh/docs', '13c'),
    routes: [
      {
        path: '/zh/docs/api_reference/c_h3',
        component: ComponentCreator('/zh/docs/api_reference/c_h3', 'e68'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/api_reference/c_quic',
        component: ComponentCreator('/zh/docs/api_reference/c_quic', '59a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/api_reference/rust_h3',
        component: ComponentCreator('/zh/docs/api_reference/rust_h3', '27d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/api_reference/rust_quic',
        component: ComponentCreator('/zh/docs/api_reference/rust_quic', 'cbc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/category/api-reference',
        component: ComponentCreator('/zh/docs/category/api-reference', 'a7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/category/contributing',
        component: ComponentCreator('/zh/docs/category/contributing', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/category/frequently-asked-questions',
        component: ComponentCreator('/zh/docs/category/frequently-asked-questions', 'fb4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/category/further-readings',
        component: ComponentCreator('/zh/docs/category/further-readings', 'c51'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/category/getting-started',
        component: ComponentCreator('/zh/docs/category/getting-started', '110'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/category/tutorial',
        component: ComponentCreator('/zh/docs/category/tutorial', '959'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/faq/development',
        component: ComponentCreator('/zh/docs/faq/development', '9f7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/faq/installation',
        component: ComponentCreator('/zh/docs/faq/installation', '81d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/faq/performance',
        component: ComponentCreator('/zh/docs/faq/performance', '765'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/faq/trouble_shooting',
        component: ComponentCreator('/zh/docs/faq/trouble_shooting', 'c27'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/faq/usage',
        component: ComponentCreator('/zh/docs/faq/usage', 'bad'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/further_readings/benchmark',
        component: ComponentCreator('/zh/docs/further_readings/benchmark', '9c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/further_readings/comparison',
        component: ComponentCreator('/zh/docs/further_readings/comparison', '5f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/further_readings/conformance',
        component: ComponentCreator('/zh/docs/further_readings/conformance', 'd99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/further_readings/resources',
        component: ComponentCreator('/zh/docs/further_readings/resources', '99f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/getting_started/demo',
        component: ComponentCreator('/zh/docs/getting_started/demo', '5fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/getting_started/installation',
        component: ComponentCreator('/zh/docs/getting_started/installation', '226'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/getting_started/next',
        component: ComponentCreator('/zh/docs/getting_started/next', 'b61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/how_to_contribute/contribute_codes',
        component: ComponentCreator('/zh/docs/how_to_contribute/contribute_codes', 'cd6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/how_to_contribute/contribute_docs',
        component: ComponentCreator('/zh/docs/how_to_contribute/contribute_docs', '5c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/how_to_contribute/development_guides',
        component: ComponentCreator('/zh/docs/how_to_contribute/development_guides', 'd98'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/how_to_contribute/releasing_process',
        component: ComponentCreator('/zh/docs/how_to_contribute/releasing_process', '282'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/intro',
        component: ComponentCreator('/zh/docs/intro', '386'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/tutorial/c',
        component: ComponentCreator('/zh/docs/tutorial/c', 'e47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/tutorial/core_concepts',
        component: ComponentCreator('/zh/docs/tutorial/core_concepts', '3cd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/zh/docs/tutorial/rust',
        component: ComponentCreator('/zh/docs/tutorial/rust', 'f0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/zh/',
    component: ComponentCreator('/zh/', '4a1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
