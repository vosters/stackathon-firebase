const questions = {
  username: {
    type: 'singleInput',
    name: 'username',
    label: 'Username',
    headline: 'What do your friends call you?'
  },
  diagnoses: {
    type: "checkbox",
    name: 'diagnoses',
    headline: 'What are you competing against?',
    options: [
      {
        name: "anxiety",
        label: "Anxiety"
      },
      {
        name: "depression",
        label: "Depression"
      },
      {
        name: "bipolar",
        label: "Bipolar"
      },
      {
        name: "adhd",
        label: "ADHD"
      },
      {
        name: "other",
        label: "Other"
      },
      {
        name: "none",
        label: "None"
      },
    ]
  }
};

export default questions;
