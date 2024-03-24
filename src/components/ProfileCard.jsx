const ProfileCard = () => {
  return (
    <section>
      <article>
        <img src="/images/bg-pattern-card.svg" alt="Card Illustration" />
      </article>
      <article>
        <div className="image-container">
          <img src="/images/image-victor.jpg" alt="Victor Crest Photo" />
        </div>
        <div className="about-container">
          <div className="name-age-container">
            <p>
              <strong>Victor Crest</strong>
            </p>
            <p>26</p>
          </div>
          <div>
            <p className="location">London</p>
          </div>
        </div>
        <div className="stats-container">
          <div>
            <p className="count">80K</p>
            <p className="stat-name">Followers</p>
          </div>
          <div>
            <p className="count">803K</p>
            <p className="stat-name">Likes</p>
          </div>
          <div>
            <p className="count">1.4K</p>
            <p className="stat-name">Photos</p>
          </div>
        </div>
      </article>
    </section>
  )
}
export default ProfileCard
