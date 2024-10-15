import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

// button comp
export function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  // stats
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "close" : "Add Friend"}
        </Button>
      </div>

      {/* form split bill */}
      <FormSplitBill />
    </div>
  );
}

// friends list
export function FriendList() {
  const friends = initialFriends;

  // friends map
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

// friend
export function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}{" "}
        </p>
      )}{" "}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}{" "}
        </p>
      )}{" "}
      {friend.balance === 0 && <p>You and {friend.name} are even </p>}
      <Button>Select</Button>
    </li>
  );
}

// form add friend
export function FormAddFriend() {
  return (
    <form className="form-split-bill">
      {/* friend name */}
      <label>👯 Friend name</label>
      <input type="text" />

      {/* friend image */}
      <label>🎇 Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

// form split bill
export function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💶 Bill value</label>
      <input type="text" />

      <label>🙏 Your expense</label>
      <input type="text" />

      <label>👯 expense </label>
      <input type="text" disabled />

      <label> ₿ Who is payng a bill</label>

      <select>
        <option value="user">You</option>
        <option value="friend">friend</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}
