// If you want to pass more than one component and place them at different
// positions? Then again you don’t need to use the children prop and
// instead you just use regular props:
const User = ({ user }) => (
  <Profile
    user={user}
    avatar={<AvatarRound user={user} />}
    biography={<BiographyFat user={user} />}
  />
);

const Profile = ({ user, avatar, biography }) => (
  <div className="profile">
    <div>{avatar}</div>
    <div>
      <p>{user.name}</p>
      {biography}
    </div>
  </div>
);

const AvatarRound = ({ user }) => (
  <img className="round" alt="avatar" src={user.avatarUrl} />
);

const BiographyFat = ({ user }) => <p className="fat">{user.biography}</p>;

// Often this approach is used when having a surrounding layout component
// which takes multiple components as content with props.
// Now you can exchange the Avatar or Biography components dynamically
// with other components such as:
const AvatarSquare = ({ user }) => (
  <img className="square" alt="avatar" src={user.avatarUrl} />
);

const BiographyItalic = ({ user }) => (
  <p className="italic">{user.biography}</p>
);

// Many people refer to this as slot pattern in React. 
// You can find a working minimal project on GitHub. 
// And again, that’s how composition in React shines. 
// You don’t need to touch the Profile component. 
// Moreover, you don’t need to pass props, in this case the user, 
// multiple levels down the component tree, but rather pass it 
// to the slotted components.