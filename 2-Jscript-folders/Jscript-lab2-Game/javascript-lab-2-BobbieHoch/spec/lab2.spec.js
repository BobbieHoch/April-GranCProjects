{
  const mockRandom = (...nums) => {
    nums = nums.map(num => (num - 1) / 10);
    const theRealRandom = Math.random;
    let i = 0;
    function fake() {
      if (i < nums.length) {
        return nums[i++];
      } else {
        return theRealRandom();
      }
    }
    spyOn(Math, "random").and.callFake(fake);
  };

  describe("randomDamage", function() {
    it("should return a number between 1 and 10", function() {
      let num = randomDamage();
      expect(typeof num).toBe("number");
      expect(num >= 1 && num <= 10).toBeTruthy();
      expect(num).toBe(Math.floor(num));
    });

    it("should always return a number between 1 and 10, including sometimes 1 and sometimes 10", function() {
      const nums = [];
      for (let i = 0; i < 2000; i++) {
        let num = randomDamage();
        if (num < 1 || num > 10) {
          fail(`returned ${num}, but should be between 1 and 10`);
          return;
        } else {
          nums[num] = true;
        }
      }

      expect(nums).toEqual([
        undefined,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true
      ]);
    });

    it("should (for testing purposes) return specific numbers based on Math.random", function() {
      mockRandom(3, 1, 10);
      expect(randomDamage()).toBe(3);
      expect(randomDamage()).toBe(1);
      expect(randomDamage()).toBe(10);
    });
  });

  describe("chooseOption", function() {
    it("should return one of the two parameters", function() {
      let result = chooseOption("cat", "dog");
      if (result !== "cat") {
        expect(result).toEqual("dog");
      } else {
        expect(result).toEqual("cat");
      }
    });

    it("should randomly pick one of the two parameters", function() {
      const results = {};
      for (let i = 0; i < 2000; i++) {
        let result = chooseOption("cat", "dog");
        results[result] = true;
      }

      expect(results).toEqual({ cat: true, dog: true });
    });

    it("should (for testing purposes) the first option for random < .5", function() {
      mockRandom(1, 2, 3, 4);
      expect(chooseOption("cat", "dog")).toBe("cat");
      expect(chooseOption("dog", "cat")).toBe("dog");
      expect(chooseOption("cat", "dog")).toBe("cat");
      expect(chooseOption("dog", "cat")).toBe("dog");
    });

    it("should (for testing purposes) the second option for random > .5", function() {
      mockRandom(7, 8, 9, 10);
      expect(chooseOption("cat", "dog")).toBe("dog");
      expect(chooseOption("dog", "cat")).toBe("cat");
      expect(chooseOption("cat", "dog")).toBe("dog");
      expect(chooseOption("dog", "cat")).toBe("cat");
    });
  });

  describe("attackPlayer", function() {
    it("should return number minus randomDamage, 3", function() {
      mockRandom(3);
      let result = attackPlayer(7);
      expect(result).toBe(4);
    });

    it("should return number minus randomDamage, 5", function() {
      mockRandom(5);
      let result = attackPlayer(7);
      expect(result).toBe(2);
    });
  });

  describe("logging functions", function() {
    it("logDeath logs appropriate message to the console", () => {
      spyOn(console, "log");
      logDeath("Tarzan", "Clayton");
      expect(console.log).toHaveBeenCalledWith("Tarzan defeated Clayton");
    });

    it("logHealth logs appropriate message to the console", () => {
      spyOn(console, "log");
      logHealth("Tarzan", 20);
      expect(console.log).toHaveBeenCalledWith("Tarzan health: 20");
    });
  });

  describe("isDead", function() {
    it("returns false for positive number 20", () => {
      expect(isDead(20)).toBe(false);
    });
    it("returns false for positive number 1", () => {
      expect(isDead(1)).toBe(false);
    });
    it("returns true for zero", () => {
      expect(isDead(0)).toBe(true);
    });
    it("returns true for negative number -1", () => {
      expect(isDead(-1)).toBe(true);
    });
    it("returns true for negative number -20", () => {
      expect(isDead(-20)).toBe(true);
    });
  });

  describe("fight", function() {
    const PLAYER1 = 2,
      PLAYER2 = 9;

    it("prints second player's health after first player's attack", () => {
      mockRandom(PLAYER1, 5);
      spyOn(console, "log");
      fight("Tarzan", "Clayton", 20, 20);
      expect(console.log).toHaveBeenCalledWith("Clayton health: 15");
    });
    it("prints first player's health after second player's attack", () => {
      mockRandom(PLAYER2, 7);
      spyOn(console, "log");
      fight("Tarzan", "Clayton", 20, 20);
      expect(console.log).toHaveBeenCalledWith("Tarzan health: 13");
    });
    it("repeats attack", () => {
      mockRandom(PLAYER1, 3, PLAYER2, 2);
      spyOn(console, "log");
      fight("Tarzan", "Clayton", 20, 20);
      expect(console.log).toHaveBeenCalledWith("Clayton health: 17");
      expect(console.log).toHaveBeenCalledWith("Tarzan health: 18");
    });
    it("player 1 can lose", () => {
      mockRandom(PLAYER1, 3, PLAYER2, 3, PLAYER2, 7);
      spyOn(console, "log");
      fight("Tarzan", "Clayton", 8, 8);
      expect(console.log).toHaveBeenCalledWith("Clayton health: 5");
      expect(console.log).toHaveBeenCalledWith("Tarzan health: 5");
      expect(console.log).toHaveBeenCalledWith("Tarzan health: -2");
      expect(console.log).toHaveBeenCalledWith("Clayton defeated Tarzan");
    });
    it("player 2 can lose", () => {
      mockRandom(PLAYER1, 3, PLAYER2, 3, PLAYER1, 5);
      spyOn(console, "log");
      fight("Tarzan", "Clayton", 8, 8);
      expect(console.log).toHaveBeenCalledWith("Clayton health: 5");
      expect(console.log).toHaveBeenCalledWith("Tarzan health: 5");
      expect(console.log).toHaveBeenCalledWith("Clayton health: 0");
      expect(console.log).toHaveBeenCalledWith("Tarzan defeated Clayton");
    });
  });
}