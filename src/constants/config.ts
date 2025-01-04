type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "ShEl.Ai",
    fullName: "Shelton Joseph",
    email: "sjconsulting013@gmail.com",
  },
  hero: {
    name: "Shelly",
    p: ["I help you create AI-driven sites and web solutions."],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a skilled software developer with extensive experience in building web applications, AI-driven websites, and generative AI solutions. I specialize in creating efficient, scalable, and user-friendly digital products that deliver real-world value. Whether you need a cutting-edge AI-powered solution or a seamless web experience, I’m here to bring your vision to life. Let’s turn your ideas into impactful results!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcase my skills and experience through
      real-world examples of my work. Each project is briefly described with
      links to live demos in production. It reflects my ability to solve complex problems,
      work with different technologies, and manage projects effectively.`,  
    },
  },
};
