import Ember from "ember";

export default function(){
  let duration = 400;
  this.setDefault({duration: duration });
  if (Ember.testing) {
    this.setDefault({duration: 10 });
  }

  this.transition(
    this.fromRoute('loading'),
    this.use('crossFade', {duration: duration/2})
  );

  this.transition(
    this.fromRoute('locations.show.things.list.index'),
    this.toRoute('locations.show.things.list.new'),
    this.use('crossFade')
  );

  // Routes
  this.transition(
    this.fromRoute('locations'),
    this.toRoute('things'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

/*
  this.transition(
    this.fromRoute('locations'),
    this.toRoute('things'),
    this.use('explode', {
      matchBy: 'data-thing-id',
      use: ['text-fly-to'],
    }, {
      use: ['toLeft']
    })
  );

  this.transition(
    this.fromRoute('things'),
    this.toRoute('locations'),
    this.use('explode', {
      matchBy: 'data-thing-id',
      use: ['text-fly-to'],
    }, {
      use: ['toRight']
    })
  );

  this.transition(
    this.fromRoute('locations'),
    this.toRoute('locations.new'),
    this.use('fade'),
    this.reverse('fade')
  );

  // Components
  // status-card
  this.transition(
    this.hasClass('adding-property'),
    this.toValue(true),
    this.use('toDown'),
    this.reverse('toUp')
  );
*/
}
