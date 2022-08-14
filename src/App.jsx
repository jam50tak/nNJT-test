import React from "react";
import "./styles.css";

export const App = () => {
  /* Googleスプレッドシートに登録されているURLから画像表示用URLを取得する */
  const getJpgUrl = (inputUrl) => {
    return (
      "http://drive.google.com/uc?export=view&" +
      inputUrl.slice(inputUrl.indexOf("id="))
    );
  };

  return (
    <>
      <div>
        <p>
          Googleドライブに保存されている画像のURLを直接指定して、画像表示させました。
        </p>
      </div>
      <div>
        <img
          src={getJpgUrl(
            "https://drive.google.com/open?id=1uySKFf1ZKGkmwe9K7GJ3z_wGpSX9gADg"
          )}
          alt="name"
        />
      </div>
      <div>
        <p>フッター</p>
      </div>
    </>
  );
};
