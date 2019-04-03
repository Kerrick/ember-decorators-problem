import Controller from '@ember/controller';
import HasCake from 'decorator-problem/mixins/has-cake';

export default Controller.extend(
  HasCake,
  {
    appName: 'Decorator Problem',

    @computed('appName')
    get screamingAppName() {
      return this.appName.toUpperCase();
    }
  }
);
