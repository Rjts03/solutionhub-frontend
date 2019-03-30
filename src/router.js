import { Feed, Login, MyQuestions, MyAnswers, RelatedQA, Unanswered, Urgent, NotFound } from './Components';
import RedirectPage from './Service/Redirect';

const routeMap = [
  {
    path: '/',
    component: Feed,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/myquestions',
    component: MyQuestions,
  },
  {
    path: '/myanswers',
    component: MyAnswers,
  },
  {
    path: '/related',
    component: RelatedQA,
  },
  {
    path: '/unanswered',
    component: Unanswered,
  },
  {
    path: '/urgent',
    component: Urgent,
  },
  {
    path: '/auth0-redirect',
    component: RedirectPage,
  },
  {
    path: '*',
    component: NotFound,
  },
  /*
   * Add more routes here 
   */
];

export default routeMap;
