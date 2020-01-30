const { fromEvent, from } = rxjs;
const {
  map,
  filter,
  distinctUntilChanged,
  debounceTime,
  switchMap
} = rxjs.operators;

let searchBox = document.getElementById("search");
let results = document.getElementById("results");
let searchGithub = query =>
  fetch(`https://api.github.com/search/users?q=${query}`).then(data =>
    data.json()
  );

let input$ = fromEvent(searchBox, "input").pipe(
  map(e => e.target.value),
  debounceTime(250),
  filter(query => query.length >= 2 || query.length === 0),
  distinctUntilChanged(),
  switchMap(value =>
    value ? from(searchGithub(value)) : from(Promise.resolve({ items: [] }))
  )
);

input$.subscribe(data => {
  while (results.firstChild) {
    results.removeChild(results.firstChild);
  }
  data.items.map(user => {
    let newResult = document.createElement("li");
    newResult.textContent = user.login;
    results.appendChild(newResult);
  });
});
