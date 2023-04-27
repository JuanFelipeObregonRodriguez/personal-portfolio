import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
    <div name="contact" className="w-full bg-[#90ff17] flex justify-center items-center p-4">
      <form method="POST" action="https://getform.io/f/cae12ecf-2538-4aa5-b6a9-da75d7656d47" className="flex flex-col p-4 max-w-[600px] w-full sm:text-center">
          <div className="pb-8">
            <p className=" tracking-[.10em] text-4xl font-bold inline border-b-4 border-white text-[#002e34]">Contact</p>
            <p className="text-[#002e34] py-4">Submit the form below or shoot me an email - juanfelipeobregonrodriguez@gmail.com</p>
          </div>
          <input className="my-2 p-3 bg-[#004443] rounded-xl" type="text" placeholder="Name" name="name" />
          <input className="my-2 p-3 bg-[#004443] rounded-xl" type="email" placeholder="Email" name="email" />
          <textarea className="my-2 p-3 bg-[#004443]" name="message" rows="10" placeholder="Message"></textarea>
          <button className=" tracking-[.10em] text-white border-2 hover:bg-[#00c16c] hover:border-[#002e34] px-4 py-3 my-8 mx-auto flex items-center">Let's work together!</button>
      </form>
    </div>
    <div class="bg-[#002e34] text-center sm:text-center">
    <h5 class=" tracking-[.10em] text-xl text-[#002e34] font-bold mb-6 sm:text-center">Stay connected</h5>
        <div className="space-x-[20px] py-6 flex justify-center sm:justify-center">
        <a href="hhttps://github.com/JuanFelipeObregonRodriguez"><FaGithub  color="#fff" size={30} /></a> 
        <a href="https://www.linkedin.com/in/juan-obregon-82a63a208/"><FaLinkedin  color="#fff" size={30}/></a>
        </div>
        <p className="font-Roboto py-12 text-white">Made by Juan Obregon 2023 &copy;</p>
    </div>
  </>
  )
}

export default Contact