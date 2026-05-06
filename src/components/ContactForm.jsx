function ContactForm() {
  return (
    <section className="w-full bg-[#f7f7f7] px-6 py-[30px] md:px-[58px]">
      <div className="mx-auto grid min-h-[560px] max-w-[1280px] items-center gap-12 rounded-2xl bg-white px-8 py-14 md:grid-cols-2 md:px-20">
        <div className="max-w-[500px]">
          <h2 className="text-[20px] leading-tight text-black">
            We&apos;re here to help! Have a question or feedback?
            <br />
            Use the form below or email us at:
          </h2>
          <a
            className="mt-7 inline-block text-[20px] font-black leading-tight text-black no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#002f49]"
            href="mailto:info@thewalkeradvisor.com"
          >
            info@thewalkeradvisor.com
          </a>
        </div>

        <form className="ml-auto flex w-full max-w-[450px] flex-col gap-[15px]" action="#">
          <label className="sr-only" htmlFor="contact-name">
            Your name
          </label>
          <input
            className="h-10 rounded-xl border-2 border-black bg-white px-5 text-sm font-semibold text-[#1c2730] outline-none placeholder:text-[#1c2730] focus:ring-2 focus:ring-[#002f49]"
            id="contact-name"
            name="name"
            placeholder="Your name"
            type="text"
          />

          <label className="sr-only" htmlFor="contact-email">
            Your email
          </label>
          <input
            className="h-10 rounded-xl border-2 border-black bg-white px-5 text-sm font-semibold text-[#1c2730] outline-none placeholder:text-[#1c2730] focus:ring-2 focus:ring-[#002f49]"
            id="contact-email"
            name="email"
            placeholder="Your email"
            type="email"
          />

          <label className="sr-only" htmlFor="contact-phone">
            Your phone
          </label>
          <input
            className="h-10 rounded-xl border-2 border-black bg-white px-5 text-sm font-semibold text-[#1c2730] outline-none placeholder:text-[#1c2730] focus:ring-2 focus:ring-[#002f49]"
            id="contact-phone"
            name="phone"
            placeholder="Your phone"
            type="tel"
          />

          <label className="sr-only" htmlFor="contact-comment">
            Your Comment
          </label>
          <textarea
            className="h-[120px] resize-y rounded-xl border-2 border-black bg-white px-5 py-4 text-sm font-semibold text-[#1c2730] outline-none placeholder:text-[#1c2730] focus:ring-2 focus:ring-[#002f49]"
            id="contact-comment"
            name="comment"
            placeholder="Your Comment"
          />

          <div className="mt-1 flex h-[76px] w-[302px] items-center justify-between border border-[#d1d1d1] bg-[#fafafa] px-3 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="h-7 w-7 border-2 border-[#555] bg-white" />
              <span className="text-sm font-medium text-black">I&apos;m not a robot</span>
            </div>
            <div className="flex flex-col items-center text-[9px] leading-none text-[#555]">
              <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-sm bg-[#5b7fe5] text-lg font-black text-white">
                ↻
              </div>
              reCAPTCHA
            </div>
          </div>

          <button
            className="mt-0 h-[46px] rounded-full bg-[#002f49] text-sm font-black text-white transition-colors duration-150 hover:bg-[#014363] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002f49]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
