const x = 1;
const parentFunction = () => {
  const y = 5;

  function childFunction() {
    const innerFunction = () => {
      return (y += x);
    };

    return innerFunction;
  }

  return childFunction;
};

const resultFunction = parentFunction();
console.log(resultFunction()());
