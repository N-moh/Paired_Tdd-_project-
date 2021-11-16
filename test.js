// function will return true if password passes, else false if not
// original:          Password
// lowercase version: password
//
// original:          PASSWORD
// uppercase version: PASSWORD

// function (argument){console.log("loook at these heckin concise functions")}
// (argument) => {console.log("loook at these heckin concise functions")}
function passVerifier(password) {
  let numberFound = false;
  password.split("").map((i) => {
    if (!isNaN(i)) {
      numberFound = true;
    }
  });
  if (
    password.length <= 8 ||
    password.toUpperCase() === password ||
    password.toLowerCase() === password ||
    !numberFound
  ) {
    return false;
  }
  return true;
}

// anonymous functions VV

// larger than 8 characters --- done
// should not be null --- done
// should have one uppercase ----- done
// should have one lowercase ---- done
// should have one number ----- done

describe("Password verifier", () => {
  it("is 8 characters, it fails", () => {
    const result = passVerifier("abcdefgh");
    expect(result).toBe(false);
  });
  it("is 9 characters, no numbers, it fails", () => {
    const result = passVerifier("abcdefghj");
    expect(result).toBe(false);
  });
  it("is 9 characters, has numbers, no uppercase, it fails", () => {
    const result = passVerifier("abcdefghj0");
    expect(result).toBe(false);
  });
  it("is 9 characters, has numbers, no lowercase, it fails", () => {
    const result = passVerifier("ASDFGHJKL0");
    expect(result).toBe(false);
  });
  it("is 9 characters, has numbers, has upper, has lower, it pass", () => {
    const result = passVerifier("ASDkGHJKL0");
    expect(result).toBe(true);
  });
});
