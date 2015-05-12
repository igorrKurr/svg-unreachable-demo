import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement(){
    this._super();
    this.$('#pathToFill').mouseenter(() => {
      $('#pathToFill').attr('style', "fill:"+"url(#DevExpress_2)");
    });
    this.$('#pathToFill').mouseleave(() => {
      $('#pathToFill').attr('style', "fill:"+"#000000");
    })
  }
});


