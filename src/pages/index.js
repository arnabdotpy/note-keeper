import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'

function createNote(ctx) {
  return (
    <>
    <Card 
    key = {ctx._id}
    title = {ctx.title}
    content = {ctx.content}
    />
    </>
  )
}

export default function Home(props) {
  return (
    <>
    {/* Header Section */}
    <form className={styles.form} action="https://notekeeper.arnab.tech/api/addnote" method="post">
      <textarea className={styles.textarea1} placeholder="Title goes here" name="title"></textarea>
      <textarea className={styles.textarea2} placeholder="Note goes here" name="content"></textarea>
      <button className={styles.btn} >Add Note</button>
    </form>
    <div className={styles.notes}>
      {props.notes.map(createNote)}
    </div>
    </>
)}

export async function getServerSideProps(context) {
  let data = await fetch("https://notekeeper.arnab.tech/api/getnotes");
  let notes = await data.json();
return {    
  props: {notes}, // will be passed to the page component as props
}
}
