import React, {useState, useRef} from "react";
import './styles/App.css';
// import PostItem from "./components/Post-item";
import PostList from "./components/Post-list";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {

    const [posts, setPosts] = useState([
            {id: 1, title: 'JS 1', body: 'Desc 1'},
            {id: 2, title: 'JS 2', body: 'Desc 2'},
            {id: 3, title: 'JS 3', body: 'Desc 3'},
        ]
    );

    const [posts2, setPosts2] = useState([
            {id: 1, title: 'Python 1', body: 'Desc 1'},
            {id: 2, title: 'Python 2', body: 'Desc 2'},
            {id: 3, title: 'Python 3', body: 'Desc 3'},
        ]
    );

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();

        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''});
    }

    return (
        <div className="App">
            <form action="">
                {/*Управляемый компонент**/}
                <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} placeholder="post name"/>
                <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} placeholder="post body"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
            </form>
            <PostList posts={posts} title="За чем накуривать осу?"/>
            <PostList posts={posts2} title="За чем накуривать питона?"/>
        </div>
    );
}

export default App;
