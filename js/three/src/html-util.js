'use strict';

export const escapeSpecialChars = str => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&auot;')
    .replace(/'/g, '&#039;');
};

export const htmlToElement = html => {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
};

export const element = (strings, ...values) => {
  const htmlString = strings.reduce((result, str, index) => {
    const value = values[index - 1];
    if (typeof str === 'string') {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
  return htmlToElement(htmlString);
};

export const render = (bodyElement, containerElement) => {
  containerElement.innerHTML = '';
  containerElement.appendChild(bodyElement);
};
