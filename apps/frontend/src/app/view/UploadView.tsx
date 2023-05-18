

const UploadView = () => {

    return (
        <div>
            <h1>File upload</h1>
            <form action="http://localhost:3333/upload" method="POST" encType="multipart/form-data">
                <input type="file" name="file" />
                <input type="text" name="desc" placeholder="Add description"/>
                <input type="text" name="creator" placeholder="Add creator" />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default UploadView;