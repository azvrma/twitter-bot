const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 01 ; // timeout to send the message 5 min

const AutoDM = () => {
  const stream = T.stream("user");
  console.log("Start Sending Auto Direct Message 🚀🚀🚀");
  stream.on("follow", SendMessage);
};

const SendMessage = user => {
  const { screen_name, name } = user.source;

  const obj = {
    screen_name,
    text: GenerateMessage(name)
  };
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name) {
    console.log(" 🎉🎉🎉🎉 New Follower  🎉🎉🎉🎉🎉 ");
    setTimeout(() => {
      T.post("direct_messages/new", obj)
        .catch(err => {
          console.error("error", err.stack);
        })
        .then(result => {
          console.log(`Message sent successfully To  ${screen_name}  💪💪`);
        });
    }, timeout);
  }
};
const GenerateMessage = name => {
  return `Hello ${name},\n
\n
Thanks for following me I am interested in Earning Money Online and I am building by online business that will be focus on the Keywork #EarnMoneyOnline.\n
\n
Please see my offer:- https://goo.gl/KEuDno\n
\n
What are you interested in ? \n
I would like to assist you in any way that I can.\n
I am also looking for an Investor to Fund my Online Business.\n
\n
I would also like you to know that you can learn more about my Online Business, just visit:- https://www.atmauphillips.com\n
\n
Please let me know how I can assist you or if you can assist me. \n
Thanks again for Following Me I Appreciate It`; 
  /*const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const d = new Date();
  const dayName = days[d.getDay()];
  return `Hi ${name} Thanks for... \n Happy ${dayName} 😊😊 `;*/ // your message
  // My message   return `Hi ${name} Thanks for being a part of my social media network. I'am the @PicsrushE founder,A new Online Image Editor completely with web technologies,I'm also a reactjs developer and medium blogger.\n Happy to discuss anytime 😊  \n Happy ${dayName} 😊😊 `;
};

module.exports = AutoDM;
