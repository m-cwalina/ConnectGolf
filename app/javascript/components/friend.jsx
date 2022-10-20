export default function Friend() {
  return (
    <div id='friends'>
      <div>
        <img/>
      </div>
      <div>
        <h1>Name: {}</h1>
        <h1>Age: {}</h1>
        <h1>Handicap: {}</h1>
        <div>
          <Form method='post'>
            <input type="hidden" name='friend_id' />
            <button type="submit">Add Friend</button>
          </Form>
        </div>
      </div>
    </div>
  )
}
