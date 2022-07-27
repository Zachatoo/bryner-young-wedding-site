export function RegistryLinksText() {
  return (
    <>
      <div className="pb-4 text-lg text-center sm:text-xl sm:pb-6">
        We are registered at
      </div>
      <div className="flex justify-center max-w-lg pb-2 mx-auto sm:pb-4 sm:text-lg">
        <div className="flex-grow text-center basis-0">
          <a
            href="https://www.crateandbarrel.com/gift-registry/mary-katherine-bryner-and-zachary-young/r6550371"
            target="_blank"
            rel="noreferrer"
          >
            Crate &amp; Barrel
          </a>
        </div>
        <span className="basis-1">and</span>
        <div className="flex-grow text-center basis-0">
          <a
            href="https://www.target.com/gift-registry/gift/bryner-young-wedding"
            target="_blank"
            rel="noreferrer"
          >
            Target
          </a>
        </div>
      </div>
      <div className="px-4 pb-4 text-center sm:pb-6 sm:text-lg">
        You can also contribute to our small appliance fund through{" "}
        <a
          href="https://venmo.com/code?user_id=2354058681647104196&created=1658892240"
          target="_blank"
          rel="noreferrer"
        >
          Venmo
        </a>
        .
      </div>
      <div className="px-4 pb-6 text-lg text-center sm:text-xl sm:pb-8">
        Thank you so much for helping us start our little home!
      </div>
    </>
  );
}
