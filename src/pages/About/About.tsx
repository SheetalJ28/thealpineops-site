import baseUrl from "../../constants/baseUrl";

const About = () => {
  return (
    <section className="about">
      <div className="hero">
        <div className="heroCopy">
          <span className="kicker">Our Mission</span>
          <h1>About Alpine Ops</h1>
          <p>
            Alpine Ops is an adventure-led fitness and outdoor education
            collective rooted in the mountains and shaped by military
            experience.
          </p>
          <div className="heroStats">
            <div>
              <span>12+</span>
              <p>Years expedition leadership</p>
            </div>
            <div>
              <span>40+</span>
              <p>Program iterations delivered</p>
            </div>
            <div>
              <span>8</span>
              <p>Training terrains across India</p>
            </div>
          </div>
        </div>
        <div
          className="heroMedia"
          style={{
            backgroundImage: `url(${baseUrl}assets/images/main5.jpg)`,
          }}
        />
      </div>

      <div className="values">
        <div>
          <h2>Why We Exist</h2>
          <p>
            We believe humans were never meant to live soft, disconnected lives.
            We were built to move, adapt, struggle, and grow—physically,
            mentally, and spiritually. The mountains remind us of that truth. At
            Alpine Ops, we design treks, expeditions, and training programs that
            go beyond recreation. Every experience is intentional—meant to
            challenge the body, sharpen the mind, and strengthen character.
          </p>
        </div>
        <div className="valueGrid">
          <article>
            <h3>Our Philosophy</h3>
            <p>
              Alpine Ops follows a{" "}
              <b>
                4-Dimensional approach to fitness: Physical, Mental, Social, and
                Spiritual.
              </b>
            </p>
            <p>
              The mountains don’t just test endurance—they test fear,
              decision-making, teamwork, patience, and self-belief. Nature
              becomes the classroom. Discomfort becomes the teacher.
            </p>
          </article>
          <article>
            <h3>Our DNA</h3>
            <p>
              Our approach is influenced by years of military service in
              high-altitude and operational environments, where discipline,
              planning, resilience, and situational awareness are critical for
              survival and success. <br /> This isn’t tourism. This is
              preparation—for the mountains and for life.
            </p>
          </article>
          <article>
            <h3>Our Community</h3>
            <p>
              We’re not building customers—we’re building a community. A tribe
              that trains together, struggles together, and evolves together.
            </p>
          </article>
        </div>
      </div>

      <div className="story">
        <div className="storyMedia">
          <img src={`${baseUrl}assets/images/main6.jpg`} alt="Field training" />
        </div>
        <div className="storyCopy">
          <h2>What Our Training Looks Like</h2>
          <p>
            Every engagement is built around terrain immersion, tight feedback
            loops, and measured progression. We use realistic constraints,
            adaptive scenarios, and a coaching cadence that aligns teams fast.
          </p>
          <ul>
            <li>Pre-mission planning and threat assessment.</li>
            <li>Live drills, night movement, and tactical navigation.</li>
            <li>After-action reviews with actionable next steps.</li>
          </ul>
        </div>
      </div>

      <div className="founders">
        <span className="kicker">Founders</span>
        {/* <div className="foundersCopy">
          
          <h2>Built by Operators and Expedition Leaders</h2>
          <p>
            Alpine Ops was founded by a team of mountain guides and tactical
            instructors who have led missions across the Himalayas and beyond.
            Their approach blends field-tested survival, leadership under load,
            and a respect for the terrain that shapes every program.
          </p>
          <p>
            Together they have trained teams in high-altitude navigation,
            cold-weather systems, and mission planning for organizations that
            operate under pressure.
          </p>
        </div> */}
        <div className="foundersGrid">
          <article>
            <img
              src={`${baseUrl}assets/images/main7.jpg`}
              alt="Founder profile"
            />
            <div className="foundersInformation">
              <h3>Lt Col Ishan Rawat (Retd.)</h3>
              <p className="founderRole">Founder</p>
              <p className="founderIntro">
                A retired Infantry officer and accomplished mountaineer, Lt Col
                Ishan Rawat brings together extensive operational experience and
                high-altitude expedition leadership. As Founder of Alpine Ops,
                he promotes disciplined outdoor education focused on resilience,
                functional fitness, and situational awareness—preparing
                individuals for both the mountains and life beyond.
              </p>
              <div className="founderSocials" aria-label="Founder social links">
                <a
                  href="https://www.instagram.com/thealpineops"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M16.8 3H7.2A4.2 4.2 0 0 0 3 7.2v9.6A4.2 4.2 0 0 0 7.2 21h9.6a4.2 4.2 0 0 0 4.2-4.2V7.2A4.2 4.2 0 0 0 16.8 3Zm2.6 13.8a2.6 2.6 0 0 1-2.6 2.6H7.2a2.6 2.6 0 0 1-2.6-2.6V7.2a2.6 2.6 0 0 1 2.6-2.6h9.6a2.6 2.6 0 0 1 2.6 2.6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2Zm0 8a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2Z"
                      fill="currentColor"
                    />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/917819983273"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M20.5 11.8a8.6 8.6 0 0 1-12.7 7.5L3 21l1.8-4.6A8.6 8.6 0 1 1 20.5 11.8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.3 7.7c-.3-.6-.5-.6-.8-.6h-.7c-.2 0-.6.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.2.2 2 3.2 5 4.3 2.5.9 3 .7 3.5.6.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.2-.3-.5-.4l-1.7-.8c-.3-.1-.5-.1-.7.2l-.7.9c-.2.2-.4.3-.7.2-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6 0-.2 0-.4-.1-.6Z"
                      fill="#0b0e11"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
            <img
              src={`${baseUrl}assets/images/main4.jpg`}
              alt="Founder profile"
            />
            <div className="foundersInformation">
              <h3>Major Raman Tiwadi (Retd.) SM</h3>
              <p className="founderRole">Co-Founder</p>
              <p className="founderIntro">
                Major Raman Tiwadi (Retd.), SM is a highly decorated Special
                Forces veteran with service in the elite PARA SF and the
                National Security Guard (NSG). As Co-Founder of The Alpine Ops,
                he leads survival and leadership training grounded in
                operational discipline and real-world experience.
              </p>
              <div className="founderSocials" aria-label="Founder social links">
                <a
                  href="https://www.instagram.com/thealpineops"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M16.8 3H7.2A4.2 4.2 0 0 0 3 7.2v9.6A4.2 4.2 0 0 0 7.2 21h9.6a4.2 4.2 0 0 0 4.2-4.2V7.2A4.2 4.2 0 0 0 16.8 3Zm2.6 13.8a2.6 2.6 0 0 1-2.6 2.6H7.2a2.6 2.6 0 0 1-2.6-2.6V7.2a2.6 2.6 0 0 1 2.6-2.6h9.6a2.6 2.6 0 0 1 2.6 2.6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 7.2A4.8 4.8 0 1 0 16.8 12 4.8 4.8 0 0 0 12 7.2Zm0 8a3.2 3.2 0 1 1 3.2-3.2 3.2 3.2 0 0 1-3.2 3.2Z"
                      fill="currentColor"
                    />
                    <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/917819983273"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      d="M20.5 11.8a8.6 8.6 0 0 1-12.7 7.5L3 21l1.8-4.6A8.6 8.6 0 1 1 20.5 11.8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9.3 7.7c-.3-.6-.5-.6-.8-.6h-.7c-.2 0-.6.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.2.2 2 3.2 5 4.3 2.5.9 3 .7 3.5.6.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.2-.3-.5-.4l-1.7-.8c-.3-.1-.5-.1-.7.2l-.7.9c-.2.2-.4.3-.7.2-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.4.3-.6 0-.2 0-.4-.1-.6Z"
                      fill="#0b0e11"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
