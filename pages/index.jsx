import LoadingSpinner from "../components/LoadingSpinner";
import HomeForm from "../components/HomeForm";
import css from "./index.scss";
import { useObserver } from "mobx-react-lite";
import React, { useContext } from "react";
import { UserStoreContext } from "../stores";
import { useTransition, animated } from "react-spring";
import DogIcon from "../components/DogIcon";

const Index = () => {
  const UserStore = useContext(UserStoreContext);

  return useObserver(() => {
    const transitions = useTransition(UserStore.isLoading, null, {
      from: { position: "absolute", opacity: 0, width: "100%" },
      enter: { opacity: 1 },
      leave: { opacity: 0 }
    });

    return (
      <div className={css.IndexPage}>
        <header>
          <h1>
            The <span>IDDog</span>
          </h1>
          <DogIcon withCollar={!UserStore.token} />
        </header>
        <div className={css.IndexPageContainer}>
          {transitions.map(({ item, key, props }) =>
            item ? (
              <animated.div style={props} key={key}>
                <LoadingSpinner />
              </animated.div>
            ) : (
              <animated.div style={props} key={key}>
                <HomeForm submitCallback={UserStore.login} />
                {UserStore.error && (
                  <div className={css.SignupError}>
                    The server returned an error :/
                  </div>
                )}
              </animated.div>
            )
          )}
        </div>
      </div>
    );
  });
};

export default Index;
