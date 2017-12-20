// import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';
//
// import './main.html';

Resolutions = new Mongo.Collection('resolutions');

  Template.body.helpers({
    resolutions: function(){
      return Resolutions.find();
    }
  });

  Template.body.events({
    'submit .new-resolution': function(event){
      var title2 = event.target.title.value;

      Resolutions.insert({
        title: title2,
        createdAt: new Date()
      });

      event.target.title.value = "";

      return false;
    }
  });

  Template.resolution.events({
    'click .toggle-checked': function(){
      Resolutions.update(this._id, {$set: {checked: !this.checked}});
    },
    'click .delete': function(){
      Resolutions.remove(this._id);
    }
  });
