import { Feed, Login, MyQuestions, MyAnswers, RelatedQA, Unanswered, Urgent } from './Components';

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
  /*
   * Add more routes here 
   */
];

export default routeMap;
