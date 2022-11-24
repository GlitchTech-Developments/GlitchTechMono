/* eslint-disable @typescript-eslint/no-explicit-any */

const Section = (props: any) => {
  return (
    <div className="mx-4 mt-[2vh]">
      <div className="card border-[3px] border-x-glitchtech_alt_dark border-y-glitchtech_alt_dark bg-translucent p-[1rem]">
        {props.children}
      </div>
    </div>
  );
};

export default Section;
