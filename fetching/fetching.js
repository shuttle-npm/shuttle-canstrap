﻿import {Component} from 'can';
import ComponentViewModel from '../infrastructure/component-view-model';
import view from './fetching.stache!';
import i18n from '../infrastructure/i18n';

export const ViewModel = ComponentViewModel.extend({
  title: {
      type: 'string',
      default: '',
      get: function(value) {
          return i18n.value(value);
      }
  }
});

export default Component.extend({
    tag: 'cs-fetching',
    view,
    ViewModel
});