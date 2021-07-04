//Page Header Content
const header = {
    title: "Book now to get exciting travel deals. Upto 40% off on credit card payments"
  };

// Welcome Content
const greetings = {
    title1: "Life is short",
    title2: "and the world is wide!",
    subtitle: "Stay at the comfort of your homes and book a trip to travel after the post pandemic era.",
    img_path: "welcome-image.svg",
    alt_name: "welcome image",
};

//Promo Content
const plantrip = {
    title: "PLAN A TRIP",
    subtitle1: "Make your vaction the most",
    subtitle2: "memorable one"
    //backgtound_img_path: "promo-image.png",
};

// Get a Quote Content
const quote = {
    title: "Travelling as a group? Get a Quote",
    inputsData: [
        {
            label: "Your Name",
            name: "name",
            type: "text"
        },
        {
            label: "Conatct No",
            name: "tel",
            type: "tel"
        },
        {
            label: "Email",
            name: "email",
            type: "email"
        },
    ],
};

// Footer Content
const footer = {
    data: [
        {
            title: "Tripzone",
            tripzone: [
                "About",
                "Awards",
                "Contact Us",
                "Feedback",

          ]
        },
        {
            title: "Main Offices",
            tripzone: [
                "The United States",
                "India",
                "Brazil",
                "Canada",

          ]
        },
        {
            title: "Sub Offices",
            tripzone: [
                "Australia",
                "England",
                "France",
                "Germany",

          ]
        },
        {
            title: "Disclaimer",
            description:[
                "This Layout is created as a part of Sirius UI Recruitments",
                "All the above content has no direct relation with Sirius business"
            ]
        }
    ]
};


  export {
      header,
      greetings,
      plantrip,
      quote,
      footer,
  }