const Contact = () => {
  return (
    <form action="https://formspree.io/f/xxxxxx" method="POST">
      <input name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default Contact;
