import user from './Profile/user.json';
import Profile from './Profile';
import data from './Statistics/data.json';
import Statistics from './Statistics';
import friends from './FriendList/friends.json';
import FriendList from './FriendList';

export const App = () => {
  return (
    <div /*style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 36,
      color: '#052052'
    }}*/
    >
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
        followers={user.stats.folllower}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics
        title="title"
        stats={data}
      />
      <FriendList
      friends={friends}
      />
    </div>
  );
};

//export default App;