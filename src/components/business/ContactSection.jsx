import React from 'react';

const ContactSection = () => {
  return (
    <div className="flex flex-col items-center p-10 bg-white">
      <div className="flex flex-col items-center text-center">
        <div className="text-sm font-medium text-gray-600">GET IN TOUCH</div>
        <div className="mt-2 text-2xl font-bold">Don't Be a Stranger Just Say Hello.</div>
      </div>
      {/* <div className="mt-8 flex flex-col items-center">
        <div className="flex gap-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/67658aa7665286a756a6cc43c241abaa33a0189b3186fba70fb11f760bb11884?apiKey=46346ef9d373469da9420a0f5077d52a&width=2000"
            alt="Image 1"
            className="w-48 h-auto"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd5897d7079982873e9ae48f5ab36163a81010ba9db9df17524617593bfd732a?apiKey=46346ef9d373469da9420a0f5077d52a&width=2000"
            alt="Image 2"
            className="w-48 h-auto"
          />
        </div>
      </div> */}
      <div className="mt-8 w-full max-w-lg">
        <div className="text-center text-gray-600 mb-4">
          Accumsan in nisl nisi scelerisque eu. Massa id neque aliquam vestibulum morbi blandit cursus. Molestie ac feugiat sed lectus vestibulum mattis.
        </div>
        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Your name" className="flex-1 px-4 py-2 border rounded-md" />
            <input type="email" placeholder="Email" className="flex-1 px-4 py-2 border rounded-md" />
          </div>
          <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-md h-32"></textarea>
          <button type="submit" className="w-full py-2 text-white bg-black rounded-md">
            Submit
          </button>
        </form>
      </div>
      <div className="mt-12 flex flex-col sm:flex-row justify-around w-full max-w-3xl text-center sm:text-left">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cceba407307ded9f76d59790be1d13fa1a20f3198298de7a8b93ef43af990415?apiKey=46346ef9d373469da9420a0f5077d52a&"
            alt="Phone Icon"
            className="w-6 h-6"
          />
          <div>
            <div className="text-lg font-semibold">Phone number</div>
            <div className="text-sm text-gray-600">+855 44 65 4545</div>
            <div className="text-sm text-gray-600">+855 44 65 4545</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9fcd56f90ad4cf82d2cc929c719463d07ec5e48c4aba07f1fbf926bb7db415ac?apiKey=46346ef9d373469da9420a0f5077d52a&"
            alt="Email Icon"
            className="w-6 h-6"
          />
          <div>
            <div className="text-lg font-semibold">Email address</div>
            <div className="text-sm text-gray-600">showcase@gmail.com</div>
            <div className="text-sm text-gray-600">info@gmail.com</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7bd2818ad3a588bb180fa587df4fd0b5125fd25cc72852b2bfd4f35bc25ce41?apiKey=46346ef9d373469da9420a0f5077d52a&"
            alt="Location Icon"
            className="w-6 h-6"
          />
          <div>
            <div className="text-lg font-semibold">Office Location</div>
            <div className="text-sm text-gray-600">
              TDP Agency The Barn Moat House Farm IP7 7DB
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
