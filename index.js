function superbowlWin(record) {
  // const winningYear;
  const winningYear = record.find(function (r) {
    return r.result === "W";
  });
  if (winningYear) return winningYear.year;
}
