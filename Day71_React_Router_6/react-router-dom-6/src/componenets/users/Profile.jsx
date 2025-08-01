import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
const Profile = () => {
  const {state} = useLocation()
  let {login,name,id,location,email,hireable, bio, created_at, avatar_url, url, html_url, followers_url, following_url,gists_url,starred_url,subscriptions_url,organizations_url,repos_url,events_url,received_events_url,type,user_view_type,site_admin}= state
  return (
    <section id='profile'>
      <article>
        <header>
          {/* The difference between Link and NavLink : Both are same but NavLink has additional advantage of styling example conditional classes , adding dynamic class */}
          <NavLink to = '/' className='back_btn'>Go back</NavLink>
          <picture>
            <img src={state.avatar_url} alt={name} height={400} width={400} />
          </picture>
        </header>
        <main>
          <h2>{login}</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quo quis dolores suscipit assumenda ipsum maiores sit culpa quod incidunt voluptate molestiae pariatur, blanditiis eos officiis quidem vero veritatis fuga debitis soluta eligendi libero at ullam sunt? Labore excepturi dolores incidunt facere repellat a unde quod, quaerat ratione rem sapiente deleniti aliquam quia ipsum enim officia quos est error modi sequi cupiditate dicta suscipit aliquid? Dolores possimus minus quas totam, libero tempore quasi autem exercitationem necessitatibus consequatur pariatur. Doloribus voluptas nulla sunt libero repellat ut, distinctio culpa expedita optio quibusdam, veritatis est. Repudiandae maiores nemo perferendis ea dicta maxime architecto.
          </p>
          <a href={html_url} target='blank' rel='noreferrer'>View Github Profile</a>
        </main>
      </article>
    </section>
  )
}

export default Profile