
import JoditEditor from 'jodit-react';
import { useState } from 'react';
const AddBlog = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Blog Content:', content);
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-10">
                <label htmlFor="title" className="block text-lg font-medium text-gray-700">
                    Blog Title
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 mt-2 border rounded-md"
                    required
                />
                <label htmlFor="content" className="block text-lg font-medium text-gray-700">
                    Blog Content
                </label>
                <JoditEditor
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                    tabIndex={1}
                />
                <button type="submit" className="mt-4 bg-second text-white p-2 rounded">
                    Publish Blog
                </button>
            </form>
        </div>
    );
};

export default AddBlog;