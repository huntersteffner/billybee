const Contact = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-[#002247]">
        <div className="container mx-auto px-6 py-2">
          <h2 className="text-center text-5xl font-bold">Contact For More Info</h2>
          <form className="mx-auto">
            <div className="flex flex-col space-y-5">
              <input className="p-3 text-2xl" type="text" id="name" placeholder="Name" />
              <input className="p-3 text-2xl" type="text" id="phone" placeholder="Phone" />
              <input className="p-3 text-2xl" type="email" id="email" placeholder="Email" />
              <input className="p-3 text-2xl" type="number" id="passengers" placeholder="Number of People" />
              <textarea className="p-3 text-2xl" type="text" placeholder="Message" rows='5' />
            </div>
            <button className="btn" type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
