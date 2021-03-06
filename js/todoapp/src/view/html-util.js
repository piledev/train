export const escapeSpecialChars = str => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&auot;')
    .replace(/'/g, '&#039;');
};

/**
 * HTML文字列からHTML要素を作成して返す
 * @param {string} html
 */
export const htmlToElement = html => {
  const template = document.createElement('template');
  template.innerHTML = html;
  // console.log(template.innerHTML);
  // console.log(template.content.firstElementChild);
  return template.content.firstElementChild;
};

/**
 * HTML文字列からDOM Nodeを作成して返すタグ関数
 * @return {Element}
 */
export const element = (strings, ...values) => {
  const htmlString = strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === 'string') {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
  return htmlToElement(htmlString);
};

/**
 * コンテナ要素の中身をbodyElementで上書きする
 * @param {Element} bodyElement コンテナ要素の中身となる要素
 * @param {Element} containerElement コンテナ要素
 */
export const render = (bodyElement, containerElement) => {
  console.log('    render() is called.');
  containerElement.innerHTML = '';
  containerElement.appendChild(bodyElement);
};
