// src/CommentSystem.js
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../config/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, push, onValue, serverTimestamp } from 'firebase/database';
import './CommentSystem.css';

const CommentSystem = ({ communityId, sportsAreaId }) => {
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
  
      const commentsRef = ref(db, `comments/${communityId || 'general'}/${sportsAreaId || 'general'}`);
      onValue(commentsRef, (snapshot) => {
        const data = snapshot.val();
        const commentsArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
        setComments(commentsArray);
      });
    }, [communityId, sportsAreaId]);
  
    const handleLogin = () => {
      const email = prompt('Email:');
      const password = prompt('Password:');
      signInWithEmailAndPassword(auth, email, password).catch((error) => {
        console.error('Error logging in:', error);
      });
    };
  
    const handleCommentSubmit = async (e) => {
      e.preventDefault();
      if (comment.trim() === '') return;
  
      const commentsRef = ref(db, `comments/${communityId || 'general'}/${sportsAreaId || 'general'}`);
      await push(commentsRef, {
        userId: user.uid,
        userName: user.displayName || user.email,
        comment,
        createdAt: serverTimestamp()
      });
  
      setComment('');
    };
  
    return (
      <div className="comment-system-container">
        <h2 className='comment-title'>Comments</h2>
        {user ? (
          <div>
            <form onSubmit={handleCommentSubmit}>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
                required
              />
              <button type="submit">Submit</button>
            </form>
            <div className="comment-list">
              {comments.map((com) => (
                <div key={com.id}>
                  <p><strong>{com.userName}</strong>: {com.comment}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <button onClick={handleLogin}>Log in to comment</button>
        )}
      </div>
    );
  };
  
  export default CommentSystem;