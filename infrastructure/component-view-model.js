import DefineMap from 'can-define/map/';
import options from './options';
import security from './security';
import click from './click';
import i18n from './i18n';

export default DefineMap.extend({
    validationMessage: {
        type: 'string',
        value: ''
    },
    working: {
        type: 'boolean'
    },
    permission: {
        type: 'string',
        value: ''
    },
    context: {
        type: '*'
    },
    elementClass: {
        type: 'string'
    },
    visibilityClass: {
        get: function () {
            var visible = this.visible;

            return visible != undefined && !visible ? 'invisible' : '';
        }
    },
    iconClass: {
        type: 'string',
        get: function (value) {
            return value || options.iconClass || 'fa';
        }
    },
    iconNameClass: {
        get: function (value) {
            return value || '';
        }
    },
    iconSpacingClass: {
        type: 'string',
        get: function (value) {
            return value || options.iconSpacingClass;
        }
    },
    formGroupClass: {
        type: 'string',
        get: function (value) {
            return value || options.iconSpacingClass;
        }
    },
    text: {
        type: 'string',
        get: function (value) {
            return i18n.value(value);
        }
    },
    disabled: {
        get: function (value) {
            var disabled = value || false || this.working;

            if (this.permission && !disabled) {
                disabled = !security.hasPermission(this.permission);
            }

            return disabled;
        }
    },
    _click: function (ev) {
        ev.stopPropagation();

        return click.on(this);
    }
});

