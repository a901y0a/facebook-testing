// import React, { useState } from "react";
// import "../components/Home.css";
// import "boxicons/css/boxicons.min.css";
// import { Link } from "react-router-dom";

// const FacebookHome = () => {
//   const [isSidebarHidden, setSidebarHidden] = useState(false);
//   const [storyModal, setStoryModal] = useState(null);
//   const [storyReply, setStoryReply] = useState("");
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       name: "John Doe",
//       content: "Just enjoying my day on Facebook!",
//       time: "1 hour ago",
//       images: ["https://media.istockphoto.com/id/459964807/photo/sepia.webp?a=1&b=1&s=612x612&w=0&k=20&c=4E9q9LvIfZSsxqqWWdiqEXbpzKLSgHVEJhTeIa4PBlM="],
//       profilePic: "https://th.bing.com/th?q=User+Account+Icon",
//       replies: [],
//       likes: 0,
//       liked: false
//     }
//   ]);

//   const [uploadModalOpen, setUploadModalOpen] = useState(false);
//   const [postText, setPostText] = useState("");
//   const [postImages, setPostImages] = useState([]);

//   const toggleSidebar = () => setSidebarHidden(!isSidebarHidden);

//   const handleUploadClick = () => {
//     setUploadModalOpen(true);
//   };

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setPostImages(files);
//   };

//   const handlePostUpload = () => {
//     const imageUrls = postImages.map((file) => URL.createObjectURL(file));
//     const newPost = {
//       id: posts.length + 1,
//       name: "You",
//       content: postText,
//       time: "Just now",
//       images: imageUrls,
//       profilePic: "https://th.bing.com/th?q=User+Account+Icon",
//       replies: [],
//       likes: 0,
//       liked: false
//     };
//     setPosts([newPost, ...posts]);
//     setPostText("");
//     setPostImages([]);
//     setUploadModalOpen(false);
//   };

//   const handleReply = (postId, replyText) => {
//     if (!replyText.trim()) return;
//     setPosts(posts.map(post =>
//       post.id === postId
//         ? { ...post, replies: [...post.replies, replyText] }
//         : post
//     ));
//   };

//   const deleteReply = (postId, replyIndex) => {
//     setPosts(posts.map(post =>
//       post.id === postId
//         ? { ...post, replies: post.replies.filter((_, i) => i !== replyIndex) }
//         : post
//     ));
//   };

//   const toggleLike = (postId) => {
//     setPosts(posts.map(post =>
//       post.id === postId
//         ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
//         : post
//     ));
//   };

//   const [stories, setStories] = useState([
//     { id: 0, title: "Your Story", img: "https://th.bing.com/th?q=Add+Story+Icon" },
//     { id: 1, title: "Tharu", img: "https://th.bing.com/th/id/OIP.DjeZBZp43bXNPM8cefjw-QHaEK?w=309&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
//     { id: 2, title: "Jenni_01", img: "https://tse1.mm.bing.net/th/id/OIP.DHVLtvgV0hRBXlnOF-BTGAHaFD" },
//     { id: 3, title: "Benny_dayal", img: "https://th.bing.com/th/id/OIP.uMPlLEd4A4JGIqC1sKKPXwHaPH" },
//     { id: 4, title: "Kamal", img: "https://miro.medium.com/v2/resize:fit:785/0*Ggt-XwliwAO6QURi.jpg" },
//     { id: 5, title: "Monica_77", img: "https://tse4.mm.bing.net/th/id/OIP.xd0sc57HXQCqiJGHQ1dEmgHaLT" },
//     { id: 6, title: "charuu", img: "https://i.pinimg.com/originals/8d/e4/1f/8de41f44d4f422b21b503d7bb1f298ce.jpg" }
//   ]);

//   const handleYourStoryClick = () => {
//     const fileInput = document.createElement("input");
//     fileInput.type = "file";
//     fileInput.accept = "image/*";
//     fileInput.onchange = (e) => {
//       const file = e.target.files[0];
//       if (file) {
//         const newStory = {
//           id: 0,
//           title: "Your Story",
//           img: URL.createObjectURL(file),
//           replies: []
//         };
//         const updatedStories = [newStory, ...stories.slice(1)];
//         setStories(updatedStories);
//         setStoryModal(newStory);
//       }
//     };
//     fileInput.click();
//   };

//   return (
//     <div className="fb-container">
//       {/* SIDEBAR */}
//       <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
//         <a href="#" className="brand">
//           {/* <i className="bx bxs-smile bx-lg" />
//           <span className="text">Test Hub</span> */}
//         </a>
//         <ul className="side-menu top">
//           <li className="active"><a href="#"><i className="bx bxs-dashboard" /><span className="text">Dashboard</span></a></li>
//           <li><a href="#"><i className="bx bxs-shopping-bag" /><span className="text">My Store</span></a></li>
//           <li><a href="#"><i className="bx bxs-doughnut-chart" /><span className="text">Analytics</span></a></li>
//           <li><a href="#"><i className="bx bxs-message-dots" /><span className="text">Message</span></a></li>
//           <li><a href="#"><i className="bx bxs-group" /><span className="text">Team</span></a></li>
//           <li><a href="#"><i className="bx bxs-cog bx-spin-hover" /><span className="text">Settings</span></a></li>
//           <Link to="/"><li><a href="#" className="logout"><i className="bx bx-power-off bx-burst-hover" /><span className="text">Logout</span></a></li></Link>
//         </ul>
       
          
       
//       </section>

//       {/* CONTENT */}
//       <section id="content" className={isSidebarHidden ? "shifted" : ""}>
//         {/* NAVBAR */}
//         <div className="fb-navbar">
//           <div className="fb-nav-left">
//             <i className="bx bx-menu bx-lg" onClick={toggleSidebar}></i>
//             <span className="fb-logo" style={{ fontSize: "28px", fontWeight: "bold" }}>Facebook</span>
//           </div>
//           <div className="fb-nav-icons">
//             <i className="bx bxs-home"></i>
//             <i className="bx bxs-user"></i>
//             <i className="bx bxs-bell"></i>
//             <div className="fb-search">
//               <input type="text" placeholder="Search Facebook" />
//             </div>
//             <img
//               src="https://th.bing.com/th?q=User+Account+Icon"
//               className="fb-profile-pic-nav"
//               alt="Profile"
//             />
//             <button className="upload-btn-nav" onClick={handleUploadClick}>Upload Post</button>
//           </div>
//         </div>

//         {/* STORY MODAL */}
//         {storyModal && (
//           <div className="story-modal" onClick={() => setStoryModal(null)}>
//             <div className="story-modal-content" onClick={(e) => e.stopPropagation()}>
//               <img src={storyModal.img} alt="story" />
//               <h4>{storyModal.title}</h4>
//               <div className="story-reply">
//                 <input
//                   type="text"
//                   value={storyReply}
//                   onChange={(e) => setStoryReply(e.target.value)}
//                   placeholder="Reply to story..."
//                 />
//                 <button onClick={() => {
//                   if (storyReply.trim()) {
//                     const updated = [...(storyModal.replies || []), storyReply];
//                     setStoryModal({ ...storyModal, replies: updated });
//                     setStoryReply("");
//                   }
//                 }}>Send</button>
//               </div>
//               <div className="story-replies">
//                 {(storyModal.replies || []).map((reply, i) => (
//                   <div key={i} className="story-reply-item">{reply}</div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* POST MODAL */}
//         {uploadModalOpen && (
//           <div className="upload-modal" onClick={() => setUploadModalOpen(false)}>
//             <div className="upload-modal-content" onClick={(e) => e.stopPropagation()}>
//               <textarea
//                 value={postText}
//                 onChange={(e) => setPostText(e.target.value)}
//                 placeholder="What's on your mind?"
//               ></textarea>
//               <input type="file" accept="image/*" multiple onChange={handleFileChange} />
//               <button onClick={handlePostUpload}>Post</button>
//             </div>
//           </div>
//         )}

//         {/* STORIES */}
//         <div className="fb-stories-container">
//           {stories.map((story, index) => (
//             <div
//               key={story.id}
//               className="fb-story"
//               onClick={() => {
//                 if (index === 0) handleYourStoryClick();
//                 else setStoryModal(story);
//               }}
//             >
//               <img src={story.img} alt={story.title} />
//             </div>
//           ))}
//         </div>

//         {/* POSTS */}
//         <div className="fb-feed">
//           {posts.map(post => (
//             <div key={post.id} className="fb-post">
//               <div className="post-header">
//                 <img src={post.profilePic} alt={post.name} className="post-profile-pic" />
//                 <div className="post-user-info">
//                   <strong>{post.name}</strong>
//                   <span>{post.time}</span>
//                 </div>
//               </div>
//               <div className="post-content">
//                 <p>{post.content}</p>
//                 {post.images && post.images.map((img, idx) => (
//                   <img key={idx} src={img} alt={`post-${idx}`} />
//                 ))}
//               </div>
//               <div className="post-actions">
//                 <span onClick={() => toggleLike(post.id)} role="img">👍 {post.liked ? "Liked" : "Like"} ({post.likes})</span>
//                 <span role="img">💬 Comment</span>
//                 <span role="img">↗️ Share</span>
//               </div>
//               <div className="replies">
//                 {post.replies.map((reply, i) => (
//                   <div key={i} className="reply">
//                     {reply}
//                     <button onClick={() => deleteReply(post.id, i)}>❌</button>
//                   </div>
//                 ))}
//                 <div className="reply-box">
//                   <input
//                     type="text"
//                     placeholder="Write a comment..."
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         handleReply(post.id, e.target.value);
//                         e.target.value = "";
//                       }
//                     }}
//                   />
//                   <button onClick={(e) => {
//                     const input = e.target.previousSibling;
//                     handleReply(post.id, input.value);
//                     input.value = "";
//                   }}>Reply</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default FacebookHome;

import React, { useEffect, useState } from "react";
import "../components/Home.css";
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";
import axios from "axios";

const FacebookHome = () => {
  const [isSidebarHidden, setSidebarHidden] = useState(false);
  const [storyModal, setStoryModal] = useState(null);
  const [storyReply, setStoryReply] = useState("");
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [postImages, setPostImages] = useState([]);
  const [showDeleteMenu, setShowDeleteMenu] = useState(null);
  const [searchText, setSearchText] = useState("");

   const [userName, setUserName] = useState('');

  const API_POSTS = "http://localhost:3000/posts";
  const API_STORIES = "http://localhost:3000/stories";

  useEffect(() => {
    axios.get(API_POSTS).then(res => setPosts(res.data.reverse()));
    axios.get(API_STORIES).then(res => setStories(res.data));
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUserName(parsedUser.firstName + ' ' + parsedUser.lastName); // or just parsedUser.firstName
    }
  }, []);
  const toggleSidebar = () => setSidebarHidden(!isSidebarHidden);
  const handleUploadClick = () => setUploadModalOpen(true);
  const handleFileChange = e => setPostImages(Array.from(e.target.files));

  const handlePostUpload = async () => {
    const imgs = postImages.map(f => URL.createObjectURL(f));
    const newPost = {
      name: "You",
      content: postText,
      time: "Just now",
      images: imgs,
      profilePic: "https://th.bing.com/th?q=User+Account+Icon",
      replies: [],
      likes: 0,
      liked: false,
    };
    const res = await axios.post(API_POSTS, newPost);
    setPosts(prev => [res.data, ...prev]);
    setPostText("");
    setPostImages([]);
    setUploadModalOpen(false);
  };

  const toggleLike = async postId => {
    const post = posts.find(p => p.id === postId);
    const updated = {
      liked: !post.liked,
      likes: post.liked ? post.likes - 1 : post.likes + 1,
    };
    await axios.patch(`${API_POSTS}/${postId}`, updated);
    setPosts(prev =>
      prev.map(p => (p.id === postId ? { ...p, ...updated } : p))
    );
  };

  const handleReply = async (postId, replyText) => {
    if (!replyText.trim()) return;
    const post = posts.find(p => p.id === postId);
    const updatedReplies = [...post.replies, replyText];
    await axios.patch(`${API_POSTS}/${postId}`, { replies: updatedReplies });
    setPosts(prev =>
      prev.map(p =>
        p.id === postId ? { ...p, replies: updatedReplies } : p
      )
    );
  };

  const deleteReply = async (postId, i) => {
    const post = posts.find(p => p.id === postId);
    const updatedReplies = post.replies.filter((_, idx) => idx !== i);
    await axios.patch(`${API_POSTS}/${postId}`, { replies: updatedReplies });
    setPosts(prev =>
      prev.map(p =>
        p.id === postId ? { ...p, replies: updatedReplies } : p
      )
    );
  };

  const deletePost = async postId => {
    await axios.delete(`${API_POSTS}/${postId}`);
    setPosts(prev => prev.filter(p => p.id !== postId));
    setShowDeleteMenu(null);
  };

  const handleStoryReply = async () => {
    if (!storyReply.trim() || !storyModal || storyModal.id === 0) return;
    const updatedReplies = [...(storyModal.replies || []), storyReply];
    const updatedStory = { ...storyModal, replies: updatedReplies };
    await axios.patch(`${API_STORIES}/${storyModal.id}`, {
      replies: updatedReplies,
    });
    setStories(prev =>
      prev.map(s => (s.id === storyModal.id ? updatedStory : s))
    );
    setStoryModal(updatedStory);
    setStoryReply("");
  };

  const handleYourStoryClick = () => {
    const fi = document.createElement("input");
    fi.type = "file";
    fi.accept = "image/*";
    fi.onchange = e => {
      const file = e.target.files[0];
      if (file) {
        const ns = {
          id: 0,
          title: "Your Story",
          img: URL.createObjectURL(file),
          replies: [],
        };
        setStories([ns, ...stories.slice(1)]);
        setStoryModal(ns);
      }
    };
    fi.click();
  };

  const filteredPosts = posts.filter(
    post =>
      post.name.toLowerCase().includes(searchText.toLowerCase()) ||
      post.content.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="fb-container">
      <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
        <ul className="side-menu top">
          <li className="active">
            <a href="#"><i className="bx bxs-dashboard"/><span className="text">Dashboard</span></a>
          </li>
          <li><a href="#"><i className="bx bxs-shopping-bag"/><span className="text">My Store</span></a></li>
          <li><a href="#"><i className="bx bxs-doughnut-chart"/><span className="text">Analytics</span></a></li>
          <li><a href="#"><i className="bx bxs-message-dots"/><span className="text">Message</span></a></li>
          <li><a href="#"><i className="bx bxs-group"/><span className="text">Team</span></a></li>
          <li><a href="#"><i className="bx bxs-cog bx-spin-hover"/><span className="text">Settings</span></a></li>
          <Link to="/">
            <li><a href="#" className="logout"><i className="bx bx-power-off bx-burst-hover"/><span className="text">Logout</span></a></li>
          </Link>
        </ul>
      </section>

      <section id="content" className={isSidebarHidden ? "shifted" : ""}>
        <div className="fb-navbar">
          <div className="fb-nav-left">
            <i className="bx bx-menu bx-lg" onClick={toggleSidebar} />
            <span className="fb-logo" style={{ fontSize: "28px", fontWeight: "bold" }}>Facebook</span>
          </div>
          <div className="fb-nav-icons">
            <i className="bx bxs-home" />
            <i className="bx bxs-user" />
            <i className="bx bxs-bell" />
            <div className="fb-search">
              <input
                type="text"
                placeholder="Search Facebook"
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
              />
            </div>
            <img src="https://th.bing.com/th?q=User+Account+Icon" className="fb-profile-pic-nav" alt="Profile" />
            <span className="user-name">{userName}</span>

            <button className="upload-btn-nav" onClick={handleUploadClick}>Upload Post</button>
          </div>
        </div>

        {storyModal && (
          <div className="story-modal" onClick={() => setStoryModal(null)}>
            <div className="story-modal-content" onClick={e => e.stopPropagation()}>
              <img src={storyModal.img} alt="story" />
              <h4>{storyModal.title}</h4>
              <div className="story-reply">
                <input value={storyReply} onChange={e => setStoryReply(e.target.value)} placeholder="Reply to story..." />
                <button onClick={handleStoryReply}>Send</button>
              </div>
              <div className="story-replies">
                {(storyModal.replies || []).map((r, i) => (
                  <div key={i} className="story-reply-item">{r}</div>
                ))}
              </div>
            </div>
          </div>
        )}

        {uploadModalOpen && (
          <div className="upload-modal" onClick={() => setUploadModalOpen(false)}>
            <div className="upload-modal-content" onClick={e => e.stopPropagation()}>
              <textarea value={postText} onChange={e => setPostText(e.target.value)} placeholder="What's on your mind?" />
              <input type="file" accept="image/*" multiple onChange={handleFileChange} />
              <button onClick={handlePostUpload}>Post</button>
            </div>
          </div>
        )}

        <div className="fb-stories-container">
          {stories.map((s, i) => (
            <div key={s.id} className="fb-story" onClick={() => i === 0 ? handleYourStoryClick() : setStoryModal(s)}>
              <img src={s.img} alt={s.title} />
            </div>
          ))}
        </div>

        <div className="fb-feed">
          {filteredPosts.map(post => (
            <div key={post.id} className="fb-post">
              <div className="post-header">
                <img src={post.profilePic} alt={post.name} className="post-profile-pic" />
                <div className="post-user-info">
                  <strong>{post.name}</strong><span>{post.time}</span>
                </div>
                {post.name === "You" && (
                  <div className="post-options">
                    <button onClick={() => setShowDeleteMenu(showDeleteMenu === post.id ? null : post.id)} className="options-btn">⋮</button>
                    {showDeleteMenu === post.id && (
                      <div className="delete-menu">
                        <button onClick={() => deletePost(post.id)}>Delete</button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="post-content">
                <p>{post.content}</p>
                {post.images?.map((img, idx) => <img key={idx} src={img} alt={`post-${idx}`} />)}
              </div>
              <div className="post-actions">
                <span onClick={() => toggleLike(post.id)}>👍 {post.liked ? "Liked" : "Like"} ({post.likes})</span>
                <span>💬 Comment</span>
                <span>↗️ Share</span>
              </div>
              <div className="replies">
                {post.replies.map((r, i) => (
                  <div key={i} className="reply">{r}
                    <button onClick={() => deleteReply(post.id, i)}>❌</button>
                  </div>
                ))}
                <div className="reply-box">
                  <input placeholder="Write a comment..." onKeyDown={e => {
                    if (e.key === "Enter") {
                      handleReply(post.id, e.target.value);
                      e.target.value = "";
                    }
                  }} />
                  <button onClick={e => {
                    const inp = e.target.previousSibling;
                    handleReply(post.id, inp.value);
                    inp.value = "";
                  }}>Reply</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FacebookHome;

