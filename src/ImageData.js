import React from "react";
import TitleBarGridList from "./TitleBarGridList";
import Display from "./Display";

class ImageData extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      image: [],
    };
  }

  async componentDidMount() {
    const url = "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=10";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ image: data, loading: false });
    console.log(data);
  }

  render() {
    if (this.state.loading) {
      return <div> loading ... </div>;
    }
    if (!this.state.image.length) {
      return <div> didnt get an image</div>;
    }

    return (
      <div>
        {this.state.image.map((img) => (
          <div>
            <div>
              
              <TitleBarGridList
                showImage={img.url}
                showTitle={img.title}
                showAlbum={img.albumId}
              />{" "}
            </div>
            <div key={img.id}>
              <ul></ul>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ImageData;

