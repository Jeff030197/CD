import React, { useState, useEffect } from "react";

function Cx() {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      title:
        "Hello pooo!! Naenjoy ko po yung Cafe Con Leche masarap po, actually new fave ko na po siya. Aayain ko po yung friend kong mahilig sa coffee next time, sure ako magugustuhan din po niya hehe",
    },
    {
      id: 2,
      title:
        "binili ko siya kanina po mga around 5 and nag stuck sya here sa bahay until now ngayon ko lang siya nilagyan ng yelo and na shookt lang me na same parin ung lasa",
    },
    {
      id: 3,
      title2:
        "Masarap ang mga kape tapos yung Cinnamon Roll po ay bagong gawa palagi at dahil sa sobrang sarap, nakaligtaan ko magbayad"
    },
    {
      id: 4,
      title2:
        "I have finally found the right coffee for me, is all I can say because I've been searching for good coffee here for a long time. One of my favorite drinks is Caramel Macchiato, and your coffee did not disappoint. Your barista is great.",
    },
    {
      id: 5,
      title2:
        "Hi po! We really enjoyed our iced coffee. And yung cinnamon rolls po, nagustuhan din ni mama. Balik po kami soon. Thank you po sa excellent service!",
    },
  ]);

  useEffect(() => {
    const showMessages = async () => {
      for (let i = 0; i < feedback.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 4000));

        const messageElement = document.getElementById(`message-${i}`);
        if (messageElement) {
          messageElement.classList.add(
            "opacity-100",
            "transform",
            "translate-x-0"
          );
        }
      }
    };

    showMessages();
  }, [feedback]);

  return (
    <div className="py-5 bg-neutral-900 bg-no-repeat md:bg-cover md:bg-center md:bg-Bg md:max-xl:flex">
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <p className="tracking-tight text-white text-5xl md:text-7xl font-serif text-center">
            <span>Customer Reviews</span>
          </p>
        </div>
        <div className="flex flex-col items-center py-4 px-2">
          {feedback.map((message, index) => (
            <div
              key={message.id}
              id={`message-${index}`}
              className="text-white rounded-lg max-w-md opacity-0 transform -translate-x-full transition-all duration-400 my-2"
              style={{ width: "90%" }}
            >
              <div>
                <p className="bg-blue-500 rounded-lg justify-start flex px-3">
                  {message.title}
                </p>
                {message.title2 && (
                  <p className="mt-2 bg-pink-500 rounded-lg py-1 px-2">
                    {message.title2}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cx;
