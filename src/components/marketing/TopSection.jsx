import PrimaryButton from "./ButtonPrimary";

export function TopSection(){
    return(
        <div className="flex xl:justify-between">
            <section>
            <small className="text-md"><span className="text-yellow-300">//</span>
                INTRODUCTION
            </small>
            <h1 className="text-5xl w-500 font-semibold">Introduction, Hello I'm
                <span className="text-blue-500"> Chhoeurn</span> marketing
            </h1>
            <br />
            <small className="w-500 text-sm">
            I am a Marketing & Digital Marketing Freelancer.
            </small>
            <br />
            <small className="">
            With a great passion about real and honest business conversations.
            </small>
            <br />
            <br />
            <div className="flex flex-row gap-5">
            <PrimaryButton text="How can i help"/>
            </div>
            </section>
            <section>
                <img src="https://img.freepik.com/free-psd/3d-rendering-avatar_23-2150833560.jpg?ga=GA1.1.2056033420.1720530640&semt=sph" alt="Marketing" className="w-[350px] max-w-[350px] rounded-xl"/>
            </section>
        </div>
    );
}