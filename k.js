let arr=[[0, 1], [2, 3]];
arr.reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
  console.log(arr);
