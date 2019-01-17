import React, { Children, cloneElement, Component } from 'react';
import { compose } from 'recompose';

import { withTheme } from 'styled-components';

import { defaultProps } from '../../default-props';
import { parseMetricToNum } from '../../utils';
import { Box } from '../Box';
import { CheckBox } from '../CheckBox';
import { Text } from '../Text';
import { TextInput } from '../TextInput';
import { withFocus } from '../hocs';
import { FormContext } from '../Form/FormContext';

const validateField = (required, validate, messages) => data => {
  let error;
  if (required && (data === undefined || data === '')) {
    error = messages.required;
  } else if (validate) {
    if (typeof validate === 'function') {
      error = validate(data);
    } else if (validate.regexp) {
      if (!validate.regexp.test(data)) {
        error = validate.message || messages.invalid;
      }
    }
  }
  return error;
};

class FormField extends Component {
  renderChildren = (value, update) => {
    const { name, component, required, ...rest } = this.props;
    const Input = component || TextInput;
    if (Input === CheckBox) {
      return (
        <Input
          name={name}
          checked={value[name] || false}
          onChange={event => update(name, event.target.checked)}
          {...rest}
        />
      );
    }
    return (
      <Input
        name={name}
        value={value[name] || ''}
        onChange={event => update(name, event.value || event.target.value)}
        focusIndicator={false}
        {...rest}
      />
    );
  };

  render() {
    const {
      children,
      component,
      error,
      focus,
      help,
      htmlFor,
      label,
      name,
      pad,
      required,
      style,
      theme,
      validate,
      noMarginBottom,
    } = this.props;
    const { formField } = theme;
    const { border } = formField;

    return (
      <FormContext.Consumer>
        {context => {
          let normalizedError = error;
          let contents = children;

          if (context) {
            const { addValidation, errors, value, update, messages } = context;
            addValidation(name, validateField(required, validate, messages));
            normalizedError = error || errors[name];
            contents = children || this.renderChildren(value, update);
          }

          if (pad) {
            contents = (
              <Box pad={{ horizontal: 'small', bottom: 'small' }}>
                {contents}
              </Box>
            );
          }

          let borderColor;
          if (focus) {
            borderColor = 'focus';
          } else if (normalizedError) {
            borderColor = (border && border.error.color) || 'status-critical';
          } else {
            borderColor = (border && border.color) || 'border';
          }
          let abut;
          let outerStyle = style;

          if (border) {
            const normalizedChildren = children
              ? Children.map(children, child => {
                  if (child) {
                    return cloneElement(child, {
                      focusIndicator: false,
                    });
                  }
                  return child;
                })
              : contents;

            contents = (
              <Box
                ref={ref => {
                  this.childContainerRef = ref;
                }}
              >
                {normalizedChildren}
              </Box>
            );

            abut =
              border.position === 'outer' &&
              (border.side === 'all' ||
                border.side === 'horizontal' ||
                !border.side);
            if (abut) {
              // marginBottom is set to overlap adjacent fields
              let marginBottom = '-1px';
              if (border.size) {
                marginBottom = `-${parseMetricToNum(
                  theme.global.borderSize[border.size],
                )}px`;
              }
              outerStyle = {
                position: focus ? 'relative' : undefined,
                marginBottom,
                zIndex: focus ? 10 : undefined,
                ...style,
              };
            }
          }

          return (
            <Box
              margin={abut ? undefined : noMarginBottom ? 'none' : { bottom: 'small' }}
              style={outerStyle}
            >
              {(label && component !== CheckBox) || help ? (
                <Box
                  margin={{ vertical: 'xsmall' }}
                >
                  {label && component !== CheckBox ? (
                    <Text as="label" htmlFor={htmlFor} {...formField.label}>
                      {label}
                    </Text>
                  ) : (
                    undefined
                  )}
                  {help ? (
                    <Text
                      {...formField.help}
                      color={
                        formField.help.color[theme.dark ? 'dark' : 'light']
                      }
                    >
                      {help}
                    </Text>
                  ) : (
                    undefined
                  )}
                </Box>
              ) : (
                undefined
              )}
              {contents}
              {normalizedError ? (
                <Box margin={{ vertical: 'xsmall' }}>
                  <Text
                    {...formField.error}
                    color={formField.error.color[theme.dark ? 'dark' : 'light']}
                  >
                    {normalizedError}
                  </Text>
                </Box>
              ) : (
                undefined
              )}
            </Box>
          );
        }}
      </FormContext.Consumer>
    );
  }
}

FormField.defaultProps = {};
Object.setPrototypeOf(FormField.defaultProps, defaultProps);

let FormFieldDoc;
if (process.env.NODE_ENV !== 'production') {
  FormFieldDoc = require('./doc').doc(FormField); // eslint-disable-line global-require
}
const FormFieldWrapper = compose(
  withFocus,
  withTheme,
)(FormFieldDoc || FormField);

export { FormFieldWrapper as FormField };
