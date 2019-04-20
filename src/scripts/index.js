import '../styles/style.sass';

import Model from './model';
import View from './view-test';
import Controller from './controller';

const view = new View();
const model = new Model();

new Controller(model, view);
