import React from "react";
import { useParams } from "react-router-dom";
import ButtonNavBack from "../../common/components/ButtonNavBack";
import useUserPhotos from "../hooks/useUserPhotos";

export default function UserPhotosPage() {
  const { photosId } = useParams();
  const photos = useUserPhotos(photosId);
  return (
    <div className="App__users-photos container">
      <div>
        <h2>Photos</h2>
        <ButtonNavBack />
      </div>
      <div className="row">
        {photos.map((item) => {
          return (
            <div className="App__users-photos-card" key={item.id}>
              <div className="col s12 m4 l3">
                <div className="card">
                  <div className="card-image">
                    <img src={item.thumbnailUrl} alt=""></img>
                    <span className="card-title">Card Title</span>
                  </div>
                  <div className="card-content">
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
