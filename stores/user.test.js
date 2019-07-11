jest.unmock("axios");
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { UserStore } from "./user";

function itv(description, callback) {
  // Use timeout trick to run
  // capture function after mocked requests
  it(description, function(done) {
    callback(capture => {
      setTimeout(() => {
        capture();
        done();
      }, 0);
    });
  });
}

describe("UserStore", () => {
  it("start with correct values", () => {
    expect(UserStore.isLoading).toBe(false);
    expect(UserStore.email).toBe("");
    expect(UserStore.error).toBe("");
    expect(UserStore.token).toBe("");
  });

  describe("login()", () => {
    itv("list success", processRequests => {
      const mock = new MockAdapter(axios);
      mock
        .onPost("https://api-iddog.idwall.co/signup", {
          email: "email@test.com"
        })
        .reply(200, {
          user: {
            email: "email@test.com",
            token: "token__jest"
          }
        });

      UserStore.login("email@test.com");

      processRequests(() => {
        expect(UserStore.email).toBe("email@test.com");
        expect(UserStore.token).toBe("token__jest");
        expect(UserStore.error).toBe("");
      });
    });

    itv("list fail", processRequests => {
      const mock = new MockAdapter(axios);
      mock
        .onPost("https://api-iddog.idwall.co/signup", {
          email: "email@test.com"
        })
        .networkError();

      UserStore.login("email@test.com");

      processRequests(() => {
        expect(UserStore.email).toBe("");
        expect(UserStore.token).toBe("");
        expect(UserStore.error).toBe("Network Error");
      });
    });
  });
});
