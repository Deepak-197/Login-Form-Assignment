// import logo from './logo.svg';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import "./App.css";
import amazon from "./assets/download (1).png";
import tree from "./assets/Rectangle 4.png";
import errorimg from "./assets/Group 2.svg";
import google from "./assets/Group 9.png";
import facebook from "./assets/Rectangle 17.png";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <div className="App">
      <div className="login-form">
        <div className="amazon-div">
          <img src={amazon} alt="AMAZON" />
        </div>
        <div className="login-content">
          <h2>Login</h2>
          <div>
            <img src={tree} alt="tree" />
          </div>
          {/* formic div */}
          <div className="login-container">
            <Stack spacing={5} mt={5}>
              <FormControl isInvalid={isError}>
                
                <Input
                  variant="flushed"
                  type="email"
                  placeholder="Email"
                  _placeholder={{ color: "#20B716", fontWeight: "bold" }}
                  value={input}
                  onChange={handleInputChange}
                />
                {!isError ? (
                  <FormHelperText fontSize={12} color={"blue"}>
                    Enter the email you'd like to receive the newsletter on.
                  </FormHelperText>
                ) : (
                  <FormErrorMessage fontSize={12}>
                    <img src={errorimg} />   This Email feild is required.
                  </FormErrorMessage>
                )}
              </FormControl>
              {/* <FormControl>
                
              <Input
              type="email"
                variant="flushed"
                placeholder="Email"
                color="#20B716"
                _placeholder={{ color: "#20B716", fontWeight: "bold" }}
              />
               
              <div className="error">
                <img src={errorimg} />
                <p>This email feild is required.</p>
              </div>
              </FormControl> */}

              <Input
                variant="flushed"
                placeholder="Password"
                color="#20B716"
                _placeholder={{ color: "#20B716", fontWeight: "bold" }}
              />

              <Button
                className="signin-butt"
                height={50}
                backgroundColor={"#20B716"}
                color={"white"}
                borderRadius={30}
                marginTop={5}
              >
                Sign In
              </Button>
            </Stack>

            <div className="forget-signup">
              <p>Forgot Password?</p>
              <p>New User? Sign Up</p>
            </div>

            <p>or</p>

            <div className="gmail-login">
              <img src={google} alt="google" />
              <p>CONTINUE WITH GOOGLE</p>
            </div>
            <div className="gmail-login">
              <img src={facebook} alt="google" />
              <p>CONTINUE WITH FACEBOOK</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
