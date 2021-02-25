// console.log('index.js: loaded');

// // CSSセレクタを使ってDOMツリーのh2要素を取得する
// const heading = document.querySelector('h2');
// // h2要素に含まれるテキストコンテンツを取得する
// const headingText = heading.textContent;
// console.log(headingText);

// // button要素を作成する
// const button = document.createElement('button');
// button.textContent = 'Push Me';
// // body要素の子要素としてbuttonを挿入する
// document.body.appendChild(button);
const main = () => {
  const userId = document.getElementById('userid').value;
  fetchUserInfo(userId)
    .then(userInfo => createView(userInfo))
    .then(view => displayView(view))
    .catch(err => {
      console.error(`Error!: ${err}`);
    });
};

const fetchUserInfo = userId => {
  const url = `https://api.github.com/users/${encodeURIComponent(userId)}`;
  return fetch(url).then(res => {
    if (!res.ok) {
      return Promise.reject(
        new Error(`${response.status}: ${response.statusText}`),
      );
    } else {
      return res.json();
    }
  });
};

const createView = userInfo => {
  return escapeHTML`
        <h4>${userInfo.name} (@${userInfo.login})</h4>
        <img src="${userInfo.avatar_url}" alt="${userInfo.login}" height="100">
        <dl>
          <dt>Location</dt>
          <dd>${userInfo.location}</dd>
          <dt>Repositories</dt>
          <dd>${userInfo.public_repos}</dd>
        </dl>
        `;
};

const displayView = view => {
  const result = document.getElementById('result');
  result.innerHTML = view;
};
// const getGitHubUserInfoXHR = userId => {
//   const url = `https://api.github.com/users/${encodeURIComponent(userId)}`;
//   const request = new XMLHttpRequest();
//   request.open('GET', url);
//   request.addEventListener('load', () => {
//     if (request.status >= 200 && request.status < 300) {
//       const userInfo = JSON.parse(request.responseText);
//       console.log(userInfo);
//     } else {
//       console.error('Network error!');
//     }
//   });
//   request.send();
// };

const escapeSpecialChars = str => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&auot;')
    .replace(/'/g, '&#039;');
};

const escapeHTML = (strings, ...values) => {
  return strings.reduce((result, str, i) => {
    const value = values[i - 1];
    if (typeof value === 'string') {
      return result + escapeSpecialChars(value) + str;
    } else {
      return result + String(value) + str;
    }
  });
};
