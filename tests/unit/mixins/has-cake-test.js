import EmberObject from '@ember/object';
import HasCakeMixin from 'decorator-problem/mixins/has-cake';
import { module, test } from 'qunit';

module('Unit | Mixin | has-cake', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let HasCakeObject = EmberObject.extend(HasCakeMixin);
    let subject = HasCakeObject.create();
    assert.ok(subject);
  });
});
