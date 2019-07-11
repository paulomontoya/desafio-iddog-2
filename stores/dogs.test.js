jest.unmock("axios");
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { DogsStore } from "./dogs";

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

describe("DogsStore", () => {
  it("start with correct values", () => {
    expect(DogsStore.isLoading).toBe(false);
    expect(DogsStore.error).toBe("");
    expect(DogsStore.currentCategory).toBe("");
    expect(DogsStore.list.length).toBe(0);
    expect(DogsStore.selectedIndex).toBe(false);
  });

  describe("getList()", () => {
    beforeEach(() => {
      DogsStore.currentCategory = "husky";
    });
    afterEach(() => {
      DogsStore.currentCategory = "";
    });

    itv("list success", processRequests => {
      const mock = new MockAdapter(axios);
      mock
        .onGet("https://api-iddog.idwall.co/feed", {
          params: {
            category: DogsStore.currentCategory
          },
          headers: {
            Authorization: "token__jest"
          }
        })
        .reply(200, {
          list: ["http://url.com/image.jpg"]
        });

      DogsStore.getList("token__jest");

      processRequests(() => {
        expect(DogsStore.isLoading).toBe(false);
        expect(DogsStore.list.length).toBe(1);
        expect(DogsStore.list[0]).toBe("http://url.com/image.jpg");
      });
    });

    itv("list fail", processRequests => {
      const mock = new MockAdapter(axios);
      mock
        .onGet("https://api-iddog.idwall.co/feed", {
          params: {
            category: DogsStore.currentCategory
          },
          headers: {
            Authorization: "token__jest"
          }
        })
        .networkError();

      DogsStore.getList("token__jest");

      processRequests(() => {
        expect(DogsStore.isLoading).toBe(false);
        expect(DogsStore.list.length).toBe(0);
        expect(DogsStore.error).toBe("Network Error");
      });
    });
  });
});
