fetch("/games")
  .then((res) => res.json())
  .then((games) => {
    document.write(JSON.stringify(games));
  });
