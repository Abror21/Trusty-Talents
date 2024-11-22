import React from 'react'
import { StyledBenefits } from './style'
import { Image } from 'antd'
import imagePlaceholder from 'assets/images/image-placeholder.svg'

const Benefits = () => {
    return (
        <StyledBenefits>
            <div className="container">
                <div className="benefits__first">
                    <Image
                        preview={false}
                        src={"https://media.istockphoto.com/id/1396644902/photo/businesswoman-posing-and-smiling-during-a-meeting-in-an-office.jpg?s=612x612&w=0&k=20&c=7wzUE1CRFOccGnps-XZWOJIyDvqA3xGbL2c49PU5_m8="}
                        fallback={imagePlaceholder}
                        alt='Handshake'
                    />
                    <div className='benefits__text'>
                        <span className='benefits__suptitle'>benefits</span>
                        <h5 className='benefits__title'>For employers</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam officiis laboriosam molestias recusandae maxime expedita repellendus error alias, adipisci illum commodi dolorem enim ex in. Dolore, est molestiae! Soluta quae iure placeat quas temporibus architecto, hic voluptas suscipit tempora ex consectetur asperiores nesciunt saepe esse culpa libero id quidem dicta labore nisi eum repellat! Nulla accusantium soluta sint deleniti! Ipsam praesentium cumque, sed numquam, soluta molestiae eligendi atque assumenda fugit culpa harum. Quod molestias iste molestiae ad laboriosam numquam provident aspernatur. Unde, blanditiis aspernatur. Repellat ratione, eius corrupti sequi atque nobis inventore officiis doloribus enim animi harum veritatis similique illum voluptatibus rerum officia perferendis id voluptates quis neque totam consequuntur! Atque, consequatur cupiditate hic dolorem modi impedit minus, libero, pariatur deleniti eaque id perferendis nulla aspernatur fugit odio laboriosam. Voluptates sapiente deserunt, in quis vitae impedit quisquam minus quaerat, excepturi, tempora provident ea. Totam suscipit doloribus ullam quasi, autem ducimus exercitationem facere assumenda obcaecati quam error eligendi
                        </p>
                    </div>
                </div>

                <div className="benefits__second">
                    <div className='benefits__text'>
                        <span className='benefits__suptitle'>benefits</span>
                        <h5 className='benefits__title'>For employers</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam officiis laboriosam molestias recusandae maxime expedita repellendus error alias, adipisci illum commodi dolorem enim ex in. Dolore, est molestiae! Soluta quae iure placeat quas temporibus architecto, hic voluptas suscipit tempora ex consectetur asperiores nesciunt saepe esse culpa libero id quidem dicta labore nisi eum repellat! Nulla accusantium soluta sint deleniti! Ipsam praesentium cumque, sed numquam, soluta molestiae eligendi atque assumenda fugit culpa harum. Quod molestias iste molestiae ad laboriosam numquam provident aspernatur. Unde, blanditiis aspernatur. Repellat ratione, eius corrupti sequi atque nobis inventore officiis doloribus enim animi harum veritatis similique illum voluptatibus rerum officia perferendis id voluptates quis neque totam consequuntur! Atque, consequatur cupiditate hic dolorem modi impedit minus, libero, pariatur deleniti eaque id perferendis nulla aspernatur fugit odio laboriosam. Voluptates sapiente deserunt, in quis vitae impedit quisquam minus quaerat, excepturi, tempora provident ea. Totam suscipit doloribus ullam quasi, autem ducimus exercitationem facere assumenda obcaecati quam error eligendi
                        </p>
                    </div>
                    <Image
                        preview={false}
                        src={"https://st2.depositphotos.com/1594308/10487/i/950/depositphotos_104870148-stock-photo-team-working-at-office.jpg"}
                        fallback={imagePlaceholder}
                        alt='Handshake'
                    />
                </div>
            </div>
        </StyledBenefits>
    )
}

export default Benefits