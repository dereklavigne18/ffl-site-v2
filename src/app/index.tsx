/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { GlobalStyle } from 'styles/global-styles';

// Pages
import { HomePage } from './pages/HomePage/Loadable';
import { StandingsPage } from './pages/StandingsPage/Loadable';

// Components
import { NavBar, NavItem } from './components/Nav/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="FFL"
        defaultTitle="FFL"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta
          name="description"
          content="The Fanciest Fantasy Football League around"
        />
      </Helmet>

      <NavBar>
        <NavItem displayName="Standings" url="/standings" />
      </NavBar>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/standings" component={StandingsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
