export default function ListItem(props) {
  return (
    <div>
      <ul>
        <li>姓名 - {props.name}</li>
        <li>年龄 - {props.age}</li>
      </ul>
    </div>
  )
}
