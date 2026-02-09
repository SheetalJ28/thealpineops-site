import { useState } from "react";

const CONTACT_EMAIL = "contact@thealpineops.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Inquiry from ${name || "Website visitor"}`;
    const body = [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Organization: ${company || "-"}`,
      "",
      message || "No message provided.",
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  return (
    <section className="contact">
      <div className="intro">
        <span className="kicker">Contact us</span>
        <h1>Build the next mission-ready training arc.</h1>
        <p>
          Tell us about your team, timeline, and goals. We will reply with
          program options, availability, and a custom plan.
        </p>
        <div className="details">
          <div>
            <span>Direct line</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
          <div>
            <span>Response time</span>
            <p>Typically within 24-48 hours.</p>
          </div>
        </div>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="fieldRow">
          <label>
            Name
            <input
              name="name"
              placeholder="Your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
        </div>
        <label>
          Organization
          <input
            name="company"
            placeholder="Team or company name"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            placeholder="Share your goals, group size, and dates."
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </label>
        <button type="submit">Send via email</button>
        {/* <p className="note">
          Clicking send will open your email client with the details prefilled.
        </p> */}
      </form>
    </section>
  );
};

export default Contact;
