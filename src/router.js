import { Feed, Login, MyQuestions, MyAnswers, RelatedQA, Unanswered, Urgent, NotFound } from './Components';

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
    path: '/myanswres',
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
    path: '*',
    component: NotFound,
  },
  /*
   * Add more routes here 
   */
];

export default routeMap;
