fetch("/games")
  .then((res) => res.json())
  .then((games) => {
    console.log(games);
  });
