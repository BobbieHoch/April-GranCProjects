const runnerTimes = [
  { name: "Jeff", time: 20, fastestTime: false },
  { name: "Amber", time: 10, fastestTime: true },
  { name: "Greg", time: 6, fastestTime: true },
  { name: "Sarah", time: 15, fastestTime: false },
  { name: "Tom", time: 25, fastestTime: false },
];

const addRunnerTime = (array, newName, newTime) => {
  const newRunnerTime = {
    name: newName,
    time: newTime,
    //   fastesttime: newTime>10 ? true : false,
  };
  if (newTime > 10) {
    newRunnerTime.fastestTime = true;
  } else {
    newRunnerTime.fastestTime = false;
  }
};
array.push(newRunnerTime);

function deleterunnerTimeByIndex(array, index) {
  array.splice(index, 1);
}
const deleteRunnerTimeByName = function (array, name) {
  const index = array.findIndex(
    (runnerTimeObject) => runnerTimeObject.name === name
  );
  array.splice(index, 1);
};

function editRunnerTime(array, index, time) {
  array[index].time = time;
  array[index].fastestTime = time <= 10 ? true : false;
}
