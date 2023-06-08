/**
* SOME RANDOM DATA
*/
const PAGE_NAMES = [
  "🏠 /",
  "📄 /article/*",
  "📁 /article-list",
  "🔍 /search",
  "🛍️ /example/path",
  "👤 /mypage",
  "😸 /category/*",
  "💡 /about",
  "🔒 /login",
  "✨ /campaign/*",
];
const order = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 0, 2, 3, 4, 7, 6, 5, 8, 9],
  [1, 0, 3, 2, 7, 4, 6, 5, 8, 9],
  [1, 3, 0, 7, 2, 4, 6, 5, 8, 9],
  [3, 1, 0, 7, 2, 4, 6, 9, 8, 5],
  [9, 1, 0, 7, 2, 4, 3, 6, 8, 5]
];
const colorGradient = ['#F822FF','#EA43FF','#DB5FFF','#CC74FF','#BD8CFF','#ABA1FF','#96B6FF','#81CCFF','#63E1FF','#39F5FF'];
const dates = [
  'Apr 1, 12:00 AM - Apr 8, 12:00 AM',
  'Apr 8, 12:00 AM - Apr 15, 12:00 AM',
  'Apr 15, 12:00 AM - Apr 22, 12:00 AM',
  'Apr 22, 12:00 AM - Apr 29, 12:00 AM',
  'Apr 29, 12:00 AM - May 6, 12:00 AM',
]
const container = document.querySelector('.container');
const reset = _ => {
  container.innerHTML = '';
}
let current = 0;
/**
* Create random graph
*/
const update = pageNo => {
  reset();
  order[pageNo].forEach((nameNo, i) => {
    const createRow = (title) => {
      const sanitizeTitile = raw => {
        return raw.split(' ')[1].replaceAll('/', '_').replaceAll('*', '_');
      };
      let arbitaryValue = ((9 - i)/10) + (0.1 * Math.random());
      arbitaryValue = arbitaryValue < 0.05 ? 0.02 : arbitaryValue;
      // Row
      const rowElm = document.createElement('div');
      rowElm.classList.add('row');
      rowElm.classList.add(`row${i+1}`);
      rowElm.style.viewTransitionName = sanitizeTitile(title);      
      // Title
      const titleElm = document.createElement('div');
      titleElm.classList.add('title');
      const titleValElm = document.createElement('div');
      titleValElm.innerText = title;
      titleValElm.style.viewTransitionName = sanitizeTitile(title) + '_title';
      titleElm.appendChild(titleValElm);
      // Lcp
      const lcpElm = document.createElement('div');
      lcpElm.classList.add('lcp');
      const lcpValElm = document.createElement('div');
      lcpValElm.innerText = (5000 * arbitaryValue).toFixed(2);
      lcpValElm.style.viewTransitionName = sanitizeTitile(title) + '_lcp';
      lcpElm.appendChild(lcpValElm);
      // Value
      const valueElm = document.createElement('div');
      valueElm.classList.add('value');
      valueElm.style.viewTransitionName = sanitizeTitile(title) + '_value';    
      valueElm.style.backgroundColor = colorGradient[i]
      valueElm.style.width = `${parseInt(arbitaryValue*100)}%`;
      // Append
      rowElm.append(titleElm, lcpElm, valueElm); 
      container.appendChild(rowElm);
    }
    createRow(PAGE_NAMES[nameNo]);
  });
}
update(current);

/**
 * Add transition animation via View Transitions API
 */
const startTransition = _ => {
  if (document.startViewTransition) {
    document.startViewTransition(_ => update(current));    
  } else {
    update(current)
  } 
}
document.querySelector('.back').addEventListener('click', evt => {
  current = current === 0 ? 4 : current - 1;
  document.querySelector('.date').innerText = dates[current];
  startTransition();
});  
document.querySelector('.next').addEventListener('click', evt => {
  current = current === 4 ? 0 : current + 1;
  document.querySelector('.date').innerText = dates[current];
  startTransition();
});

document.querySelector('.data-viz').style.opacity = 1;