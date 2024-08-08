import styles from "./page.module.css";

//teaching Ferchu the basics,
//he seems to have problems opening his project, aparently by not understanding what the main body of the projects is
//good tag understanding

export default function Home() {
  return (
      <div className={styles.container}>
        <h1>CatPhotoApp</h1>
        <h2>Cat Photos</h2>
        <p>See more <a href="https://freecatphotoapp.com" target="_blank">cat photos</a> in our gallery.</p>
        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt=""/>
        <ul></ul>
      </div>
  );
}
